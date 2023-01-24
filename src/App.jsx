import './App.css'
import useCityInfo from './component/handleWeather';
import SearchCapital from './component/searchCapital';
import UiDataWheater from './component/uiList';

function App() {

  const { capital, setCapital, handleCapital, isError } = useCityInfo();
  console.log(isError());
  return <>

    <SearchCapital handleCapital={handleCapital} />
    <br />

    {/* si no hay error listar o indicar qe busqe capital */}
    {!isError() && <>
      {(capital.length !== 0 && !isError()) &&
        <UiDataWheater capital={capital} />
      }
      {
        (capital.length === 0 && !isError()) && <div className='uiShowNotice infoNotice'>Escriba una capital por favor.</div>
      }
    </>
    }

    {/* si hay error indicar el error y sugerir */}
    {isError() && <>
      {
        (isError() === 1003)
          ?
          <div className='uiShowNotice errorNotice'>Region vacia por favor escriba una region valida</div>
          :
          <div className='uiShowNotice errorNotice'> Region no encontrada. Rectifique por favor</div>
      }
    </>}


  </>
}

export default App
