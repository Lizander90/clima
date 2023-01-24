import React from 'react'

const SearchCapital = ({handleCapital}) => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleCapital(e.target['inputFormCity-text'].value)
    }

    return <>
        <form className='formCity' onSubmit={handleFormSubmit}>
            <label> 
                {/* Ciudad: */}
                <input type='text' name='inputFormCity-text' className='inputText inputFormCity-text' placeholder='Capital  ej:"London"' />
                <input type='submit' name='inputFormCity-button' className='inputButton inputFormCity-button' value=' Buscar ' />
            </label>
        </form>
    </>
}

export default SearchCapital