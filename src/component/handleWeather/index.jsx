import getWeatherAPI from '../weatherApi'
import { useState } from 'react'

const useCityInfo = () => {
    const [capital, setCapital] = useState([])


    const handleCapital = (findText) => {

        getWeatherAPI(findText).then(
            (result) => {
                // console.log('peticion al llamado de la api con ' + findText)
                // console.log(result)
                setCapital(result)
                return result
            }
        )
        return 1
    }

    const isError = () => {
        return capital?.error?.code ?? false;
    }


    return { capital, setCapital, handleCapital, isError }
}

export default useCityInfo