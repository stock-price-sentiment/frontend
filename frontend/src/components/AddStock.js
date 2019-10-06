import React from 'react';
import { TextField, withStyles, Container } from '@material-ui/core';

const styles = theme => ({
  container: {
    position: 'absolute',
    top: 133,
    left: 10,
    right: 10,
    width: '90%',
    backgroundColor: theme.palette.primary.main,
  },
  textInput: {
    margin: '15px 0',
  }
})

class AddStock extends React.Component {
  state = {
    ticker: '',
  }

  handleChange = e => {
    this.setState({ ticker: e.target.value.toUpperCase() })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { ticker } = this.state;
    ticker.length > 0 && this.props.addStockToList(ticker);
    this.setState({ ticker: '' })
  }

  render() {
    const { classes } = this.props,
          { ticker } = this.state;

    return (
      <Container className={classes.container}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            className={classes.textInput}
            fullWidth
            label="ticker"
            margin="dense"
            autoFocus
            onChange={this.handleChange}
            value={ticker}
            variant="outlined"
          />
        </form>
      </Container>
    )
  }
}

export default withStyles(styles)(AddStock);