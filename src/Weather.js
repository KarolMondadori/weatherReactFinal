import React from "react";
import "./Weather.css";

export default function Weather() {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-7">
                    <input type="search" placeholder="Enter a city" className="entercity" />
                </div>
                <div className="col-5">
                    <input type="submit" value="Search" className="submitcity" />
                </div>
            </div>
        </form>
        <h1>City, country</h1>
        <ul>
            <li>Monday, 07:30</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
            <div className="col-6"> 
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy"/> 16ºC |ºF
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: ** %</li>
                    <li>Humidity: ** %</li>
                    <li>Wind: ** km/h</li>
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