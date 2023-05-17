import { useState } from "react"


export const DropDown = ({ returnFunction, name, itemsList = [] }) => {

    const [categoryToFind, setCategoryToFind] = useState('Todo');

    const handleItemClick = ( event ) => {
      event.preventDefault()
        setCategoryToFind(event.target.innerHTML)
        returnFunction({
            group: name,
            category: event.target.innerHTML.trim().toLocaleLowerCase() 
          });
    }
    
  return (
    <>
        <button
          className={`drom-menu btn btn-light dropdown-toggle ${itemsList.length <= 1 ? "disabled" : ""}`}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          { categoryToFind }
        </button>

        <ul className="dropdown-menu dropdown-menu-light">
            {
                itemsList.map( (category) => (
                    <li key={ category }> <a 
                        className="dropdown-item" 
                        onClick={ (event) => handleItemClick(event) }
                    >{ category }</a></li>
                ))
            }
        </ul>
    </>
  )
}
