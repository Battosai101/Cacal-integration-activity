
export default function ProductCard(props){
    return(
        <h3>{props.id} {props.title} - ${props.price}</h3>
    )
}