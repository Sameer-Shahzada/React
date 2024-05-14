import { React, useEffect, useState } from 'react';
import './css/style.css';

const WeatherApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('mumbai');

    useEffect(() => {
        const fetchApi = async () => {

            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=b14425a6554d189a2d7dc18a8e7d7263`;
            const response = await fetch(url);
            const resJson = await response.json();
            console.log(response);
            setCity(resJson);
        }
        fetchApi();
    },[])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input type="search"
                        className='inputFeild' onChange={(event) => {
                            setSearch(event.target.value);
                        }} />
                </div>
                {
                    !city ? (
                        <p className='errorMsg'>No Data Found</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i class='fas fa-street-view'></i>{search}
                                </h2>
                                <h1 className='temp'>
                                    {city.temp}
                                </h1>
                                <h3 className='tempmin_max'>Min : {city.temp_min} | Max : {city.temp_max} cel</h3>
                            </div>

                            <div className='wave -one'></div>
                            <div className='wave -two'></div>
                            <div className='wave -three'></div>
                        </div>
                    )
                }


            </div>
        </>
    )
}

export default WeatherApp