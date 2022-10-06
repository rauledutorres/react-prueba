import PropTypes from 'prop-types'
import {useState} from "react";

export const ComponenteAno = () =>{

    let [year, setYear] = useState(2022)

    const sumYear = () => {
        let sumAno = ++year
        setYear(sumAno)
    }

    const resYear = () => {
        let restAno = --year
        setYear(restAno)
    }

    const addYear = (e) =>{
        setYear(e.target.value)
    }

    return (
        <div> 
            <h1>{year}</h1>
            <button onClick={resYear}>-</button>
            <button onClick={sumYear}>+</button>
            <br />
            <br />
            <input type="number" name="ano" placeholder='Introduzca un año' onChange={addYear}/>
            
        </div>

    )
}

ComponenteAno.propTypes ={
    year: PropTypes.number
}

ComponenteAno.defaultProps ={
    year: 2022
}