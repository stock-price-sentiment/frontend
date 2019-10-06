import React from 'react';
import { Button, Typography, withStyles } from "@material-ui/core";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import AddBox from "@material-ui/icons/AddBox";
import SearchIcon from "@material-ui/icons/Search";

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
})

const MainHeaderContent = props => {
  const { classes, showAddStockForm, showDropdownMenu, showSearchField } = props;

  return (
    <>
      <Button className={classes.searchBtn}>
        <SearchIcon color="secondary" className={classes.searchIcon} onClick={showSearchField} />
      </Button>
      <div className={classes.headerText}>
        <Typography color="secondary" className={classes.title} variant="h5">MAIN PORTFOLIO</Typography>
        <ArrowDropDown onClick={showDropdownMenu} color="secondary" className={classes.dropArrow} />
      </div>
      
      <AddBox color="secondary" className={classes.addBox} onClick={showAddStockForm} />
    </>
  )
}

export default withStyles(styles)(MainHeaderContent);