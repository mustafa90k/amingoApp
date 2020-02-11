//1.import all the necessary npm modules

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//2.importing routes
const UserRoutes = require('./routes/User.js');
const FeedRoutes = require('./routes/Feeds.js');

// 3.Configure express to parse BODY
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//4..connect to our database
const dbURL= "mongodb+srv://admin:M0st@f@90@cluster0-tgwz5.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(
    dbURL,
    {useNewUrlParser:true, useUnifiedTopology: true}
).then(
    ()=>{
        console.log("db is connected");
    }).catch(
        (e)=>{
            console.log("no response from mongoose", e)
        }
    )
/*
 * 5.Routes for our web app server
 */

app.use(
    "/user", //http://www.myapp.com/user/
    UserRoutes //routes/User.js
    );


app.get(
    "/home",
    (req, res)=>{
        res.send("<h1 style='color:blue'>Hello</h1>");
        

});

app.use(
    "/feed", 
    FeedRoutes
);






app.get(
    "*",//star means everything e.g if i spelled home wrong , then it will show 404.
    (req, res)=>{
        res.send("<h1 style='color:black'>404</h1>");

});
// Listen to the port
app.listen(
    3010,
    ()=>{
            console.log("you are connected");

    })