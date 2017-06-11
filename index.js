/**
 * Created by suti on 2017/6/11.
 */
"use strict";
let express = require('express'),
	request =require('request')
let app = express()

app.get('/',(req, res,next)=>{
	request('http://lixy.space/',(err,re,body)=>{
		res.end(body)
	})
	next()
})

app.all('*',(req,res)=>{
	console.log(Date.now())
})

app.listen(2333)