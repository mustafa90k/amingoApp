const express = require('express');
const router =  express.Router();
const bcrypt= require('bcrypt');


const FeedModel = require('../models/Feeds.js');


router.post(
    "/create",  //https://www.myapp.com/feeds.create
    (req, res)=>{
        const formdata={
'offers':req.body.offers,
'image':req.body.image,
'hashtage':req.body.hashtage,
'recommendation':req.body.recommendation,
'rating':req.body.rating,
'date':req.body.date
    }
const theFeedModel = new FeedModel(formdata);
theFeedModel.save();
res.send('Feed is created');
    },
);


        module.exports = router;
       
       
       
        