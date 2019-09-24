import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <SearchIcon />
        <Typography>
          MAIN PORTFOLIO
        </Typography>
        <ArrowDropDown />
        <AddBox />
      </Toolbar>
    </AppBar>
  )
}

export default Header