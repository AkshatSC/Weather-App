import './App.css';
import Weatherinfo from './components/weather-info';
import SearchBar from './components/searchbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React,{useState,createContext} from "react";

const myContext = React.createContext(null);

function App() {
  const [weatherData,setWeatherData]=useState({
    temp:0,
    humidity:0,
    pressure:0,
    wind:0,
    visibility:0,
    type:"",
    name:"",
  });
  return (
    <div className="App">
    <myContext.Provider value={{weatherData,setWeatherData}}>
      <div className="row">
          <div className="col">
              <Weatherinfo/>
          </div>

          <div className="col">
              <SearchBar/>
          </div>
      </div>
    </myContext.Provider>
    </div>
  );
}

export default App;
export {myContext};
