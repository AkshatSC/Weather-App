import React,{useState,useEffect,useContext} from "react";
import Axios from "axios";
// import Json from "json";

// importing bootstrap after npm install
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

// import cloudy from "../assets/cloudy_gif.gif";
import apiData from "../apiKey";
import "./weather-info.css";

import {myContext} from "../App.js";

import WeatherFind from "../utils/weather.js";


function Weatherinfo(){
  const {weatherData,setWeatherData} = useContext(myContext);//name shoukd be same i,e if there was weatherData here also should be same
   function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    Axios.get(apiData.url+`?lon=${longitude}&lat=${latitude}&appid=${apiData.key}&units=metric`)
         .then( (res)=>{
           console.log(res);
           const weatherinfo = res.data;//imp
           setWeatherData((prevValue)=>{
             return{
               temp:weatherinfo.main.temp,
               pressure:weatherinfo.main.pressure,
               humidity:weatherinfo.main.humidity,
               visibility:weatherinfo.visibility,
               wind:weatherinfo.wind.speed,
               type:weatherinfo.weather[0].main,
               name:weatherinfo.name
             }
           });
         })
         .catch((err)=>{
           console.log(err);
         })
       }


  function error() {
    console.log("Unable to retrieve your location");
  }

  function findcoordinates(){
    if (navigator.geolocation)
    {
      console.log("entered if");
      navigator.geolocation.getCurrentPosition(success, error);
    }
    else
    {
      console.log("Geolocation not supported");
    }
  }

  useEffect(()=>{
    // first fetching latitude and longitude
    console.log("useeffect entered");
    findcoordinates();
  },[]);


  return(
      <div class="col">
        <div class="container">
          <img src={WeatherFind(weatherData.type)} alt="cloudy-image"/>
          <div class="centered">{weatherData.type}</div>
        </div>
        <div class="row box1">
          <div class="col details">Temp <p class="val">{weatherData.temp} cel</p></div>
          <div class="col details">Pressure <p class="val">{weatherData.pressure} pascal</p></div>
          <div class="col details">Humidity <p class="val">{weatherData.humidity} %</p></div>
        </div>
        <div class="row box1">
          <div class="col details">Visibility <p class="val">{weatherData.visibility} </p></div>
          <div class="col details">Windspeed <p class="val">{weatherData.wind} km/h</p></div>
        </div>
      </div>
  );
}

export default Weatherinfo;
