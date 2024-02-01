const {User}=require("../models/user.model");

async function login(req,res){
    // 1.get email and password from req.body
    //2.check if email and password is present
    //3.find user on db
    //4.if user not found return 404
    //5.compare password
    //6.if password not matched return 401
    //7.login user
    const {email, password}=req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please enter all fields for login"});
    }
    //find 
    const user=await User.findOne({email:email});
    if(!user){
        return res.status(400).json({message:'User not found'});
    }
    //compare password
    if(password !==user.password){
        return res.status(401).json({message:"Password Not Matched"});
    }
    return res.status(200).json({message:"Login Successsfull"});

};

const registerUser=async(req,res)=>{

    const {name,email,password}=req.body;

    if(!name || !email || !password){
        return res.status(400).json({message:"Please enter your full data"});
    }
    try{
        const user=await User.create({name,email,password});
        return res.status(200).json({data:user,message:"User created Successfully"});
    }catch(error){
        res.status(500).json({error:error,message:"Something went wrong"});
    }
}
async function updateUser(req,res){
    // 1.get id from req.params
    // 2.get update data from req.body
    // 3.check if id is present
    // 4.check if update data is present
    // 5.return new data
    const {id}=req.params;

    const {name, email, password}=req.body;
    console.log(name, email, password);
    const user=await User.findById(id);
    if(!user){
        return res.status(400).json({message:"User Not found"});
    }
    const userUpdate=await User.findByIdAndUpdate(id,{
        name:name,
        email:email,
        password:password
    },{
        new:true
    })
    if(!userUpdate){
        return res.status(500).json({message:"Unable to update"});
    }
    return res.status(200).json({data:userUpdate,message:"User Updated SuccessFully"});
}
const deleteUser=async(req,res)=>{

}
// function create({
//     id=req.params;
//     const task=task.create{

//     }
// })
//populate method
 

module.exports={
    login,
    registerUser,
    // getUser,
    deleteUser,
    updateUser
}
// function login(req,res){
//     const userName="Samima";
//     const userPassword="12345";
//     const userEmail="samimamiya123@gmail.com";
//     const {name,password,email}=req.body;
//     console.log(req.body);
//     const isUser=false;
//     if(isUser===false){
//         return res.status(404).json({
//             message:"User not found",
//             name:name,
//             password:password,
//             email:email
//         })
//     }
//     if(name !==userName && email !==userEmail && password !==userPassword){
//         return res.status(400).send("Invalid userName userEmail and userPassword");
//     }else{
//         return res.status(200).send("User successfully Login.");
//     }

// }
// function register();
// function getUse();
// function getUse();
// function getUse();