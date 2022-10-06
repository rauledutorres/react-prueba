export const SegundoComponente = () => {
    let a = ['React', 'Vue', 'Angular']

    return(
        <div>
            <ul>
                <li>React</li>
                <li>Vue</li>
                <li>Angular</li>
            </ul>
            <ul>
                {a.map((elemento, index) => {
                    return(
                        <li key={index}>{elemento}</li>
                    )
                })}
            </ul>
        </div>
    )

}