import React from "react";
import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  }
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar variant="dense">
        <Typography variant="h6" className={classes.title}>
        🇺🇸
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
