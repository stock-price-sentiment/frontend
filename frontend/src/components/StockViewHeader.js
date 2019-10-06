import React from "react";
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
    alignItems: "center",
  },
  searchBtn: {
    borderRadius: '50%',
    width: '40px',
    minWidth: 'unset',
  },
  searchIcon: {
    cursor: "pointer",
    fontSize: 20,
    transform: 'scaleX(-1)',
  },
  title: {
    fontWeight: "bold"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const StockViewHeader = props => {
  const { classes, showAddStockForm } = props;
  return (
    <AppBar position="relative">
      <Toolbar className={classes.toolbar}>

        <Button className={classes.searchBtn}>
          <SearchIcon color="secondary" className={classes.searchIcon} />
        </Button>
        
        <div className={classes.headerText}>
          <Typography color="secondary" className={classes.title} variant="h5">MAIN PORTFOLIO</Typography>
          <ArrowDropDown color="secondary" className={classes.dropArrow} />
        </div>
        
        <AddBox
          color="secondary"
          className={classes.addBox}
          onClick={showAddStockForm}
        />

      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(StockViewHeader);
