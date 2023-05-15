

export const NavGroup = ({ returnFunction, groupName, itemsList}) => {


  const handleItemClick = ( evento ) => {
    returnFunction({
      group:  groupName.toLocaleLowerCase(),
      category: evento.target.innerText.trim().toLocaleLowerCase() 
    }
);
  }

  return (
      <li className="nav-item dropdown">
       <a
         className="nav-link dropdown-toggle"
         href="#"
         role="button"
         data-bs-toggle="dropdown"
         aria-expanded="false"
         
       >
        { groupName }
          <ul 
            className="group-item-nav dropdown-menu"
            key={ groupName }
          >
            {itemsList.map((item, index) => (
              <li 
                key={ index }
                className="group-item"
                onClick={(ev) => handleItemClick(ev)}
              >{item}</li> ))}
          </ul>
       </a>
      </li>
  );
};
