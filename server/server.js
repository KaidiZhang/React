const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb/react'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log("connect succeed")
})
const User = mongoose.model('user', new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
// User.create({
// 	user:"kkkk",
// 	age:12
// },function(err,dooc){
// 	if(!err){
// 		console.log("success")
// 	}
// 	else{
// 		console.log("err")
// 	}
// })
// User.remove({age:23},function(err,doc){
// 	console.log("remove")
// })
User.update({'user':'kkkk'},{'$set':{age:18}},function(err,doc){
	console.log('update')
})








const app = express()

app.get('',function(req,res){
	res.send('<h1>Hello World ok</h1>')
})

app.get('/data',function(req,res){
	User.find({}, function(err,doc){
		res.json(doc)
	})
})

app.listen(9093,function(){
	console.log('Node app start at port 9093')
})