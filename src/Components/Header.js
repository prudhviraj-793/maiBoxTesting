import SearchIcon from "@material-ui/icons/Search";
import { IconButton } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import '../CSS/header.css'

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <h3>Yahoo!mail</h3>
      </div>
      <div className="header-center">
        <div className="search-mail">
          <input type="text" placeholder="Find messages" />
          <IconButton>
            <KeyboardArrowDownIcon />
          </IconButton>
          <IconButton>
            <SearchIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
