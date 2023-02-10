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


    console.log(MeUser._id)
    
    var findUser = MeUser
    
    const getPackage = await DepositRecord.find({ RecordOwner: MeUser._id })

    console.log(getPackage)
    
    if (getPackage.length > 0) {
      console.log("he has some pakage")

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


        // if (Number(findUser.Wallete) >= Number(AmountPercantage)) {

        //   var percan = depositedAmount * 0.5 / 100
        //   const giveRewardLapRoi = await LapRoi({
        //     RoiOwner: findUser._id,
        //     StepsWalked: "0",
        //     GiveRoiCoin: percan,
        //     GiveRoiPercantage: "0.5",
        //     PurchasedPackageName: "wegwe",
        //     Date: `${getYear}-${getMonth}-${getDay}`
        //   }).save()





        // } else {

         

        // }


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


          // console.log("And this user will get this much of amount => " + percan)

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
         
                     // Level income starting from here


          // Level Logic Is Here

        

          const MyUpperlinesPeople = await MyUpperline.find({ MyUserid: findUser._id });


          for (let indexDown = 0; indexDown < MyUpperlinesPeople.length; indexDown++) {

           const element = MyUpperlinesPeople[indexDown]
           var myLevels = JSON.parse(element.MyUpperLines)
          //  console.log(myLevels)


           for (let insideLevelUserIndex = 0; insideLevelUserIndex < myLevels.length; insideLevelUserIndex++) {

             const thisUser = myLevels[insideLevelUserIndex];

              const findMyUpperLineWholeData = await User.find({WalletAddress:thisUser})
              
            
              if (findMyUpperLineWholeData.length > 0) {
                
                // console.log(findMyUpperLineWholeData)


                const findThisUserDiectReferals = await User.find({UpperLineSponserUser:findMyUpperLineWholeData[0].WalletAddress})


                // console.log("myuser lengh is => "+  findThisUserDiectReferals.length)  // <===< here calculating all my direct referrals

                

         
                var news = 1+Number(insideLevelUserIndex)

                // console.log("current level loop => "+  news)

                if (findThisUserDiectReferals.length >= news) {

            
                  




                var fndUser = await User.findById(findMyUpperLineWholeData[0]._id)
                var findDirectsForThisUser = await User.find({UpperLineSponserUser:fndUser.WalletAddress})

                  var recNumber = 0


                  findDirectsForThisUser.map((hit,index)=>{

                    // console.log("tumhara hai ==>"+hit._id)
                    // console.log("mera hai ==>"+findUser._id)

                    // console.log(String(findUser._id))

                    if (hit._id == String(findUser._id)) {
                      // console.log("ye kam karing")
                      recNumber = index+1
                    }else{
                      // console.log("not karing")
                    }



                  })


                  var percen = 0

                  if (1+Number(insideLevelUserIndex) == 1) {
                    if (findDirectsForThisUser.length > 50) {
                      percen = 50
                    }else{
                      percen = 20
                    }
                  } else if (1+Number(insideLevelUserIndex) == 2) {
                    percen = 7.5

                  } else if (1+Number(insideLevelUserIndex) == 3) {
                    percen = 5

                  } else if (1+Number(insideLevelUserIndex) == 4) {
                    percen = 2.5

                  } else if (1+Number(insideLevelUserIndex) == 5) {

                    percen = 1.5
                  } else if (1+Number(insideLevelUserIndex) >= 6 && 1+Number(insideLevelUserIndex) <= 10) {
                    percen = 1

                  }



                  var sum = Number(findMyUpperLineWholeData[0].Wallete) + Number(percan) * percen / 100

                  console.log(sum)

                  await User.findByIdAndUpdate({ _id: findMyUpperLineWholeData[0]._id }, { Wallete: sum })





                  var indoxs = 1+Number(insideLevelUserIndex)


                
                  if ( Number(indoxs)  <= Number(findDirectsForThisUser.length) ) {

                    
                    
                await LevelDailyRoi({

                  ROIOwner: findMyUpperLineWholeData[0]._id,
                  LevelEarned: 1+Number(insideLevelUserIndex),
                  coinEarned: Number(percan) * percen / 100,
                  EarnedPercantage: percen,
                  rewardGetFrom: findUser._id,
                  rewardGetFromName: findUser.WalletAddress,

                }).save()

              }
              }


              }
            
           }

            
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



         // Level income starting from here


          // Level Logic Is Here

        

          const MyUpperlinesPeople = await MyUpperline.find({ MyUserid: findUser._id });


          for (let indexDown = 0; indexDown < MyUpperlinesPeople.length; indexDown++) {

           const element = MyUpperlinesPeople[indexDown]
           var myLevels = JSON.parse(element.MyUpperLines)
          //  console.log(myLevels)


           for (let insideLevelUserIndex = 0; insideLevelUserIndex < myLevels.length; insideLevelUserIndex++) {

             const thisUser = myLevels[insideLevelUserIndex];

              const findMyUpperLineWholeData = await User.find({WalletAddress:thisUser})
              
            
              if (findMyUpperLineWholeData.length > 0) {

                
                
                // console.log(findMyUpperLineWholeData)


                const findThisUserDiectReferals = await User.find({UpperLineSponserUser:findMyUpperLineWholeData[0].WalletAddress})


                // console.log("myuser lengh is => "+  findThisUserDiectReferals.length)  // <===< here calculating all my direct referrals


                var news = 1+Number(insideLevelUserIndex)

                // console.log("current level loop => "+  news)

                if (findThisUserDiectReferals.length >= news) {

            
                  



                var fndUser = await User.findById(findMyUpperLineWholeData[0]._id)
                var findDirectsForThisUser = await User.find({UpperLineSponserUser:fndUser.WalletAddress})


                  var recNumber = 0


                  findDirectsForThisUser.map((hit,index)=>{

                    // console.log("tumhara hai ==>"+hit._id)
                    // console.log("mera hai ==>"+findUser._id)

                    // console.log(String(findUser._id))

                    if (hit._id == String(findUser._id)) {
                      // console.log("ye kam karing")
                      recNumber = index+1
                    }else{
                      // console.log("not karing")
                    }



                  })
                  
                
                var percen = 0

                if (1+Number(insideLevelUserIndex) == 1) {

                  if (findDirectsForThisUser.length > 50) {
                    percen = 50
                  }else{
                    percen = 20
                  }
                } else if (1+Number(insideLevelUserIndex) == 2) {
                  percen = 7.5

                } else if (1+Number(insideLevelUserIndex) == 3) {
                  percen = 5

                } else if (1+Number(insideLevelUserIndex) == 4) {
                  percen = 2.5

                } else if (1+Number(insideLevelUserIndex) == 5) {

                  percen = 1.5
                } else if (1+Number(insideLevelUserIndex) >= 6 && 1+Number(insideLevelUserIndex) <= 10) {
                  percen = 1

                }

                var sum = Number(findMyUpperLineWholeData[0].Wallete) + Number(percan) * percen / 100

                console.log(sum)
                


                await User.findByIdAndUpdate({ _id: findMyUpperLineWholeData[0]._id }, { Wallete: sum })




                  var indoxs = 1+Number(insideLevelUserIndex)


                
                  if ( Number(indoxs)  <= Number(findDirectsForThisUser.length) ) {



                  
                  
                                    await LevelDailyRoi({
                  
                                      ROIOwner: findMyUpperLineWholeData[0]._id,
                                      LevelEarned: 1+Number(insideLevelUserIndex),
                                      coinEarned: Number(percan) * percen / 100,
                                      EarnedPercantage: percen,
                                      rewardGetFrom: findUser._id,
                                      rewardGetFromName: findUser.WalletAddress,
                  
                                    }).save()
   
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
