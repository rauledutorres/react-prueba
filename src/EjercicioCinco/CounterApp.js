import PropTypes from 'prop-types'
import {useState} from "react";

export const CounterApp = () =>{

    let [value, setValue] = useState(0)

    const sumValue = () => {
        let sumValor = ++value
        setValue(sumValor)
    }

    const resValue = () => {
        let restValor = --value
        setValue(restValor)
    }

    const resetValue = () =>{
        setValue(0)
    }

    return (
        <div> 
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <br />
            <button onClick={sumValue}>Incrementar</button>
            <button onClick={resValue}>Decrementar</button>
            <button onClick={resetValue}>Resetear</button>
        </div>

    )
}

CounterApp.propTypes ={
    value: PropTypes.number
}

CounterApp.defaultProps ={
    value: 0
}