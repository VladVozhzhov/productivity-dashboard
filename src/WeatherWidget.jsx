import { useState, useEffect } from "react";
import axios from "axios";

const WeatherWidget = () => {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const apiKey = "a1781a6f73454c95be1204659252703"; // Replace with your WeatherAPI key

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${latitude},${longitude}&aqi=no`;

                    try {
                        const response = await axios.get(url);
                        setWeather(response.data);
                    } catch (err) {
                        setError("Could not fetch weather. Check API key.");
                    }
                },
                () => setError("Location access denied.")
            );
        } else {
            setError("Geolocation not supported.");
        }
    }, []);

    return (
        <div className="border-3 rounded-4xl flex flex-col items-center justify-center text-center mx-3">
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
        </div>
    );
};

export default WeatherWidget;
