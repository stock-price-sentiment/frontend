import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

const styles = theme => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  headerText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  dropArrow: {
    fontSize: '30px'
  }
})

const Header = ({ classes }) => {
  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <SearchIcon />
        <div className={classes.headerText}>
          <Typography variant="h6">MAIN PORTFOLIO</Typography>
          <ArrowDropDown className={classes.dropArrow} />
        </div>
        <AddBox />
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)