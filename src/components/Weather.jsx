import React from "react";

class Weather extends React.Component {

    render() {
    return (
        <div>
            <p>Location: {this.props.location}</p>
            <p>Air temperature: {this.props.temperature} C</p>
            <p>Air pressure: {this.props.pressure} mm Hg</p>
        </div>
    );
    }
}

export default Weather;