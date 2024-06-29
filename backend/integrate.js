const express=require('express')
const path=require('path')
const app=express()
const methodOverride=require('method-override');
const ejsMate=require('ejs-mate')
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.engine('ejs',ejsMate)
const mongoose = require('mongoose');

const UserProfile=require('./models/userProfile.js')

let categories=['Gain muscles','Lose Body Fat','Get stronger ']
let categories1=['Fitness Goals','Dietary preference']

mongoose.connect('mongodb://127.0.0.1:27017/Hackathon1').then(()=>
{
  console.log('Started')
})
.catch(err=>
{
  console.log(err)

})

// class MyError extends Error
// {
//   constructor(message,status)
//   {
//     super();
//     this.message=message;
//     this.status=status
// ;  }
// }


// app.get('/user',async (req,res)=>
// {
//   let {category}=req.query;
//   if(category)
//     {
//       const products=await Product.find({category})
//       res.render('farmproducts/index',{products})
//     }else 
//     {
//       const products=await Product.find({})
//       res.render('farmproducts/index',{products})
//     }
 
// })
// app.get('/user/add',(req,res)=>
//     {
//         res.render('farmproducts/new',{categories,categories1})
//     })
//     app.post('/user',async (req,res,next)=>
//     {
//       try 
//       {
//         let newUser= new UserProfile(req.body);
//         await newUser.save()
//        res.send('DONE')

//       }catch(e)
//       {
//         next(e,404);
//       }
       

    
      
//     })
// app.get('/product/:id/edit',async (req,res)=>
// {
//   let {id}=req.params;
//   let product=await Product.findById(id);
//   console.log(product)
//   res.render('farmproducts/edit',{product:product,categories})
// })
// app.put('/product/:id/edit',async (req,res)=>
// {
//   let {id}=req.params;

// let prod=await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
// console.log(prod)
// res.redirect('/product')
// })
// app.get('/product/:id',async(req,res,next)=>
// {
//     let {id}=req.params;
  
//       let foundProduct=await Product.findById(id);
//       if(!foundProduct)
//         {
//           return next( new MyError('product not found!',404))
//         }
//     res.render('farmproducts/show',{foundProduct})
// })

// app.delete('/product/:id',async (req,res)=>
// {
//   let {id}=req.params;
//   let deletedProduct=await Product.findByIdAndDelete(id);
//  res.redirect('/product')
// })

// app.use((err,req,res,next)=>
// {
//   console.log('here')
//   let {message,status}=err ;
//   res.status(status).send(message);
// })


// app.get('/user', async (req, res, next) => {
//   try {
//     let { category } = req.query;
//     if (category) {
//       const products = await Product.find({ category });
//       res.render('farmproducts/index', { products });
//     } else {
//       const products = await Product.find({});
//       res.render('farmproducts/index', { products });
//     }
//   } catch (e) {
//     next(e);
//   }
// });

app.get('/user/add', (req, res) => {
  res.render('backend/views/new.ejs', { categories, categories1 });
});

app.post('/user', async (req, res, next) => {
  try {
    let newUser = new UserProfile(req.body);
    await newUser.save();
    res.status(201).send('DONE');
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
});
app.listen(3000)