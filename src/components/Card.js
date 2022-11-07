function Card(props) {
    return (
        <div className="eachCard">
            <img className="images" src={props.image}  alt='image'/>
            <h3>{props.title}</h3>
            <p>{props.information}</p>
        </div>
    )
}

export default Card