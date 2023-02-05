const User = require("../models/User")
const DepositRecord = require("../models/DepositRecord")
const DailyRoi = require("../models/DailyRoi")
const LapRoi = require("../models/LapRoi")
const MyUpperline = require("../models/MyUpperlines")
const LevelDailyRoi = require("../models/LevelDailyRoi")
const { updateTeamRecord } = require("../helpers/update-team-record")

exports.checkTeamRecord = async (req, res) => {

  const findAllUsers = await User.find()

  for (let indexdf = 0; indexdf < findAllUsers.length; indexdf++) {
    const MeUser = findAllUsers[indexdf];

    var findUser = MeUser

    const getPackage = await DepositRecord.find({ RecordOwner: MeUser._id })

    if (getPackage.length > 0) {

      for (let indexs = 0; indexs < getPackage.length; indexs++) {

        var ele = getPackage[indexs];

        var depositedAmount = Number(ele.DepositAmount)

        var Dates = new Date()

        var getDay = Dates.getDate()
        var getMonth = Dates.getMonth() + 1
        var getYear = Dates.getFullYear()

        var findTodayROIData = await DailyRoi.find({ RoiOwner: findUser._id, Date: `${getYear}-${getMonth}-${getDay}` }).sort({ datefield: -1 })
        var findTodayROIDataOld = await DailyRoi.find({ RoiOwner: findUser._id }).sort({ _id: -1 })

        const today = new Date();
        const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const endOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());

        var findMyPackageDate = await DepositRecord.findOne({ RecordOwner: findUser._id, Date: getYear + "-" + getMonth + "-" + getDay })

        var totalStakedAmount = 0

        getPackage.map((hit) => {
          return totalStakedAmount = totalStakedAmount + Number(hit.DepositAmount)
        })


        var AmountPercantage = totalStakedAmount * 300 / 100


        if (Number(findUser.Wallete) >= Number(AmountPercantage)) {

          var percan = depositedAmount * 0.5 / 100
          const giveRewardLapRoi = await LapRoi({
            RoiOwner: findUser._id,
            StepsWalked: "0",
            GiveRoiCoin: percan,
            GiveRoiPercantage: "0.5",
            PurchasedPackageName: "wegwe",
            Date: `${getYear}-${getMonth}-${getDay}`
          }).save()




        } else {

          if (findMyPackageDate !== null) {

            if (findTodayROIDataOld.length > 0) {

              var lastDataDate = findTodayROIDataOld[0].createdAt


              let date1 = new Date(lastDataDate);
              let date2 = new Date();

              let differenceInTime = date2.getTime() - date1.getTime();
              let differenceInDays = differenceInTime / (1000 * 3600 * 24);

              var diffDays = Math.floor(differenceInDays)


              var num = 0

              var index = 1
              var percan = depositedAmount * 0.5 / 100


              console.log("And this user will get this much of amount => " + percan)

              // while (Number(num) < Number(diffDays)) {
                var giveReward = await DailyRoi({
                  RoiOwner: findUser._id,
                  StepsWalked: "0",
                  GiveRoiCoin: percan,
                  GiveRoiPercantage: "0.5",
                  PurchasedPackageName: "wegwe",
                  Date: `${getYear}-${getMonth}-${getDay}`
                }).save()
                num = num + 1
              // }



              // Level income starting from here


              // Level Logic Is Here



                console.log(findUser._id)
              const MyUpperlinesPeople = await MyUpperline.find({ MyUserid: findUser._id });

              console.log(MyUpperlinesPeople)

              for (let index = 0; index < MyUpperlinesPeople.length; index++) {


                console.log("level inc ")

                const element = MyUpperlinesPeople[index];
                var myLevels = JSON.parse(element.MyUpperLines)

                for (let indexs = 0; indexs < myLevels.length; indexs++) {

                  const elementss = myLevels[indexs];

                  console.log("came herers")
                  
                  const findUsers = await User.findOne({ WalletAddress: elementss })

                  var percen = 0

                  if (indexs + 1 == 1) {
                    percen = 20
                  } else if (indexs + 1 == 2) {
                    percen = 7.5

                  } else if (indexs + 1 == 3) {
                    percen = 5

                  } else if (indexs + 1 == 4) {
                    percen = 2.5

                  } else if (indexs + 1 == 5) {

                    percen = 1.5
                  } else if (indexs + 1 >= 6 && indexs + 1 <= 10) {
                    percen = 1

                  } else if (indexs + 1 > 10) {
                    percen = 0.5

                  }

                  if (findUsers) {


                    const getPacks = await DepositRecord.find({ RecordOwner: findUsers._id })
                    console.log("belowss ===>")
                    
                    
                    if (getPacks.length > 0) {



                      const findReferals = await User.find({ UpperLineSponserUser: findUsers.WalletAddress })
                      console.log("nichec refs hai")
                    console.log(findReferals)

                      // if (Number(findReferals) == indexs + 1) {





                        var sum = Number(findUsers.Wallete) + Number(percan) * percen / 100

                        await User.findByIdAndUpdate({ _id: findUsers._id }, { Wallete: sum })

                        await LevelDailyRoi({

                          ROIOwner: findUsers._id,
                          LevelEarned: index+1,
                          coinEarned: Number(percan) * percen / 100,
                          EarnedPercantage: percen,
                          rewardGetFrom: findUser._id,
                          rewardGetFromName: "nulls",

                        }).save()


                      // }



                    }




                  }
                }

                index+1 == 15
                break;
              }

            } else {
              var percan = depositedAmount * 0.5 / 100
              const giveReward = await DailyRoi({
                RoiOwner: findUser._id,
                StepsWalked: "0",
                GiveRoiCoin: percan,
                GiveRoiPercantage: "0.5",
                PurchasedPackageName: "wegwe",
                Date: `${getYear}-${getMonth}-${getDay}`
              }).save()


              // Level Logic Is Here





              const MyUpperlinesPeople = await MyUpperline.find({ MyUserid: findUser._id });

              for (let index = 0; index < MyUpperlinesPeople.length; index++) {

                const element = MyUpperlinesPeople[index];
                var myLevels = JSON.parse(element.MyUpperLines)

                console.log("poings")

                for (let indexs = 0; indexs < myLevels.length; indexs++) {

                  const elementss = myLevels[indexs];
                  console.log("bills")
                  console.log(elementss)

                  const findUsers = await User.findOne({ WalletAddress: elementss })



                  var percen = 0

                  if (indexs + 1 == 1) {
                    percen = 20
                  } else if (indexs + 1 == 2) {
                    percen = 7.5

                  } else if (indexs + 1 == 3) {
                    percen = 5

                  } else if (indexs + 1 == 4) {
                    percen = 2.5

                  } else if (indexs + 1 == 5) {

                    percen = 1.5
                  } else if (indexs + 1 >= 6 && indexs + 1 <= 10) {
                    percen = 1

                  } else if (indexs + 1 > 10) {
                    percen = 0.5

                  }




                  if (findUsers) {
                    const getPacks = await DepositRecord.find({ RecordOwner: findUsers._id })
                    console.log("comes till here")
                    if (getPacks.length > 0) {

                      const findReferals = await User.find({ UpperLineSponserUser: findUsers.WalletAddress })



                      // if (Number(findReferals) == indexs + 1) {




                        var sum = Number(findUsers.Wallete) + Number(percan) * percen / 100

                        await User.findByIdAndUpdate({ _id: findUsers._id }, { Wallete: sum })

                        await LevelDailyRoi({

                          ROIOwner: findUsers._id,
                          LevelEarned: index+1,
                          coinEarned: Number(percan) * 20 / 100,
                          EarnedPercantage: percen,
                          rewardGetFrom: findUser._id,
                          rewardGetFromName: "nulls",

                        }).save()


                      // }





                    }
                  }
                }

              }




            }

          }
        }





      }

    }



  }

































  return res.status(200).json({
    success: true,
    data: {
      status: "Cron triggered successfully!!"
    }
  });
}
