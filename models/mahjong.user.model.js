/**
 * Created by cong on 2017/5/25.
 *  "openid" : "OPENID",
 "nickname" : "Tu",
 "sex" : 1,
 "province" : "BeiJing",
 "city" : "BeiJing",
 "country" : "china",
 "headimgurl" : "www.baidu.com",
 "unionid" : "o6_bmasdasdsad6_2sgVt7hMZOPfL",
 "isDelete" : 0,
 "modifyAt" : ISODate("2017-05-17T05:17:33.607Z"),
 "createAt" : ISODate("2017-05-17T05:17:33.607Z")
 */
var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({

    openid:{
        type:String,
        required:true,
    },
    nickname:{
        type:String,
        required:true
    },
    sex:Number,
    province:String,
    city:String,
    country:String,
    headimgurl:String,
    unionid:String,
    isDelete:{
        type:Number,
        default:0,
    },
    modifyAt:{
        type:Date,
        default:Date.now()
    },
    createAt:{
        type:Date,
        default:Date.now()
    }
});

mongoose.model('Users',UserSchema,'Users');
