import React from "react";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { IconButton } from "@material-ui/core";
import { Button } from "@material-ui/core";
import '../CSS/emailMenu.css'

function EmailMenu() {
  return (
    <div className="emailMenu">
      <div className="emailMenu-left">
        <IconButton>
          <CheckBoxOutlineBlankIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
      <div className="emailMenu-right">
        <Button>Sort</Button>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default EmailMenu;
