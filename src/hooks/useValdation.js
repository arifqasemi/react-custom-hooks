import { useState } from "react";

function UseValidation(validateValue){
    const [enteredValue,setenteredValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);
    const validVal = validateValue(enteredValue);
    const hasError =!validVal && isTouched ;

    const valueHandler =(event)=>{
        console.log(event.target.value);
        setenteredValue(event.target.value);
    }

    const handleBlure = ()=>{
        setIsTouched(true);
        console.log('it is touech');

    }
    return{
        isTouched,valueHandler,handleBlure,hasError

    }
}

export default UseValidation;