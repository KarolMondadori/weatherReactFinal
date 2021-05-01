import React from "react";

export default function WeatherForecastDay(props) {
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max);
        return `${temperature}`; 
    }
    function minTemperature() {
        let temperature = Math.round(props.data.temp.min);
        return `${temperature}`; 
    }
    function day(){
        let date = new Date(props.data.dt*1000);
        let day = date.getDay();

        let days = ["Sun","Mon","Tue","Wed","Thr","Fri","Sat"]

        return days[day];
    }
    return (
        <div>
            <div className="WeatherForecast-day">{day()}</div>
                        <img className="imgForecast" src={props.data.weather[0].icon}
                        alt={props.data.description} />
                        {/* {props.data.iconUrl} */}
                        <div className="WeatherForecast-temperature"></div>
                            <span className="temperature-max">{maxTemperature()}º </span>
                            <span className="temperature-min">{minTemperature()}º</span>
        </div>
    );
}