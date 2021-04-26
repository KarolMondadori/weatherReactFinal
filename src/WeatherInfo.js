import React from "react";
import FormattedDate from "./FormattedDate.js"
import WeatherTemperature from "./WeatherTemperature.js"

export default function WeatherInfo(props) {
    return (
        <div className="WeahterInfo">
            <h1>{props.data.city}</h1>
            <ul>
                <li className="dayhour"> <FormattedDate date={props.data.date} /> </li>
                <li className="text-capitalize">{props.data.description}</li>
            </ul>
            <div className="row">
                <div className="col-6"> 
                <img src={props.data.iconUrl}
                alt={props.data.description}
                className="float-left" />
                    <WeatherTemperature celsius={props.data.temperature} />
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity: {props.data.humidity} %</li>
                        <li>Wind: {props.data.wind} km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}