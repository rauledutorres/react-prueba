import {useState} from "react";

export const FormularioComp = () => {

    const [usuario, setUsuario] = useState({})

    const addData = (e) => {
        e.preventDefault();
        let data = e.target
        //console.log(data.nombre.value)

        let usuario = {
            nombre: data.nombre.value,
            apellido: data.apellido.value,
            lenguaje: data.lenguaje.value,
            proyecto: data.proyecto.value,
        }
        setUsuario(usuario)
        console.log(usuario)

        
    }


    return(
        <div>
            <h2>Formulario</h2>
            <form onSubmit={addData}>
                <input type="text" placeholder={'Nombre'} name={'nombre'}/>
                <input type="text" placeholder={'Apellido'} name={'apellido'}/>
                <select name={'lenguaje'}>
                    <option>HTML</option>
                    <option>JS</option>
                    <option>React</option>
                </select>
                <textarea placeholder={'Proyectos'} cols="30" rows="10" name={"proyecto"}></textarea>
                <input type="submit" value={'Enviar'}/>
            </form>
            <div>{usuario.nombre}</div>
        </div>
    )
}