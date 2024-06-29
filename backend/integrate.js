// const express=require('express')
// const path=require('path')
// const app=express()
// const methodOverride=require('method-override');
// const ejsMate=require('ejs-mate')
// app.set('view engine','ejs')
// app.set('views',path.join(__dirname,'views'))
// app.use(methodOverride('_method'))
// app.use(express.urlencoded({extended:false}));
// app.engine('ejs',ejsMate)
// const mongoose = require('mongoose');

// const UserProfile=require('./models/userProfile.js')

// let categories=['Gain muscles','Lose Body Fat','Get stronger ']
// let categories1=['Fitness Goals','Dietary preference']

// mongoose.connect('mongodb://127.0.0.1:27017/Hackathon1').then(()=>
// {
//   console.log('Started')
// })
// .catch(err=>
// {
//   console.log(err)

// })

// // class MyError extends Error
// // {
// //   constructor(message,status)
// //   {
// //     super();
// //     this.message=message;
// //     this.status=status
// // ;  }
// // }


// // app.get('/user',async (req,res)=>
// // {
// //   let {category}=req.query;
// //   if(category)
// //     {
// //       const products=await Product.find({category})
// //       res.render('farmproducts/index',{products})
// //     }else 
// //     {
// //       const products=await Product.find({})
// //       res.render('farmproducts/index',{products})
// //     }
 
// // })
// // app.get('/user/add',(req,res)=>
// //     {
// //         res.render('farmproducts/new',{categories,categories1})
// //     })
// //     app.post('/user',async (req,res,next)=>
// //     {
// //       try 
// //       {
// //         let newUser= new UserProfile(req.body);
// //         await newUser.save()
// //        res.send('DONE')

// //       }catch(e)
// //       {
// //         next(e,404);
// //       }
       

    
      
// //     })
// // app.get('/product/:id/edit',async (req,res)=>
// // {
// //   let {id}=req.params;
// //   let product=await Product.findById(id);
// //   console.log(product)
// //   res.render('farmproducts/edit',{product:product,categories})
// // })
// // app.put('/product/:id/edit',async (req,res)=>
// // {
// //   let {id}=req.params;

// // let prod=await Product.findByIdAndUpdate(id,req.body,{runValidators:true,new:true});
// // console.log(prod)
// // res.redirect('/product')
// // })
// // app.get('/product/:id',async(req,res,next)=>
// // {
// //     let {id}=req.params;
  
// //       let foundProduct=await Product.findById(id);
// //       if(!foundProduct)
// //         {
// //           return next( new MyError('product not found!',404))
// //         }
// //     res.render('farmproducts/show',{foundProduct})
// // })

// // app.delete('/product/:id',async (req,res)=>
// // {
// //   let {id}=req.params;
// //   let deletedProduct=await Product.findByIdAndDelete(id);
// //  res.redirect('/product')
// // })

// // app.use((err,req,res,next)=>
// // {
// //   console.log('here')
// //   let {message,status}=err ;
// //   res.status(status).send(message);
// // })


// // app.get('/user', async (req, res, next) => {
// //   try {
// //     let { category } = req.query;
// //     if (category) {
// //       const products = await Product.find({ category });
// //       res.render('farmproducts/index', { products });
// //     } else {
// //       const products = await Product.find({});
// //       res.render('farmproducts/index', { products });
// //     }
// //   } catch (e) {
// //     next(e);
// //   }
// // });

// app.get('/user/add', (req, res) => {
//   res.render('views/new.ejs', { categories, categories1 });
// });

// app.post('/user', async (req, res, next) => {
//   try {
//     let newUser = new UserProfile(req.body);
//     await newUser.save();
//     res.status(201).send('DONE');
//   } catch (e) {
//     res.status(400).send({ error: e.message });
//   }
// });
// app.listen(3000)
const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const mongoose = require('mongoose');
const cors=require('cors')
const UserProfile = require('./models/userProfile.js');
const catchAsync=require('./helpers/catchAsync');

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: false }));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

let categories = ['Gain muscles', 'Lose Body Fat'];
let categories1 = ['Fitness Goals', 'Dietary preference'];

mongoose.connect('mongodb://127.0.0.1:27017/Hackathon1')
  .then(() => {
    console.log('Database connected');
  })
  .catch(err => {
    console.log('Database connection error:', err);
  });
  let newUser=''
app.get('/',catchAsync(async(req,res,next)=>
{
  res.render('index1.ejs',{newUser})
}))
app.get('/user/add', catchAsync(async(req, res,next) => {
  res.render('new', { categories, categories1 });
}));

app.post('/user', catchAsync(async (req, res, next) => {

    newUser = new UserProfile(req.body);
    await newUser.save();
    res.status(201);
    res.render('index1.ejs',{newUser})
 
}));
app.get('/user/directory',(req,res)=>
{

      res.render('body(myFit).ejs',{newUser})
 
})
app.get('/user/directory/abs',(req,res)=>
  {
  
        res.render('abs.ejs',{newUser})
   
  })

  app.get('/user/directory/glutes',(req,res)=>
    {
    
          res.render('glutes.ejs',{newUser})
     
    })
    app.get('/user/directory/quads',(req,res)=>
      {
      
            res.render('quads.ejs',{newUser})
       
      })

      app.get('/user/directory/obliques',(req,res)=>
        {
        
              res.render('obliques.ejs',{newUser})
         
        })
        app.get('/user/directory/lowerback',(req,res)=>
          {
          
                res.render('lowerback.ejs',{newUser})
           
          })
          app.get('/user/directory/lats',(req,res)=>
            {
            
                  res.render('lats.ejs',{newUser})
             
            })
     app.get('/user/directory/hamstrings',(req,res)=>
              {
              
                    res.render('hamstrings.ejs',{newUser})
               
              })
          app.get('/user/directory/ForeArms',(req,res)=>
                {
                
                      res.render('Forearms.ejs',{newUser})
                 
                })
                app.get('/user/directory/chest',(req,res)=>
                  {
                  
                        res.render('chest.ejs',{newUser})
                   
                  })
                  app.get('/user/directory/calves',(req,res)=>
                    {
                    
                          res.render('calves.ejs',{newUser})
                     
                    })
                    app.get('/user/directory/biceps',(req,res)=>
                      {
                      
                            res.render('biceps.ejs',{newUser})
                       
                      })
                      app.get('/user/directory/shoulders',(req,res)=>
                        {
                        
                              res.render('shoulders.ejs',{newUser})
                         
                        })
                        app.get('/user/directory/traps-middle',(req,res)=>
                          {
                          
                                res.render('traps-middle.ejs',{newUser})
                           
                          })
                          app.get('/user/directory/traps',(req,res)=>
                            {
                            
                                  res.render('traps.ejs',{newUser})
                             
                            })
                            app.get('/user/directory/triceps',(req,res)=>
                              {
                              
                                    res.render('body(myFit).ejs',{newUser})
                               
                              })
                              app.get('/user/:id/plan/work_type',(req,res)=>
                              {
res.render('work_type.ejs',{newUser})
                              })
                           

app.get('/user/:id/plan',catchAsync(async(req,res,next)=>
{
  let {id}=req.params 
  let newUser=await UserProfile.findById(id);
if(newUser)
  {
      res.render('user_workout_plan.ejs',{newUser})
  }else 
  {
    res.send('User not found')
  }
}))

app.get('/userProfile/:id',catchAsync(async(req,res,next)=>
{
  let {id}=req.params
  let newUser=await UserProfile.findById(id);
  if(newUser)
    {
        res.render('user_profile.ejs',{newUser})
    }else 
    {
      res.send('User not found')
    }

}))

app.all('*', (req, res, next) => {

  next(new Error('This is some error', 404));
});
app.use((err, req, res, next) => {
  let { message='Random', status=500 } = err;
  res.status(status).render('error',{err});
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
