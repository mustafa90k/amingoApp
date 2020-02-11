const express = require('express');
const router =  express.Router();
const bcrypt= require('bcrypt');


const UserModel = require('../models/User.js');





router.post(
    "/register",
    (req, res)=>{
        const formdata={
'firstname':req.body.firstname,
'lastname':req.body.lastname,
'email':req.body.email,
'password':req.body.password,
'occupation':req.body.occupation
    }
const theUserModel = new UserModel(formdata);
//step 1 . generate a salt
bcrypt.genSalt(
    (err, salt)=>{
        //step 2 generate the hashed passowrd
        bcrypt.hash(
            formdata.password, //user's password
            salt, // generated salt
            (err, hashedPassword)=>{// how we handle the new hashed password
                //step 3 replace the password value in formdata
                theUserModel.password = hashedPassword ;
                theUserModel.save(); // step 4 save to database
                res.send("User registration complete");
            }
        )
    }
)
    }


)
// router.post(
//     '/login', //http://www.myapp.com/user/login
//     (req, res)=>{
//         const formdata{
//             email: req.body.email;
//             password: req.body.password;
    
//         })
// //step 1. check to see if the email exists.
// UserModel
// .find({ email: formdata.email})
// .then((isMatch)=>{
//     if(isMatch){
// //step 2. check their password 
// //step 3. compare their passwords with database

// //step 4. generate JWT
// //step 6. exit
// res.send("email found");
//     }
//     //step 2.b if user doesnt exist , exit
//     else{
//         res.send("please check email $ password");
//     }



module.exports = router;