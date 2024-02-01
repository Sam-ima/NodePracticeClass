// const http=require('http');

// //create a server object
// http.createServer(function(req,res){
//     res.write('Hello World'); //write a response to the client
//     console.log('Server is running on port 8080');
//     res.sendDate('Server is running on port 8080');
//     res.end();  //end the response
// }).listen(8080);  //the server object listens on port 8080

// const express=require('express');
// const app=express();
// const port=8000;
// const hellomiddleware=(req,res,next)=>{
//     console.log("I am middleware")
//     next();
//  }
// const helloController=(req,res)=>{
//     res.send('Hello World');
//  };
//  app.get('/',hellomiddlewar,helloController);

//  app.use(hellomiddleware);
//  app.get('/user',(req,res)=>{
//     res.send('User connected');
//  })
//  app.get('/client',(req,res)=>{
//     res.send('Welcome Here');
//  })

//  app.post('/',(req,res)=>{
//     // console.log(req);
//     // req.body
//     console.log(req.query);
//     res.send('Hello Samima');
//     // console.log('Hello');
//  })


//  app.listen(port,()=>{
//     console.log(`Server is running at port ${port}`);
//  })

//  //Basic routing

// const http=require('http');
// const bodyParser=require('body-parser');
// const server=http.createServer((req,res)=>{
//     if(req.method==='GET'){
//         res.sendDate('This is GET method.');
//     }
//     if(req.url==='/products'){
//         const products=[
//         {id: 1, name: 'Product A'},
//         {id: 2, name: 'Product B'},
//         ];
//         res.writeHead(200, {'Content-Text': 'application/json'});
//         res.end(JSON.stringify(products));
//     }
// });




// const PORT=process.env.PORT || 8000;
// server.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// })



const express=require('express');                    //here express is framework of nodejs 
                                                    //node js is runtime environment .here,express helps to manage server and routes
const app=express();
const PORT=8000;
const bodyParser=require('body-parser');
// const helloMiddlewar=((req,res,next)=>{
//     console.log('I am middleware.');
// });
app.use(bodyParser.json());

// const {authenticate}=require('./controllers/login.controllers');
// app.post("/login",authenticate);



const mongoDbConnection=require('./mongodb.config');

mongoDbConnection();

// app.post("/register",(req,res)=>{
//     console.log("You have entered on registration page.");
//     const userName="Samima";
//     const userEmail="samimamiya@gmail.com";
//     const userGender="Female";
//     const {name,email,gender}=req.body;
//     const isUser=false;
//     if(isUser==false){
//         res.status(404).json({
//             message:"Not found data",
//             name:name,
//             email:email,
//             gender:gender
//         })
//     }
//     if(name !==name && email !==email && gender!==gender){

//     }
// })

const loginRoutes=require('./routes/login.routes');
const userRoutes=require('./routes/user.routes');

app.use("/login",loginRoutes);
app.use("/users",userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on Port ${PORT}`);
})