import React from "react";
import SearchHeaderContent from './SearchHeaderContent';
import MainHeaderContent from './MainHeaderContent';
import AddStock from './AddStock';
import PortfolioDropdownMenu from "./PortfolioDropdownMenu";
import { AppBar, Toolbar, withStyles } from "@material-ui/core";

const styles = theme => ({
  showSearch: {
    display: "flex",
    justifyContent: "flex-start"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
});

class StockViewHeader extends React.Component {
  state = {
    showSearch: false,
    showDropdown: false,
    showForm: false,
    style: null,
  }

  showDropdownMenu = e => {
    this.setState({ showDropdown: !this.state.showDropdown})
  }

  showAddStockForm = e => {
    this.setState({ showForm: !this.state.showForm });
  }

  showSearchField = e => {
    this.setState({ showSearch: !this.state.showSearch })
  }
  
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ showSearch: false })
  }

  render() {
    const { addStockToList, classes, handleTickerSearch, ticker } = this.props,
          { showDropdown, showForm, showSearch } = this.state;

    return (
      <AppBar position="relative">
        <Toolbar className={showSearch ? classes.showSearch : classes.toolbar}>
          {showSearch
          ? <SearchHeaderContent ticker={ticker} showSearchField={this.showSearchField} handleSubmit={this.handleSubmit} handleTickerSearch={handleTickerSearch} />
          : <MainHeaderContent showSearchField={this.showSearchField} showDropdownMenu={this.showDropdownMenu} showAddStockForm={this.showAddStockForm} />
          }
          {showForm ? <AddStock addStockToList={addStockToList} showAddStockForm={this.showAddStockForm} /> : undefined}
          {showDropdown ? <PortfolioDropdownMenu /> : undefined}
        </Toolbar>
      </AppBar>
    );
  }
};

export default withStyles(styles)(StockViewHeader);
