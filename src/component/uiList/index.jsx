import React from 'react'

const UiDataWheater = ({ capital }) => {
    return <>
        <div>
            <div className='uiShowCapital'> {capital.location.name} </div>
            <div className='uiShowCountry'>{capital.location.country} </div>
            <div className='uiShowTemp'>{capital.current.temp_c} °</div>
            <img className='uiShowIcon' src={capital.current.condition.icon} alt={capital.location.name} />
            <div className='Mapa'>Mapa</div>
            <iframe
                src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d106523.64603527797!2d${capital.location.lon}8!3d${capital.location.lat}2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scl!4v1674571363747!5m2!1sen!2scl`}
                width="600"
                height="450"
                loading={'lazy'}
            />
        </div>
    </>
}

export default UiDataWheater