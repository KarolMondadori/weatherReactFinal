import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js"
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind: response.data.wind.speed,
            city: response.data.name
        });
    }

        if (weatherData.ready) {
            return <div className="Weather">
            <form>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city" className="entercity" />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="submitcity" />
                    </div>
                </div>
            </form>
            <h1>{weatherData.city}</h1>
            <ul>
                <li className="dayhour"><FormattedDate date={weatherData.date} /></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            <div className="row">
                <div className="col-6"> 
                    <img src={weatherData.iconUrl} 
                    alt="{weatherData.description}"
                    className="float-left"/> 

                    <span className="tempNumber">{Math.round(weatherData.temperature)}</span>
                    <span className="tempUnit">ºC</span>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Precipitation: ** %</li>
                        <li>Humidity:{weatherData.humidity} %</li>
                        <li>Wind:{weatherData.wind} km/h</li>
                    </ul>
                </div>
            </div>
            <div className="forecasthour">
                hour <br />
                icon <br />
                max / min 
            </div>
        </div>
        }
        
        else {
            const apiKey = "994481b47d184794d0b8fe0506cdf444";
            let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(handleResponse);
        
            return "Loading...";
        }
               
}