import React, {useState} from "react";
import axios from "axios";

export default function Form() {
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [city, setCity] = useState(null);
  let [icon, setIcon] = useState(null);
  function getInput(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "765f905a5ff48de4791afc288658166a";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
    axios.get(url).then(showHumidity);
    axios.get(url).then(showDescription);
    axios.get(url).then(showWind);
    axios.get(url).then(showIcon);
  }
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  function showDescription(response) {
    setDescription(response.data.weather[0].description);
  }

  function showHumidity(response) {
    setHumidity(response.data.main.humidity);
  }

  function showWind(response) {
    setWind(response.data.wind.speed);
  }
  function showIcon(response) {
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }
  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <input type="search " placeholder="enter a city" onChange={getInput} />
        <input type="submit" value="search" />
      </form>
      <ul>
        <li> Temperature:{Math.round(temperature)} °C </li>
        <li>Description:{description}</li>
        <li> Humidity:{humidity}%</li>
        <li> Wind:{wind}</li>
        <li>
          {" "}
          <img scr={icon} alt="" />
        </li>
      </ul>
    </div>
  );
}
