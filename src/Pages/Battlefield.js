import React, { useState, useEffect } from "react";
import vs from "../assets/vs.png";
import logo from "../assets/logo.png";
import { Grid, TextField, Button } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import NavBar from "./NavBar";
import wallpaper from "../assets/mk-retro.jpg";
import Typography from "@material-ui/core/Typography";
import Icon from "@mdi/react";
import { mdiAxisLock, mdiPokeball } from "@mdi/js";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "50px",
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
  gameInfo: {
    height: "200px",
  },
  outerContainer: {
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  },
}));

export default function Battlefield({ pokemons }) {
  const classes = useStyles();
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [fightmove, setFightmove] = useState("");

  // GAME MECHANICS
  const [startGame, setStartGame] = useState({
    fighterNames: [],
    computerImg: "",
    computerName: "",
    playerImg: "",
    playerName: "",
    start: false,
    gameOver: false,
    winner: null,
  });

  // CHECK IF SELECTED FIGHTER EXISTS AND IF SO, GET IMG AND SET IN SETGAME
  const handleClick = async () => {
    const fighter = pokemons.find((el) => el.name.english === search);
    console.log("fighter", fighter);
    if (!fighter) {
      console.log("not found!");
      setNotFound(true);
    } else {
      console.log("found!");
      setNotFound(false);

      const { data: player } = await axios
        .get(`https://pokemon-be.herokuapp.com/pokemon/${fighter.id}`)
        .catch((err) => console.log(err.message));

      const { data: computer } = await axios
        .get(
          `https://pokemon-be.herokuapp.com/pokemon/${Math.floor(
            Math.random() * pokemons.length
          )}`
        )
        .catch((err) => console.log(err.message));

      console.log("player1", player);
      console.log("player2", computer);

      if (player && computer) {
        setStartGame((prev) => ({
          ...prev,
          playerImg: player.pics.animated,
          playerName: player.name.english,
          computerImg: computer.pics.animated || computer.pics.front,
          computerName: computer.name.english,
        }));
      }
    }
  };

  // WHY AM I PRINTING THIS ALL OVER
  console.log(startGame.fighterNames);
  console.log(startGame.playerImg);
  console.log(startGame.computerImg);

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
          winner: Math.floor(Math.random() * 2),
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

  // HANDLE GAME RESTART
  const handleReset = () => {
    console.log("game was reset!");
    setStartGame((prev) => ({
      fighterNames: [],
      computerImg: "",
      computerName: "",
      playerImg: "",
      playerName: "",
      start: false,
      gameOver: false,
      winner: null,
    }));
  };

  return (
    <Grid container direction="column" className={classes.outerContainer}>
      <NavBar />
      <Grid item>
        <img src={logo} style={{ width: 300 }} alt="logo" />
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
          <img src={vs} style={{ width: 100 }} alt="pokemon" />
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
      <Grid item>
        {!notFound && startGame.playerImg && !startGame.start && (
          <Button variant="contained" color="primary" onClick={handleFight}>
            START FIGHT
          </Button>
        )}

        {startGame.start && !startGame.gameOver && (
          <Typography variant="h4" className={classes.title}>
            {fightmove}
          </Typography>
        )}

        {startGame.gameOver && (
          <Grid item>
            <Typography variant="h4" className={classes.title}>
              ... fainted!
            </Typography>
            <Typography variant="h4" className={classes.title}>
              ... is the winner!
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleReset}>
              Fight again
            </Button>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
}
