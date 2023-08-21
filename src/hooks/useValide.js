import { useState } from 'react';
function useValide(){
    const [isValide, setIsValide] = useState(true);
    const [islog, setIslog] = useState(false);
    const [log, setLog] = useState(false);
    
    const setvalid=()=>{
        setIsValide((prev) => !prev);
        // setIslog((prev) => !prev);
        // console.log('it is validating');
    }
    const setLogggedIn=()=>{
        setIslog(true);
    }

    const testFun = ()=>{
        setLog(true);

    }
     
    return{
        valide: isValide,setvalid,islog,testFun,setLogggedIn,log
       
    }
}

export default useValide;