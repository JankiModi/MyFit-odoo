const mongoose =require('mongoose')
const {Schema}=mongoose

const userSchema=new Schema(
    {
        name:
        {
            type:String,
            required:true
        },
      email:
      {
        type:String,
        required:true
      },
      weight:
      {
        type:Number,
        required:true
      }
      , 
      age:
      {
        type:Number,
        required:true
      },
    height:
      {
        type:Number,
        required:true
      },
      fitnessGoal:
      {
      type:String,
      enum:['Gain muscles','Lose Body Fat','Get stronger ']
      },
      DietPlan:
      {
        type:String,
        enum:['Fitness Goals','Dietary preference']
      }
    }
)

const UserProfile=new mongoose.model('UserProfile',userSchema)
module.exports=UserProfile
// const productSchema=Schema(
//     {
//         name:
//         {
//             type:String,
//             required:true,

//         },
//         price :
//         {
//             type:Number,
//             min:0,

//         }
//         ,
//         category:
// {
// type:String,
// enum:['dairy','grains','bakery','fruit']
// },
// farm:
// {
//     type:Schema.Types.ObjectId,
// ref:'Farm'
// }
//     }
// )
// const Product=new mongoose.model('Product',productSchema)
// module.exports=Product