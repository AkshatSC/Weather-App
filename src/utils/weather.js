import React from "react";
import cloudy from "../assets/cloudy_gif.gif";
import haze from "../assets/haze_gif.gif";
import rainy from "../assets/rainy_gif.gif";
import snow from "../assets/snow_gif.gif";
import sunny from "../assets/sunny_gif.gif";
import windy from "../assets/windy_gif.gif";

function WeatherFind(type){
  switch(type)
  {
      case "Haze":
        return haze;
      case "Clouds":
        return cloudy;
      case "Rain":
        return rainy;
      case "Snow":
        return snow;
      case "Dust":
        return windy;
      case "Drizzle":
        return rainy;
      case "Fog":
        return haze;
      case "Smoke":
        return cloudy;
      case "Tornado":
        return rainy;
      default:
        return sunny;
  }
}
export default WeatherFind;
