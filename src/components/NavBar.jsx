
import { NavGroup } from "./NavGroup";
import { SearchTool } from "./search";

export const NavBar = ({ returnFunction, _data }) => {

  const handleItemClick = ( evento ) => {
    returnFunction({
      group: '',
      category: ''
    });
  }
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg" >
        <div className="container-fluid nav-container-items">
          <div id="nav-bar-all" className="groups-nav">
              <ul id="nav-bar-all"  className="group-list">
                {
                  _data.map( ( group ) => (
                    <NavGroup key={ group.groupName } returnFunction = { returnFunction } { ...group } />
                  ) )
                }
              </ul>
          </div>
        </div>
        <div className="d-none d-sm-block container search-container">
          <SearchTool returnFunction = { returnFunction } />
        </div>
      </nav>
    </div>
  );
};
