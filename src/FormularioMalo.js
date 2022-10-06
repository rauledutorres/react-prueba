import PropTypes from 'prop-types'
import {useState} from "react";
import "./FormularioLocStog.css"

export const FormularioLocStog = () => {

    const [usuario, setUser] = useState({})

    const [language, setLang] = useState([])

    const addUser = (e) => {
        e.preventDefault();
        let data = e.target
        console.log(data.true)
        let usuario = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            telefono: data.telefono.value,
            email: data.email.value,
            horoscopo: data.horoscopo.value,
            lenguaje: data.lenguaje.value,
        }
        setUser(usuario)
        console.log(usuario)
    }

    const lenguajes = [{name: "HTML"}, {name: "CSS"}, {name: "JavaScript"}, {name: "PHP"}, {name: "Java"}, {name: "MySQL"}]

    const [checkedState, setCheckedState] = useState(
        new Array(lenguajes.length).fill(false)
    );

    const handleOnChange = (e,position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
                index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);
        setLang(language.concat(e.target.value))
        console.log(language)
    }

    //Hacer un true y false de checkbox con if checked

    const[checked, setCheck] = useState(false)

    return(
        <div>
            <form onSubmit={addUser}>
            <input type="text" placeholder={'Nombre'} name={'nombre'}/>
                <input type="text" placeholder={'Apellido'} name={'apellido'}/>
                <input type="number" placeholder={'Número de teléfono'} name={'telefono'}/>
                <input type="text" placeholder={'Email'} name={'email'}/>
                <select name={'horoscopo'}>
                    <option>Aries</option>
                    <option>Tauro</option>
                    <option>Géminis</option>
                    <option>Cancer</option>
                    <option>Leo</option>
                    <option>Virgo</option>
                    <option>Libra</option>
                    <option>Escorpio</option>
                    <option>Sagitario</option>
                    <option>Capricornio</option>
                    <option>Acuario</option>
                    <option>Piscis</option>
                </select>
                <ul>
                    Seleccione lenguajes que le guste
                    {lenguajes.map(({name}, index) => {
                    return (
                        <li key={index}>
                            <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={checkedState[index].toString()}
                            value={name}
                            checked={checkedState[index]}
                            onChange={(e) => handleOnChange(e,index)}
                            />
                            <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                        </li>
                    );
                    })}
                </ul>
                
                <input type="submit" value={'Enviar'}/>
            </form>
            <br />
            <h1>{usuario.telefono}</h1>
            

        </div>
    )

}

FormularioLocStog.propTypes ={
    telefono: PropTypes.number
}

    /*                 <label><input type="checkbox" name={"lenguaje"} value={"html"}/> HTML</label>
                        <label><input type="checkbox" name={"lenguaje"} value={"css"}/> CSS</label>
                        <label><input type="checkbox" name={"lenguaje"} value={"javascript"}/> JavaScript</label>
                        <label><input type="checkbox" name={"lenguaje"} value={"php"}/> PHP</label>
                        <label><input type="checkbox" name={"lenguaje"} value={"java"}/> Java</label>
                        <label><input type="checkbox" name={"lenguaje"} value={"mysql"}/> MySQL</label> */