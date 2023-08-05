import React,{useState,useContext} from "react";
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./searchbar.css";
import apiData from "../apiKey";


import {myContext} from "../App.js";

import WeatherFind from "../utils/weather.js";
import DateBuilder from "../utils/datebuilder.js";

function SearchBar(){
  const {weatherData,setWeatherData} = useContext(myContext);

  const [searchPlace,setSearchPlace] = useState("");
  function findWeather(){
    console.log("enterd findweather");
    Axios.get(`${apiData.url}?q=${searchPlace}&appid=${apiData.key}&units=metric`)
         .then((res)=>{
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
         .catch((error)=>{
           console.log(error);
         })

       }
    function updateCity(event){
      setSearchPlace(event.target.value);
    }

  return(
    <div>
        <div class="mydiv">
          <div class="search-bar">
              <input class="form-control mr-sm-2 searchbox" onChange={updateCity} type="text" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success my-2 my-sm-0" onClick={()=>findWeather()} type="submit">Search</button>
          </div>

          <div class="city-box">
            <h1>{weatherData.name}</h1>
            <div className="current-date">{DateBuilder(new Date())}</div>
          </div>


          <div class="footer">
              <h5>copyright @2023</h5>
              <p>Made by Akshat</p>
          </div>
        </div>
    </div>
  );
}

export default SearchBar;
