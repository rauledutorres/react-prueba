import "./CochesComponentes.css"

export const CochesComponentes = () => {

    let coches = [
        {
            id: 1,
            Modelo: "Ferrari",
            Matricula: 5746,
            Color: "Rojo"
        },
        {
            id: 2,
            Modelo: "Toyota",
            Matricula: 3928,
            Color: "Verde"
        },
        {
            id: 3,
            Modelo: "Chevrolet",
            Matricula: 2839,
            Color: "Plateado"
        },
        {
            id: 4,
            Modelo: "Honda",
            Color: "Azul",
            Matricula: 9352
        }
    ]

    return(
        <div>
            <table>
                <thead>
                    <th>Modelo</th>
                    <th>Color</th>
                    <th>Matricula</th>
                </thead>
                {coches.map(coche => {
                    return (
                        <tr key={coche.id}>
                            <td>{coche.Modelo}</td>
                            <td>{coche.Color}</td>
                            <td>{coche.Matricula}</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )

}