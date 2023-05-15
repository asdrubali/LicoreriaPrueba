

export const NavItem = ( {returnFun, data }) => {

    const handleItemClick = ( { target } ) => {
        returnFun( target.innerText.trim().toLocaleLowerCase() );
    }

    return (
      <ul 
        className="dropdown-menu"
        key={ data.title }
      >
        {data.itemsList.map((item) => (
          <li 
            onClick={(ev) => handleItemClick(ev)}
            key={ item }
          ><a className="dropdown-item" href="#">{item}</a></li> ))}
      </ul>
    );
};
