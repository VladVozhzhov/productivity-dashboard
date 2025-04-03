import { useState, useEffect } from "react";
import axios from "axios";
import secrets from '../secrets.js';

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = secrets.tokens.weatherToken;

    useEffect(() => {
        const fetchWeather = async (latitude, longitude) => {
            const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;

            try {
                const response = await axios.get(url);
                setWeather(response.data);
            } catch (err) {
                setError("Could not fetch weather. Check API key.");
            }
        };

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    fetchWeather(latitude, longitude);
                },
                () => setError("Location access denied.")
            );
        } else {
            setError("Geolocation not supported.");
        }
    }, [apiKey]);

    return (
        <section className="border-3 rounded-4xl flex flex-col items-center justify-center text-center mx-3">
            <h3 className="text-xl font-bold">Weather in Your Location</h3>
            {error && <p className="text-red-500">{error}</p>}
            {weather ? (
                <div>
                    <h4 className="text-2xl">{weather.location.name}</h4>
                    <p>{weather.current.condition.text}</p>
                    <img src={weather.current.condition.icon} alt="Weather icon" className="mx-auto" />
                    <p className="text-3xl">{weather.current.temp_c}°C</p>
                </div>
            ) : !error ? (
                <p>Loading...</p>
            ) : null}
        </section>
    );
};

export default WeatherWidget;