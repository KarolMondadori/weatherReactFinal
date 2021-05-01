import React, {useState, useEffect} from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false);
    }, [props.data.coord]);

    function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded (true);
    }
    
    if(loaded) {
        return (
            <div className="forecasthour">
                <div className="row">
                    {forecast.map(function (dailyForecast, index){
                        if (index < 6) {
                        return (
                            <div className="col" key={index}>
                            < WeatherForecastDay data={dailyForecast}/>
                            </div> ); }
                        })}
                    
                </div>
            </div>
            );
         }
    else { 
        let apiKey ="994481b47d184794d0b8fe0506cdf444";
        let longitude = props.data.coord.lon;
        let latitude = props.data.coord.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
        axios.get(apiUrl).then(handleResponse);

    return null;
    }
}