import React from "react";
import { Paper, Typography, Grid, withStyles, Container } from "@material-ui/core";
import { flexbox } from "@material-ui/system";

const styles = theme => ({
  cardHeader: {
    background: "#ffc107",
    margin: "20px 20px 0 20px",
    width: "50%",
    padding: "5px",
    textAlign: "center",
    color: "black",

  },
  title: {
    fontWeight: "bold"
  },
  paper: {
    background: "inherit",
    border: "2px solid #ffc107",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 20px 0 20px",
    padding: '5px',
    flexDirection: "column"
  },
  newsSource:{
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
  },
  readMore:{
      color: "#03a9f4"
  },
  newsDescription:{
      color: "#ffc107"
  }
});

const NewsCard = props => {
  const { classes } = props;
  const {ticker, source, posted, description} = props.newsArticle

  return (
    <Container>
    <Paper className={classes.cardHeader} square={true}>
    <Typography className={classes.title}> {ticker} </Typography>
    </Paper>
    <Paper className={classes.paper} square={true}>
        <Grid className={classes.newsSource}>
            <Typography variant="h4"> {source} </Typography>
            <Typography variant="h4"> {posted} ago</Typography>
        </Grid>
        <Grid>
        <Typography variant="h5" className={classes.newsDescription}>
        {description}
        </Typography>
        <Typography variant="h5" className={classes.readMore}>
            Read More
        </Typography>
        </Grid>
    </Paper>
    </Container>
  );
};

export default withStyles(styles)(NewsCard);