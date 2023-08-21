import useValide from "../hooks/useValide";


function Nav({islog}){

  const { log: logged } = useValide();
  console.log('Nav component rendered', logged);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        {islog && <a className="nav-link" href="#">logout</a>}
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Nav;