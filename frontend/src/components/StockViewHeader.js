import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography, withStyles } from "@material-ui/core";
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
  searchBtn: {
    borderRadius: '50%',
    width: '40px',
    minWidth: 'unset',
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

const StockViewHeader = ({ classes }) => {
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>
        <Button className={classes.searchBtn}>
          <SearchIcon className={classes.searchIcon} />
        </Button>
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

export default withStyles(styles)(StockViewHeader);
