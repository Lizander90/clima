import { useState } from 'react'
import './App.css'

const getWeather = async (city = 'moscu') => {

  try {
    console.log((`${import.meta.env.VITE_APP_WEATHER_API}key=${import.meta.env.VITE_APP_WEATHER_KEY}&q=${city}`))
    // http://api.weatherapi.com/v1/search.xml?key=<YOUR_API_KEY>&q=lond
    const reqWeather = await fetch(`${import.meta.env.VITE_APP_WEATHER_API}key=${import.meta.env.VITE_APP_WEATHER_KEY}&q=${city}`)
    const respWeather = await reqWeather.json();
    console.log(respWeather);
    return respWeather;
  } catch (err) {
    console.log('Imposible acceder al clima en estos momentos')
    return err;
  }
}

function App() {
  const [capital, setCapital] = useState([])
  // setCapital(getWeather);
  return <>
    <form className='formCity'>
      <label> Ciudad:
        <input type='text' className='inputText inputFormCity-text' placeholder='Capital  ej:"London"' />
        <input type='submit' className='inputButton inputFormCity-button' value='buscar' />
      </label>
    </form>

    <hr />
    {!!!capital &&
      <div>
        <div className='uiShowCapital'>Santiago</div>
        <div className='uiShowTemp'>28 °</div>
        <div className='uiShowIcon'>icono</div>
        <div className='Mapa'>Mapa</div>
      </div>
    }
    {!!capital &&
      <div className='uiShowNotice'>Escriba una capital por favor.</div>
    }

  </>
}

export default App
