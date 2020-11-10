import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuOuter: {
    backgroundColor: "black",
    opacity: "80%",
  },
  title: {
    flexGrow: 1,
    fontFamily: "Permanent Marker",
  },
  link: {
    textDecoration: "none",
    color: "white",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.menuOuter}>
        <Toolbar>
          <Typography variant="h6" align="left" className={classes.title}>
            <Link className={classes.link} to="/battlefield">
              Pokémon Kombat
            </Link>
          </Typography>
          <Typography variant="h6" align="right" className={classes.title}>
            <Link className={classes.link} to="/pokedex">
              Pokedéx
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
