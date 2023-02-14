const User = require("../models/User")
const MyUpperlines = require("../models/MyUpperlines")
const DepositRecord = require("../models/DepositRecord")
const ShortRecord = require("../models/ShortRecord")

exports.updatemywallet = async (req, res) => {





      const AllUsersDepositData = [
        {
          "_id": {
            "$oid": "63e4c9d48e8e0d02651e270c"
          },
          "stakedBal1": "500",
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
      ]

    // 2023-2-9

    for (let index = 0; index < AllUsersDepositData.length; index++) {
        const thisUser = AllUsersDepositData[index];



        const findThisMainUser = await User.findOne({ WalletAddress: thisUser.Owner.toLowerCase() })



        if (findThisMainUser) {



            var date = new Date(thisUser.stakedTime1 * 1000);

            var year = date.getFullYear()
            var month = date.getMonth()
            var day = date.getDate()


            


            const UploadDepositData = await DepositRecord({

                RecordOwner: findThisMainUser._id,
                OldWallet: "0", // <========< Leave it static
                DepositAmount: thisUser.stakedBal1,
                Commision: "0",   // <========< Leave it static
                LykaToken: "0",   // <========< Leave it static
                Date: `${year}-${month}-${day}`,
                createdAt: date.toISOString()


            }).save()







            const getThisUserOldWallet = await User.findById(findThisMainUser._id)

            var oldWalletBalance = getThisUserOldWallet.Wallete

            var sum = Number(thisUser.stakedBal1.slice(0,-18)) + Number(oldWalletBalance)

            var updateWalletAmounntNow = await User.findByIdAndUpdate({ _id: findThisMainUser._id }, { Wallete: sum })

 


            ///////////////////////////////////////////////////////


            const findUpperUser = await User.findOne({WalletAddress:thisUser.referrer.toLowerCase()})


            if (findUpperUser) {
            
    
    
            const findUserShortRecord = await ShortRecord.findOne({RecordOwner:findUpperUser._id})
    
    
    
            if (findUserShortRecord == null) {
    
    
              const createRecord = await ShortRecord({
                RecordOwner:findUpperUser._id,
                AllMyDirectBusiness:""
              }).save()
    
    
    
    
              
            }else{
    
    
              const fetchOld = await ShortRecord.findById(findUserShortRecord._id)
    
              const  sum = Number(fetchOld.AllMyDirectBusiness) + Number(thisUser.stakedBal1)
    
    
                const findOldRecord = await ShortRecord.findByIdAndUpdate({_id:findUserShortRecord._id},{AllMyDirectBusiness:sum})
    
    
    
    
    
    
    
    
    
    
    
    
    
            }
    
    
    
    
    
    
    
    
    
    
            }
    
    
    
    







            //////////////////////////////////////////////////////
















        }


    }

    return res.status(200).json({
        success: true,
        data: {
            status: "Deposited Successfully"
        }
    })
}