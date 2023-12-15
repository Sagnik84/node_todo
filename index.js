import axios from "axios";
//import { json } from "body-parser";
import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
import geolocation from "geolocation";
//import 'leaflet.locatecontrol' // Import plugin
//import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css' // Import styles
//import L from 'leaflet' // Import L from leaflet to start using the plugin


//import IPGeolocationAPI from "ip-geolocation-api-javascript-sdk";
  


//var ipgeolocationApi = new IPGeolocationAPI("233a5550534547dbb37609a32977e470", false); 
var port= 3050;
var app=express();
app.use(express.static("public"));
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",async (req,res)=>
{
   try{ 
    res.render("index.ejs");
   }
   catch (error) {
    console.error("failed to collect", error.message);
    res.status(404).send("failed to fetch activity");
}
});
app.post("/",(req,res)=>
{
    console.log(req.body.busshuttle);
     var response = req.body.busshuttle;
    
  
});
app.post("/hlo",(req,res)=>
{
    console.log(req.body);
});

app.post("/api",(req,res)=>
{
    console.log(req.body);
});

app.listen(port,()=>
{
    console.log("server working");
});