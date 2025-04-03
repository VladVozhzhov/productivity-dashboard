# Productivity Dashboard

This is a small pet-project made to show my React.js skills. It includes a to-do list, where you can add or delete your to-do`s, a weather widget made with WeatherAPI, and a timer that you can time your work. 

## Usage

To install dependencies run: 
    >npm install
To run the website, open the console and run:
    > npm run dev
    and then follow the link that was stated in the console
and in another console run:
    > npx json-server --watch data/db.json --port 3500

## Weather Widget is not working

If the weather widget doesn`t work then:
    Go to https://www.weatherapi.com
    Sign in or log in
    Generate an API key
    Paste your API key into [./src/WeatherWidget.jsx](./src/WeatherWidget.jsx) to line 7:
        > const apiKey = "a1781a6f73454c95be1204659252703"; 
        Replace the string in quotes with your WeatherAPI key