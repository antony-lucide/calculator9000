function NumberButton(props){
    return <button onClick={props.onclick} value={props.value}>{props.value}</button>
}

export default NumberButton