import React from "react";

class Form extends React.Component {
    constructor() {
        super();
    }

    render() {

        const getCity = e => {
            e.preventDefault();
            let myCity = e.currentTarget.city.value.trim();
            fetch (`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&appid=e83d9ba8613929725d60f4c059236ceb&units=metric`)
                .then(response => response.json())
                .then(data => {
                    this.props.updateWeather(data);})
                .catch(e => console.log(e));

            e.currentTarget.city.value = "";
        }




    return (
        <form onSubmit={getCity}>
            <input type={'text'} name={'city'} placeholder={'Enter your city'}/>
            <button type={'submit'}>Get weather</button>
        </form>
    );
    }
}

export default Form;
