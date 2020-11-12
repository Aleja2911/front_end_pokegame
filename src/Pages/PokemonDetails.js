import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    minWidth: 400,
  },
  media: {
    height: 300,
  },
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "50px",
    marginBottom: "50px",
  },
});

const PokemonDetails = () => {
  const classes = useStyles();

  let { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetch(`https://pokemon-be.herokuapp.com/pokemon/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data))
      .catch((err) => console.log(err.message));
  }, [id]);

  console.log("id", id);
  console.log("details", detail);

  return (
    <Grid container className={classes.cardContainer}>
      {detail && (
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={detail.pics.animated || detail.pics.front}
            title="cute pokemon"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {detail.name.english}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {detail.name.japanese}
            </Typography>
            {detail.type.map((el) => (
              <Typography gutterBottom variant="h6" component="h2">
                {el}
              </Typography>
            ))}
            <Typography variant="body2" color="textSecondary" component="p">
              Attack: {detail.base.Attack}
              Defense: {detail.base.Defense}
              Speed: {detail.base.Speed}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
};

export default PokemonDetails;
