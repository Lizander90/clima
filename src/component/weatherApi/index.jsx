import React from 'react'


const getWeatherAPI = async (city = 'moscu') => {

    try {
        console.log((`${import.meta.env.VITE_APP_WEATHER_API}key=${import.meta.env.VITE_APP_WEATHER_KEY}&q=${city}`))
        // http://api.weatherapi.com/v1/search.xml?key=<YOUR_API_KEY>&q=lond
        const reqWeather = await fetch(`${import.meta.env.VITE_APP_WEATHER_API}key=${import.meta.env.VITE_APP_WEATHER_KEY}&q=${city}`)
        const respWeather = await reqWeather.json();
        // console.log(respWeather);
        return respWeather;
    } catch (err) {
        console.log('Imposible acceder al clima en estos momentos')
        return err;
    }

}

export default getWeatherAPI