import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const styles = theme => ({
  addBox: {
    cursor: "pointer",
    fontSize: 40
  },
  dropArrow: {
    cursor: "pointer",
    fontSize: 40,
    fontWeight: "bold"
  },
  headerText: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  searchIcon: {
    cursor: "pointer"
  },
  title: {
    fontWeight: "bold"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <SearchIcon className={classes.searchIcon} />
        <div className={classes.headerText}>
          <Typography className={classes.title} variant="h5">
            MAIN PORTFOLIO
          </Typography>
          <ArrowDropDown className={classes.dropArrow} />
        </div>
        <AddBox className={classes.addBox} />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
