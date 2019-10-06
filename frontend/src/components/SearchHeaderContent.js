import React from 'react';
import { Button, TextField, withStyles, withTheme } from "@material-ui/core";
import Clear from "@material-ui/icons/Clear";

const styles = theme => ({
  form: {
    width: '100%',
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
})

const SearchHeaderContent = props => {
  const { classes, handleSubmit, handleTickerSearch, showSearchField, ticker, theme } = props;
  return (
    <>
      <Button className={classes.searchBtn}>
        <Clear color="secondary" className={classes.searchIcon} onClick={showSearchField} />
      </Button>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField fullWidth label="search" margin="dense" autoFocus onChange={handleTickerSearch} value={ticker} inputProps={{style: {fontSize: 16, color: theme.palette.secondary.main}}} />
      </form>
    </>
  )
}

export default withTheme(withStyles(styles)(SearchHeaderContent));