import { useState } from "react";
import BeautifulScreen from "./BeautifulScreen";
import EqualButton from "./EqualButton";
import NumberButton from "./NumberButton";
import OperateurButton from "./OperatorButton";



function Calculator(){
const [operator,operatorSet] = useState("")
const [result,setResult] = useState("")

    function resultat() {
        const op = operatorSet(eval(operator))
        setResult(op)
        operatorSet(result)
        console.log(result)
    } 

    function displayNumber(e){
        setResult(e.target.value)
        operatorSet(operator + e.target.value)
    }

    function operateur(event){
        let targ = event.target.value
        operatorSet(operator + targ)
    }
    function clear(){
        operatorSet("")
    }
    
    return (
    <div className="show">
        <h1 className="screen"><BeautifulScreen value = {operator} /></h1>
        <ul className="liste">
            <li><NumberButton onclick={displayNumber} value = "0" /></li>
            <li><NumberButton onclick={displayNumber} value = "1" /></li>
            <li><NumberButton onclick={displayNumber} value = "2" /></li>
            <li><NumberButton onclick={displayNumber} value = "3" /></li>
            <li><NumberButton onclick={displayNumber} value = "4" /></li>
            <li><NumberButton onclick={displayNumber} value = "5" /></li>
            <li><NumberButton onclick={displayNumber} value = "6" /></li>
            <li><NumberButton onclick={displayNumber} value = "7" /></li>
            <li><NumberButton onclick={displayNumber} value = "8" /></li>
            <li><NumberButton onclick={displayNumber} value = "9" /></li>
            <li><EqualButton onclick={resultat} value = "=" /></li>
            <li><EqualButton onclick={clear} value = "c" /></li>
            <li><OperateurButton onclick={operateur} value = "+" /></li>
            <li><OperateurButton onclick={operateur} value = "-" /></li>
            <li><OperateurButton onclick={operateur} value = "*" /></li>
            <li><OperateurButton onclick={operateur} value = "/" /></li>
        </ul>
    </div>   
    ) 
}

export default Calculator