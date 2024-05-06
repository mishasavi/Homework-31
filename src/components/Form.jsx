const Form = () => {

    const getCity = e => {
        e.preventDefault();
        console.log(e.currentTarget.city.value.trim());
        e.currentTarget.city.value = "";

    }

    return (
        <form onSubmit={getCity}>
            <input type={'text'} name={'city'} placeholder={'Enter your city'}/>
            <button type={'submit'}>Get weather</button>
        </form>
    );
};

export default Form;
