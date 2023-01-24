import { useState } from 'react'
import './App.css'
import useCityInfo from './component/handleWeather';
import SearchCapital from './component/searchCapital';

function App() {

  const { capital, setCapital, handleCapital } = useCityInfo();

  return <>
    <SearchCapital handleCapital={handleCapital} />
    <hr />
    {(capital.length != 0) &&
      <div>
        <div className='uiShowCapital'></div>
        <div className='uiShowCountry'></div>
        <div className='uiShowTemp'>28 °</div>
        <div className='uiShowIcon'>icono</div>
        <div className='Mapa'>Mapa</div>
      </div>
    }
    {
      (capital.length === 0) && <div className='uiShowNotice'>Escriba una capital por favor.</div>
    }
  </>
}

export default App
