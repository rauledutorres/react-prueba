import {useState} from "react";

export const LocalStorage = () =>{

    const[value, setValue] = useState(0)

    const incHandler = () =>{
        setValue(value + 1)
    }

    const setLocalStorage = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        //el counterValue es el nombre de la llave, para identificarlo
        localStorage.setItem('counterValue2', JSON.stringify(value + 1))
    }

    const getLocalStorage = () => {
        let value1 = localStorage.getItem('counterValue2')
        if(value1){
            let newValue = JSON.parse(value1)
            setValue(newValue)
        }
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }

    const clearOneItem = () => {
        localStorage.removeItem('counterValue2')
    }

    return (
        <div> 
            <h1>{value}</h1>
            <button onClick={incHandler}>Inc</button>
            <button onClick={setLocalStorage}>setToLocalStorage</button>
            <button onClick={getLocalStorage}>getFromLocalStorage</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <button onClick={clearOneItem}>clearOneItem</button>
        </div>

    )
}