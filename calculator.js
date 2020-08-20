const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){

	res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res){

	var weight = Number(req.body.w);
	var height = Number(req.body.h);

	var bmi = weight / (height * height);
	res.send("Your BMI is " + bmi);

});

app.listen(3000, function(){

	console.log("It has begun");

});