import logo from './logo.svg';
import './App.css';
import useValide from './hooks/useValide';
import Nav from './component/nav';
import UseValidation from './hooks/useValdation';


function App() {
  const {valide:valid,setvalid,islog,testFun,setLogggedIn} = useValide();
  const { isTouched,valueHandler,handleBlure,hasError} = UseValidation(value => value.trim() !== '');

  const { isTouched:passTouch,valueHandler:passValueHandelr,handleBlure:passBlureHandler,hasError:passHasError} = UseValidation(value => value.trim() !== '');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setLogggedIn();
    setvalid();
    testFun();
  };

  // const checkValue =(e)=>{
  //   if(e.target.value.length == 0){
  //     alert('ddd')
  //   }else{
  //     valueHandler(e.target.value);

  //   }

  // }
  
  console.log(hasError, 'check');
  return (
    <>
   <Nav islog={islog}/>
   {!islog && <div className="container mt-5 border p-4">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" onBlur={() =>handleBlure()} onChange={valueHandler} aria-describedby="emailHelp" placeholder="Enter email"/>
          {hasError && <p className='text-danger'>Email field is required</p> }
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" onBlur={() =>passBlureHandler()} onChange={passValueHandelr} placeholder="Password"/>
          {passHasError && <p className='text-danger'>Password field is required</p>}
        </div>
        <button type="submit" className="btn btn-primary" disabled={!hasError}>Submit</button>
      </form>
    </div>}
    </>
  );
}

export default App;
