const mongoose =require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        maxlength : 10
    },
    email: {
        type: String,
        trim:true, //kim dae woong @ 공백을 없애줌
        unique:1 //중복X
    },
    password:{
        type:String,
        minlength:5
    },
    //관리자 or 일반유저
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type:String  //유효성 검사
    },
    tokenExp:{
        type:Number  //토큰의 유효기간
    }
})

const User=mongoose.model('User','userSchema')

module.exports={ User }