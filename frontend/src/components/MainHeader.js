import React from 'react';
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";

const styles = theme => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
  },
  navItem: {
    marginRight: 10,
  },
  profileIcon: {
    backgroundColor: 'lightgrey',
    borderRadius: '50%',
    width: 30,
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const MainHeader = ({ classes }) => {
  return (
    <AppBar color='secondary' position="sticky">
      <Toolbar className={classes.header}>
        <nav className={classes.nav}>
          <Typography color='primary' className={classes.navItem}>HOME</Typography>
          <Typography color='primary' className={classes.navItem}>WATCHLIST</Typography>
          <Typography color='primary' className={classes.navItem}>SETTINGS</Typography>
        </nav>
        <div className={classes.profileIcon}>
          <Typography weight="bold" color="secondary" variant="h5">U</Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(MainHeader);