const User = require("../models/User");
const CareerReward = require("../models/CareerReward");
const DepositRecord = require("../models/DepositRecord");
const { format, differenceInHours, parse, subDays } = require("date-fns");
const { getDailyRewardLevel, levelEligibleFor } = require("./get-daily-reward");
const ShortRecord = require("../models/ShortRecord");

const convertToMaxHeap = (referredUsersPackageAmounts) => {
  let currentIndex = Math.floor((referredUsersPackageAmounts.length - 1) / 2);

  while (currentIndex >= 0) {
    maxHeapify(
      referredUsersPackageAmounts,
      currentIndex,
      referredUsersPackageAmounts.length - 1
    );
    currentIndex--;
  }
};

const heapPop = (referredUsersPackageAmounts) => {
  if (referredUsersPackageAmounts.length < 1) return 0;
  if (referredUsersPackageAmounts.length === 1)
    return referredUsersPackageAmounts.pop();

  [
    referredUsersPackageAmounts[0],
    referredUsersPackageAmounts[referredUsersPackageAmounts.length - 1],
  ] = [
    referredUsersPackageAmounts[referredUsersPackageAmounts.length - 1],
    referredUsersPackageAmounts[0],
  ];

  const maxValue = referredUsersPackageAmounts.pop();

  maxHeapify(
    referredUsersPackageAmounts,
    0,
    referredUsersPackageAmounts.length - 1
  );

  return maxValue;
};

const maxHeapify = (referredUsersPackageAmounts, parentIndex, maxLength) => {
  if (parentIndex > maxLength || parentIndex < 0) return;

  let leftChildIndex = parentIndex * 2 + 1;
  let rightChildIndex = parentIndex * 2 + 2;
  let maxIndex = parentIndex;

  if (
    leftChildIndex <= maxLength &&
    referredUsersPackageAmounts[leftChildIndex] >
      referredUsersPackageAmounts[maxIndex]
  )
    maxIndex = leftChildIndex;

  if (
    rightChildIndex <= maxLength &&
    referredUsersPackageAmounts[rightChildIndex] >
      referredUsersPackageAmounts[maxIndex]
  )
    maxIndex = rightChildIndex;

  if (maxIndex !== parentIndex) {
    [
      referredUsersPackageAmounts[parentIndex],
      referredUsersPackageAmounts[maxIndex],
    ] = [
      referredUsersPackageAmounts[maxIndex],
      referredUsersPackageAmounts[parentIndex],
    ];

    maxHeapify(referredUsersPackageAmounts, maxIndex, maxLength);
  }
};

const calculateRewards = async (userId, rewardCache) => {
  if (rewardCache[userId] !== undefined) return rewardCache[userId];

  const userRetrieved = await User.findById(userId);

  const childUsers = await User.find({
    UpperLineSponserUser: userRetrieved.WalletAddress,
  }).select("id");

  if (childUsers.length <= 0) {
    const myDepositRecords = await DepositRecord.find({
      RecordOwner: userRetrieved.id,
    });

    let myAmount = 0;

    myDepositRecords.forEach((record) => {
      if (record.DepositAmount !== "null") {
        myAmount += Number(record.DepositAmount);
      }
    });

    rewardCache[userId] = {
      rewardTier: "InEligible",
      rewardAmount: 0,
      childIncome: 0,
      myAmount,
    };

    return rewardCache[userId];
  }

  let myBestChildrenIncomes = [];

  for (let childUser of childUsers) {
    const currentChildrenIncomes = await calculateRewards(
      childUser.id,
      rewardCache
    );

    myBestChildrenIncomes = [
      ...myBestChildrenIncomes,
      currentChildrenIncomes.childIncome + currentChildrenIncomes.myAmount,
    ];
  }

  let totalChildIncome = 0;

  myBestChildrenIncomes.forEach((num) => (totalChildIncome += num));

  if (myBestChildrenIncomes.length < 3) {
    rewardCache[userId] = {
      rewardTier: "InEligible",
      rewardAmount: 0,
      childIncome: totalChildIncome,
      myAmount: Number(userRetrieved.Wallete),
    };

    return rewardCache[userId];
  }

  convertToMaxHeap(myBestChildrenIncomes);

  const bestAmount = heapPop(myBestChildrenIncomes);
  const secondBestAmount = heapPop(myBestChildrenIncomes);
  const thirdBestAmount = heapPop(myBestChildrenIncomes);

  const eligibleTier = levelEligibleFor(
    bestAmount,
    secondBestAmount,
    thirdBestAmount
  );

  // console.log(userId, bestAmount*0.40, secondBestAmount*0.30, thirdBestAmount*0.30);

  const rewardAmount = bestAmount + secondBestAmount + thirdBestAmount;

  const myDepositRecords = await DepositRecord.find({
    RecordOwner: userRetrieved.id,
  });

  let myAmount = 0;

  myDepositRecords.forEach((record) => {
    if (record.DepositAmount !== "null") {
      myAmount += Number(record.DepositAmount);
    }
  });

  rewardCache[userId] = {
    rewardTier: eligibleTier,
    rewardAmount: rewardAmount,
    childIncome: totalChildIncome,
    myAmount,
  };

  return rewardCache[userId];
};

exports.grantReward = async () => {
  const rewardCache = {};

  const allUsersIds = await User.find({}).select("id");

  console.log(allUsersIds.length);

  for (let retrievedUser of allUsersIds) {
    let userdIdShortRecord = await ShortRecord.findOne({
      RecordOwner: retrievedUser.id,
    });

    if (userdIdShortRecord === null) {
      userdIdShortRecord = await ShortRecord.create({
        RecordOwner: retrievedUser.id,
      });
    }

    const totalRewardIncome =
      userdIdShortRecord.AllTimeLevelBusiness +
      userdIdShortRecord.AllTimeDailyBusiness +
      userdIdShortRecord.AllTimeCareerReward;

    const myDepositRecords = await DepositRecord.find({
      RecordOwner: retrievedUser.id,
    });

    let myTotalDeposit = 0;

    myDepositRecords.forEach(
      (record) => (myTotalDeposit += Number(record.DepositAmount))
    );

    if (3 * myTotalDeposit < totalRewardIncome) {
      console.log("InEligible");
      continue;
    }

    const rewards = await CareerReward.find({
      user_id: retrievedUser.id,
    })
      .sort("-createdAt")
      .limit(1);

    if (rewards.length > 0) {
      const lastRewardTimeString = rewards[0].time_granted;
      const lastRewardTime = parse(
        lastRewardTimeString,
        "dd MM yyyy HH:mm",
        new Date()
      );

      const currentDate = new Date();

      const hourDifference = differenceInHours(currentDate, lastRewardTime);

      const totalDaysToBeGranted = hourDifference % 24;

      if (totalDaysToBeGranted <= 0) continue;

      const eachDayRewardToBeGranted = await calculateRewards(
        retrievedUser.id,
        rewardCache
      );

      const dailyReward = getDailyRewardLevel(
        eachDayRewardToBeGranted.rewardTier
      );

      for (let i = 0; i < totalDaysToBeGranted; i++) {
        const date = subDays(new Date(), i);
        const dateString = format(date, "dd MM yyyy HH:mm");

        await CareerReward.create({
          user_id: retrievedUser.id,
          reward_level: eachDayRewardToBeGranted.rewardTier,
          reward_granted: dailyReward,
          time_granted: dateString,
        });
      }
    } else {
      const eachDayRewardToBeGranted = await calculateRewards(
        retrievedUser.id,
        rewardCache
      );
      const dailyReward = getDailyRewardLevel(
        eachDayRewardToBeGranted.rewardTier
      );

      const dateString = format(new Date(), "dd MM yyyy HH:mm");

      await CareerReward.create({
        user_id: retrievedUser.id,
        reward_level: eachDayRewardToBeGranted.rewardTier,
        reward_granted: dailyReward,
        time_granted: dateString,
      });
    }
  }

  console.log(rewardCache);

  console.log("DONE!!");
};
