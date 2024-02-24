import { useEffect, useState } from 'react';
import { WiCloud } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { WiNightAltCloudyGusts } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import './App.css';


function App() {
  const [result, setresult] = useState({})
  const [city, setcity] = useState("")
  const API = {
    key: "bb0ec890a260b9e7cf3fc5f0ffc68029",
    url: "https://api.openweathermap.org/data/2.5/weather"
  };
  // fetch api convert to json
  const handleSearch = () => {
    fetch(`${API.url}?q=${city}&appid=${API.key}`)
      .then(res => res.json())
      .then(data => {
        console.log(data, "......");
        setresult(data);
      })
    }
useEffect(() => {
     fetch(`${API.url}?q=${city}&appid=${API.key}`)
       .then(res => res.json())
     .then(data => {
    console.log(data, "......");  
        setresult(data);
         console.log("after result")
       })
   }, [])
   console.log(result, "////////////")
  return (
    <>
      <div className="App">
        <h1 style={{ color: "blue" }}>WEATHER</h1>
        <br />
        <input type='text' name='city' style={{ color: "indigo" }} onChange={(e) => setcity(e.target.value)} />
        <button style={{ color: "indigo" }} type="button" onClick={handleSearch}>Search</button>
      </div>

      <div className="App">
        <h3><WiThermometer style={{ color: "red" }}/>{result.main && result.main.temp } <sup> o</sup>C | <sup> o</sup>F</h3>
        <h6> {result.message && result.message}</h6>
        <h3><WiHumidity style={{ color: "rgb(99, 112, 209)"}}/>{result.main && result.main.humidity}</h3>
        <h3> <WiCloud style={{ color: "grey" }} />{result.main && result.weather[0].description}</h3>
        <h3><WiNightAltCloudyGusts style={{ color: "green" }}/>{result.wind && result.wind.speed} <small>km/hr</small> </h3>
      </div>

    </>
  );
};


export default App;
