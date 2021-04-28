import React from "react";

export default function WeatherForecast(props) {
    return (
        <div className="forecasthour">
            <div className="row">
                <div className="col">
                    Thu <br />
                    <img src={props.data.iconUrl}
                    alt={props.data.description}
                    className="float-left" />
                    <strong>19 / </strong> 10
                </div>
            </div>
        </div>
    )
}