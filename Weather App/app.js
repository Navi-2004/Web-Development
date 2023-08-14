const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");
const app=express()

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");

});
app.post("/",function(req,res){
    console.log(req.body.cityName);
const query=req.body.cityName;
const apiKey="c6c232a8222f1b0e5e6de3c7d641e176"
const unit="metric";
const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+apiKey;
console.log(url);
https.get(url,function(response){
console.log(response.statusCode);

response.on("data",function(data){
    const weatherData=JSON.parse(data);
    const temp = weatherData.main.temp;
    console.log(temp);
    const weatherDescription=weatherData.weather[0].description;
    const icon=weatherData.weather[0].icon;
    const iconUrl="https://openweathermap.org/img/wn/"+icon+"@2x.png";
    res.write("<p>Weather Description is"+weatherDescription+"</p>");
    res.write("<h1>The temperature in "+query+" is "+temp +" degree celcius</h1>")
    res.write("<img src="+iconUrl+">");
  res.send()
});
   
});

});


 app.listen(3000,function(){
     console.log("Server is running");
 })