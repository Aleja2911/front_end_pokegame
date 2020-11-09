import React, { useState, useEffect } from "react";
import vs from "../assets/vs.png";
import logo from "../assets/logo.png";
import { Grid, TextField, Button } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import NavBar from "./NavBar";
import wallpaper from "../assets/mk-retro.jpg";
import { Repeat } from "@material-ui/icons";
import Typography from "@material-ui/core/Typography";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";
import Icon from "@mdi/react";
import { mdiAccount } from "@mdi/js";
import { mdiPokeball } from "@mdi/js";

// use as custom style repo and pass on els like: className={classes.backgroundStyles}
const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    color: "white",
  },
  searchInput: {
    width: "200px",
    marginRight: "20px",
    marginLeft: "10px",
  },
  background: {
    backgroundImage: `url(${wallpaper})`,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Permanent Marker",
    color: "orange",
  },
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
};
export default function Battlefield({ pokemons }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [fightmove, setFightmove] = useState("");

  // GAME MECHANICS
  const [startGame, setStartGame] = useState({
    computerChoice: "",
    computerImg:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/166.gif",
    playerImg: "",
    start: false,
    gameOver: false,
  });

  // CHECK IF SELECTED FIGHTER EXISTS AND IF SO, GET IMG AND SET IN SETGAME
  const handleClick = () => {
    const fighter = pokemons.find((el) => el.name.english === search);
    console.log("fighter", fighter);
    if (!fighter) {
      console.log("not found!");
      setNotFound(true);
    } else {
      console.log("found!");
      setNotFound(false);
      fetch(`https://pokemon-be.herokuapp.com/pokemon/${fighter.id}`)
        .then((res) => res.json())
        .then((data) => {
          setStartGame((prev) => ({
            ...prev,
            playerImg: data.pics.animated,
          }));
        });
      fetch(
        `https://pokemon-be.herokuapp.com/pokemon/${Math.floor(
          Math.random() * pokemons.length
        )}`
      )
        .then((res) => res.json())
        .then((data) => {
          setStartGame((prev) => ({
            ...prev,
            computerImg: data.pics.animated,
          }));
        });
    }
  };

  // console.log(startGame.playerImg);
  // console.log(startGame.computerImg);

  // COLLECT SEARCH INPUT & RESET NOTFOUND
  const handleChange = (e) => {
    setSearch(e.target.value);
    setNotFound(false);
  };

  const fightingTechniques = [
    "tackle",
    "blaze-kick",
    "aromatic-mist",
    "bold strike",
    "bubble-beam",
    "destiny-bond",
    "fire-blast",
    "fishious rend",
    "focus punch",
    "glacial lance",
    "grass-whistle",
    "guillotine",
    "horn drill",
  ];

  // HANDLE GAME LOGIC
  const handleFight = () => {
    setStartGame((prev) => ({
      ...prev,
      start: true,
    }));

    // DISPLAY FIGHT MOVES
    let i = 0;
    let id = setInterval(() => {
      if (i === 3) {
        setStartGame((prev) => ({
          ...prev,
          gameOver: true,
        }));
        clearInterval(id);
      }
      setFightmove(
        `Your fighter used ${
          fightingTechniques[
            Math.floor(Math.random() * fightingTechniques.length)
          ]
        }`
      );
      i++;
    }, 3000);
  };

  useEffect(() => {}, [fightmove]);

  return (
    <Grid container direction="column" style={styles.paperContainer}>
      <NavBar />
      <Grid item>
        <img src={logo} style={{ width: 300 }} />
      </Grid>
      <Grid item container>
        <Grid item sm={6}>
          <Typography variant="h4" className={classes.title}>
            Player 1
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h4" className={classes.title}>
            Player 2
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={1}></Grid>
        <Grid item xs={12} sm={4}>
          {startGame.start ? (
            <img
              src={startGame.computerImg}
              alt="pokemon"
              style={{ width: 200 }}
            />
          ) : (
            <img
              src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif"
              alt="pokeball"
            />
          )}
        </Grid>

        <Grid item sm={2}>
          <img src={vs} style={{ width: 100 }} />
        </Grid>

        <Grid item xs={12} sm={4}>
          {startGame.start ? (
            <img
              src={startGame.playerImg}
              alt="pokemon"
              style={{ width: 200 }}
            />
          ) : (
            <img
              src="https://thumbs.gfycat.com/DampSpanishCleanerwrasse-size_restricted.gif"
              alt="pokeball"
            />
          )}
        </Grid>

        <Grid item sm={1}></Grid>
      </Grid>
      {!startGame.start && (
        <Grid item>
          <div className={classes.searchContainer}>
            <Icon className={classes.searchIcon} path={mdiPokeball} size={2} />
            <TextField
              className={classes.searchInput}
              onChange={handleChange}
              label="search..."
              variant="standard"
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Pick Fighter
            </Button>
          </div>
        </Grid>
      )}
      <Grid item>
        {notFound && !startGame.playerImg && (
          <Typography variant="h4" className={classes.title}>
            Hmm.. Looks like this Pokémon has not been caught yet. Please try
            again or check our Pokédex for inspiration!
          </Typography>
        )}
      </Grid>
      {!notFound && startGame.playerImg && (
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleFight}>
            START FIGHT
          </Button>
          {fightmove && (
            <Typography variant="h4" className={classes.title}>
              Fighting moves: {fightmove}
            </Typography>
          )}
          {startGame.gameOver && <div>The Fight is over!</div>}
        </Grid>
      )}
    </Grid>
  );
}
