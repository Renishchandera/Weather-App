import style from './css/SearchBox.module.css';
import { memo, useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';

function SearchBox({ weatherInfo , setLoading}) {
    const [city, setCity] = useState("");
    const lastCityRef = useRef("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7d7ec519d4d72cbcb13be7d08f1e431f";
    console.log("SearchBox Rendered");
    let result;
    const getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if ('message' in jsonResponse) {
                throw jsonResponse;
            }
            console.log(jsonResponse);
            result = {
                success: true,
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            }
            setLoading(false);
            return result;
        } catch (err) {
            console.log("CATCHED");
            console.log(err.message);
            result = {
                success: false,
                cod: err.cod,
                message: err.message,
            }
            setLoading(false);
            return result;
        }
    };

    const handleClick = useCallback(async (e) => {
        e.preventDefault();
        console.log(city);
        setLoading(true);
        let result = await getWeatherInfo();
        if (lastCityRef.current !== city) {
            weatherInfo(result);
        } else {
            console.log("same city do not render pleaaasee......:(");
        }
        lastCityRef.current = city;
    }, [city, weatherInfo]);

    const handleChange = useCallback((e) => {
        setCity(e.target.value);
    }, []);


    return (
        <>
            <div className={style.searchboxcontainer}>
                <form>
                    <input type="text" placeholder="Enter City Name" id='searchbox' name='searchbox' required onChange={handleChange} />
                    <br />
                    <input type='submit' value='Search' className={style.searchbtn} onClick={handleClick}/>
                </form>
            </div>
        </>
    );
}


export default memo(SearchBox);