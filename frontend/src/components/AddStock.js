import React from 'react';
import { Button, Paper, TextField, withStyles, withTheme } from '@material-ui/core';

const styles = theme => ({
  button: {
    height: 30,
    width: 25,
  },
  paper: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  form: {
    display: 'flex',
    width: '60%',
  },
  textInput: {
    margin: '15px 0',
  }
})

class AddStock extends React.Component {
  state = {
    ticker: '',
    style: null,
  }

  componentDidMount() {
    this.setState({ style: { top: 90, left: 10, right: 10, transition: '0.5s all' } })
  }

  handleChange = e => {
    this.setState({ ticker: e.target.value.toUpperCase() })
  }

  handleSubmit = e => {
    e.preventDefault();
    this.state.ticker.length > 0 && this.props.addStockToList(this.state.ticker);
    this.setState({ ticker: '' })
    this.props.showAddStockForm();
  }

  render() {
    const { classes, showAddStockForm, theme } = this.props,
          { style, ticker } = this.state;

    return (
      <Paper className={classes.paper} style={style} >
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <TextField
            className={classes.textInput}
            fullWidth
            label="ticker"
            margin="dense"
            autoFocus
            onChange={this.handleChange}
            value={ticker}
            variant="outlined"
            inputProps={{
              style: {fontSize: 16, color: theme.palette.secondary.main} 
            }}
          />
        </form>
        <Button className={classes.button} disabled={ticker.length < 1 ? true : false} variant="contained" color='secondary' onClick={this.handleSubmit}>ADD</Button>
        <Button className={classes.button} variant="contained" color='secondary' onClick={showAddStockForm}>CANCEL</Button>
      </Paper>
    )
  }
}

export default withTheme(withStyles(styles)(AddStock));