import PropTypes from 'prop-types'

export const PrimerComponente = ({name, age}) =>{
    
    //let name = 'Raul'

    const addWord = (e) => {
        console.log('Hola Mundo')
    }

    return (
        <div> 
            <h1>Hola Mundo {name}</h1>
            <div>hola {age}</div>
            <button onClick={addWord}>+</button>
        </div>

    )
}

PrimerComponente.propTypes ={
    age: PropTypes.number
}

PrimerComponente.defaultProps ={
    name: 'Juan'
}