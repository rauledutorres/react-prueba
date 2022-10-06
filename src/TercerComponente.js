import {useState} from "react";

export const TercerComponente = () => {

    let[names, setName] = useState(['Olga', 'Pepe', 'Kevin', 'Ivan'])

    const addName = () => {
        let newName = ['Alexis', ...names]
        setName(newName)
    }

    return(
        <div>
            <h3>useState</h3>
            <div>
                {names.map(name => {
                    return (
                        <div>{name}</div>
                    )
                })}
            </div>
            <button onClick = {addName}>Add nombre</button>
        </div>
    )

}