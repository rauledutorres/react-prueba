import "./ButtonUniversal.css"

export const ButtonUniversal = (props) => {

    const onClickHandler = () => {
        props.callBac()
    }

    return(
        <button onClick={onClickHandler}>{props.nombre}</button>
    )

}