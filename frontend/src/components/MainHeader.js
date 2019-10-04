import React from 'react';
import { AppBar, Toolbar, Typography, useTheme, withStyles } from "@material-ui/core";

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
    width: 40,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const MainHeader = ({ classes }) => {
  // const theme = useTheme()
  return (
    <AppBar color='secondary' position="relative">
      <Toolbar className={classes.header}>
        <nav className={classes.nav}>
          <Typography color='primary' className={classes.navItem}>HOME</Typography>
          <Typography color='primary' className={classes.navItem}>WATCHLIST</Typography>
          <Typography color='primary' className={classes.navItem}>SETTINGS</Typography>
        </nav>
        <div className={classes.profileIcon}>
          <Typography variant="h4">U</Typography>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(MainHeader);