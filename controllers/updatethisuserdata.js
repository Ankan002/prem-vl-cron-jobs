const User = require("../models/User")
const MyUpperlines = require("../models/MyUpperlines")
const ShortRecord = require("../models/ShortRecord")

exports.careerRewardController = async(req, res) => {

    const UsersData = [
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "oxoxoxoxoxoxoxoxoxoxxxxoxxoxx",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "__v": 0
      },
      {
      "_id": {
        "$oid": "63e4c9d48e8e0d02651e270c"
      },
      "stakedBal1": "100",
      "stakedTime1": "1674483820",
      "rewardCalculationDate1": "1674483820",
      "rewardsWithdrawn1": "0",
      "RewardsWithdrawnCalculation": "0",
      "vrpayWithdrawn": "0",
      "level": "0",
      "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
      "teamNum": "2855",
      "directnum": "1",
      "totalDeposit": "100000000000000000000",
      "directDeposit": "100000000000000000000",
      "teamTotalDeposit": "1552543590000000000000000",
      "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a2",
      "__v": 0
    }
    ,{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a3",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a4",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a5",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a6",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a7",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a8",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a9",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c5752a10",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a11",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a12",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a13",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a14",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c5753202",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a15",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532a15",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b1",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b1",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b2",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b2",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b3",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b3",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b4",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b4",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b5",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b5",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b6",
        "__v": 0
      },
      {
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b6",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b7",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b7",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b8",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b8",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b9",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b9",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b10",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b10",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b11",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b11",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b12",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b12",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b13",
        "__v": 0
      },{
        "_id": {
          "$oid": "63e4c9d48e8e0d02651e270c"
        },
        "stakedBal1": "100",
        "stakedTime1": "1674483820",
        "rewardCalculationDate1": "1674483820",
        "rewardsWithdrawn1": "0",
        "RewardsWithdrawnCalculation": "0",
        "vrpayWithdrawn": "0",
        "level": "0",
        "referrer": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b13",
        "teamNum": "2855",
        "directnum": "1",
        "totalDeposit": "100000000000000000000",
        "directDeposit": "100000000000000000000",
        "teamTotalDeposit": "1552543590000000000000000",
        "Owner": "0x2eaffba6414108875e10e8a8f53cdaa1c57532b14",
        "__v": 0
      },
    ]


      for (let index = 0; index < UsersData.length; index++) {
        const UserM = UsersData[index];

        console.log("running")


        const findLastUser = await User.findOne({WalletAddress:UserM.Owner.toLowerCase()})

        if (findLastUser == null) {

        const CreateNewUser = await User({

            UpperLineSponserUser:UserM.referrer.toLowerCase(),
            WalletAddress:UserM.Owner.toLowerCase()
    
        }).save()






        const findUpperUser = await User.findOne({WalletAddress:UserM.referrer.toLowerCase()})


        if (findUpperUser) {
        


        const findUserShortRecord = await ShortRecord.findOne({RecordOwner:findUpperUser._id})



        if (findUserShortRecord == null) {


          const createRecord = await ShortRecord({
            RecordOwner:findUpperUser._id,
            AllMyDirectPeople:1
          }).save()




          
        }else{


          const fetchOld = await ShortRecord.findById(findUserShortRecord._id)

          const  sum = Number(fetchOld.AllMyDirectPeople) + 1


            const findOldRecord = await ShortRecord.findByIdAndUpdate({_id:findUserShortRecord._id},{AllMyDirectPeople:sum})













        }










        }














        // Going Forward To Post Upperlines

        var myArr = []

    var findRef1 = await User.findOne({WalletAddress:UserM.referrer.toLowerCase()})

    while (findRef1 !== null) {

      // console.log(findRef1)

      // console.log("running while loop")

      myArr.push(`"${findRef1.WalletAddress}"`)

        findRef1 = await User.findOne({WalletAddress:findRef1.UpperLineSponserUser.toLowerCase()})

        // findRef1 = await User.findOne({UpperLineSponserUser:UserM.referrer})
        

    }




    const update = MyUpperlines({

      MyUserid:CreateNewUser._id,
      MyUpperLines:`[${myArr}]`
    
    }).save()


  }
       
      }
   

    return res.status(200).json({
        success: true,
        data: {
            status: "Users Updated Successfully"
        }
    })
}