
//rsc
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import React from "react";

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            location: "Tel Aviv",
            temperature: 25,
            pressure: 1010
        }
    }

    updateWeather = (data) => {
        this.setState({
            location: data.name,
            temperature: data.main.temp,
            pressure: data.main.pressure
        });
    };

    render() {
        return (
            <div>
                <Form updateWeather={this.updateWeather} />
                <Weather
                    location={this.state.location}
                    temperature={this.state.temperature}
                    pressure={this.state.pressure}
                />
            </div>
        );
    }
}

export default Data;