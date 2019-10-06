import React from "react";
import { AppBar, Button, Toolbar, TextField, Typography, withStyles } from "@material-ui/core";
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
  showSearch: {
    display: "flex",
    justifyContent: "flex-start"
  },
  form: {
    width: '100%',
  },
  title: {
    fontWeight: "bold"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
});

class StockViewHeader extends React.Component {
  state = {
    showSearch: false,
  }

  showSearchField = e => {
    this.setState({ showSearch: true })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showSearch: false })
  }

  render() {
    const { classes, handleTickerSearch, showAddStockForm, ticker } = this.props,
          { showSearch } = this.state;

    console.log(ticker);

    return (
      <AppBar position="relative">
        <Toolbar className={showSearch ? classes.showSearch : classes.toolbar}>

          <Button className={classes.searchBtn}>
            <SearchIcon color="secondary" className={classes.searchIcon} onClick={this.showSearchField} />
          </Button>
          {showSearch
            ? 
              <form onSubmit={this.handleSubmit} className={classes.form}>
                <TextField
                  className={classes.textInput}
                  fullWidth
                  label="search"
                  margin="dense"
                  autoFocus
                  onChange={handleTickerSearch}
                  value={ticker}
                  variant="outlined"
                />
              </form>
              :
                <>
                <div className={classes.headerText}>
                  <Typography color="secondary" className={classes.title} variant="h5">MAIN PORTFOLIO</Typography>
                  <ArrowDropDown color="secondary" className={classes.dropArrow} />
                </div>
                
                <AddBox
                  color="secondary"
                  className={classes.addBox}
                  onClick={showAddStockForm}
                />
                </>

            }
          

        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(StockViewHeader);
