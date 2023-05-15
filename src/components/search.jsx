import { useState } from 'react'
import PropTypes from 'prop-types'

export const SearchTool = ( { returnFunction } ) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {

        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        returnFunction( inputValue.trim().toLocaleLowerCase() )
        setInputValue('');
    }

  return (

    <form 
        onSubmit={ onSubmit } 
        aria-label='form-search' 
        className = 'form-search'
        >
        <input 
            type='text'
            placeholder='Buscar Productos'
            className = "form-control"
            value={ inputValue }
            onChange={ onInputChange }
        />
    </form>
  )
}

SearchTool.propTypes = {
    returnFunction: PropTypes.func.isRequired,
}
 