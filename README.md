# Productivity Dashboard

This is a small pet-project made to show my React.js skills. It includes a to-do list, where you can add or delete your to-do`s, a weather widget made with WeatherAPI, and a timer that you can time your work. 

## Setup

- Go to https://www.weatherapi.com
- Sign in or log in
- Generate an API key
- Paste your API key into [./src/WeatherWidget.jsx](./src/WeatherWidget.jsx) to line 7:
- `const apiKey = ""`; 
- Replace the string in quotes with your WeatherAPI key

## Usage

- type in the console `npm i` to install dependencies
- enter `npm run dev`
- and in the 2nd console enter `npx json-server --watch data/db.json --port 3500`
