import React from "react";
import {
  AppBar,
  Box,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  avatar: {
    fontSize: 17,
    margin: "0 .5rem"
  },
  title: {
    flexGrow: 1
  }
}));

export const AppHeader = () => {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar variant="dense">
        <Box className={classes.title}>Learn English</Box>
      </Toolbar>
    </AppBar>
  );
};
