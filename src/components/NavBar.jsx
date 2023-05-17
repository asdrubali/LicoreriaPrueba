
export const NavBar = ({ returnFunction, groups = [] }) => {

  const handleItemClick = (event) => {
    event.preventDefault();
    returnFunction(
      {
        group: event.target.innerHTML,
        category: null
  });
  }

  return (
    <div className="container-fluid mt-2 cont-p-nav">
            <nav className="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between">
                <div className="colapse-cont colapse-cont container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse navbarNavAltMarkup" id="navbarNavAltMarkup">
                      <div className="navbar-nav">
                        <ul className="d-flex">
                            {
                             groups.map( ({ name }) => (
                                <li
                                  key={name}
                                  className="nav-link"
                                  onClick={ (event) => handleItemClick(event) } 
                                >{ name }</li>
                              ) )
                            }  
                            </ul>
                          <div className="search col-auto ">
                              <form className="d-flex">
                                    <input type="text" className="form-control" id="inputPassword2" placeholder="Buscar Producto"/>
                                  <div className="">
                                    <button type="submit" className="btn">Buscar</button>
                                  </div>
                              </form>
                          </div>
                      </div>
                    </div>
                </div>

            </nav>
    </div>

  );
};
