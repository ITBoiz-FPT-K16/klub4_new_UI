const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    first_name : {
        type : String,
        required : true,
        trim : true,
        text:true
    },
    last_name : {
        type : String,
        required : true,
        trim : true,
        text:true
    },
    username : {
        type : String,
        required : true,
        trim : true,
        text:true,
        unique:true
    },
    email : {
        type : String,
        required : true,
        trim : true,
        text:true
    },
    password : {
        type : String,
        required : true,
    },
    picture:{
        type:String,
        trim:true,
        default :"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
    },
    cover:{
        type:String,
        trim:true,
    },
    gender:{
        type:String,
        required:true,
        trim:true,
    },
    bYear:{
        type:String,
        required:true,
        trim:true,
    },
    bMonth:{
        type:String,
        required:true,
        trim:true,
    },
    bDay:{
        type:String,
        required:true,
        trim:true,
    },
    verified:{
        type:Boolean,
        default: false
    },
    friends:{
        type : Array,
        default : []
    },
    following:{
        type : Array,
        default : []
    },
    followers:{
        type : Array,
        default : []
    },
    requests:{
        type : Array,
        default : []
    },
    search : [
        {
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ],
    details : {
        bio:{
            type : String
        },
        otherName:{
            type : String
        },
        job:{
            type : String
        },
        workplace:{
            type : String
        },
        highSchool:{
            type : String
        },
        college:{
            type : String
        },
        currentCity:{
            type : String
        },
        hometown:{
            type : String
        },
        relationship:{
            type : String,
            enum : ['Single','In a relationship','Married','Divorced']
        },
        instagram:{
            type : String
        },
    },
    savedPosts:[
        {
            post : {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Post"
            },
            savedAt : {
                type:Date,
                default:new Date()
            },
        }
    ]

},{timestamps : true})

const User = mongoose.model('User',userSchema)

module.exports = User