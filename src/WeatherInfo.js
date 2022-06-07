import React from "react";
import Date from "./Date";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
      </div>
      <div>
        <ul>
          <li>
            <Date date={props.data.date} />
          </li>
        </ul>
      </div>

      <div className="Temp">
        <WeatherIcon code={props.data.Icon} />
        <WeatherTemperature celcius={props.data.temperature} />
        <h3>{props.data.description}</h3>
      </div>

      <div>
        <ul className="Hum">
          <li>Humidity: {props.data.humidity}% </li>
          <li>Wind: {Math.round(props.data.wind)}m/h% </li>
        </ul>
      </div>
    </div>
  );
}
