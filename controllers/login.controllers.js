function authenticate(req,res){
    const userEmail="samimamiya11@gmail.com";
    const userPassword="12334";
    const {email,password}=req.body;
    // console.log(req.body);
    let isUser=false;
    if(isUser==false){
        return res.status(404).json({
            message:"User not found",
            email:email,
            password:password,
        })
    }

    if(email !==userEmail && password !==userPassword){
       return res.status(400).send("Invalid email and password");
    }else{
        return res.status(200).send("Successfully Login");
    }
}
module.exports={
    authenticate
}
