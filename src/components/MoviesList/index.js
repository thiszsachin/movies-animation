import React, { useEffect, useState } from "react";
import Movies from "../../movieList.json";
import "./style.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";

const MoviesList = () => {
  const [moviesDetailsShow, setMoviesDetailsShow] = useState(false);
  const [currentMovies, setCurrentMovie] = useState({});
  useEffect(() => {
    console.log(Movies);
  }, []);
  return (
    <>
      {moviesDetailsShow && (
        <div
          id="movieDetailsShow"
          style={{
            opacity: !moviesDetailsShow ? "0" : "1",
            transition: "all 3s ease-in",
            visibility: !moviesDetailsShow ? "hidden" : "visible",
          }}
          className={
            moviesDetailsShow
              ? "ModalOpen movie-details-container"
              : "ModalClosed movie-details-container"
          }
        >
          <img
            style={{
              height: "420px",
              width: "300px",
              borderTopLeftRadius: "16px",
              borderBottomLeftRadius: "16px",
            }}
            src={currentMovies.Images[0]}
            alt={currentMovies.Title}
          />
          <div style={{ margin: "30px", fontWeight: 600 }}>
            <Typography gutterBottom variant="h5">
              {currentMovies.Title}
            </Typography>
            <div style={{ display: "flex" }}>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LinearProgress
                  style={{
                    backgroundColor: "#1f2a3c",
                    color: "#00e0ff",
                    width: "100px",
                    height: "10px",
                  }}
                  determinate
                  value={
                    currentMovies.imdbRating !== "N/A"
                      ? currentMovies.imdbRating * 10
                      : 0
                  }
                />
              </span>
              <p style={{ marginLeft: "10px" }}>
                {currentMovies.imdbRating}/10
              </p>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span>Year:</span>
              <span style={{ marginLeft: "100px" }}>{currentMovies.Year}</span>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span>Running Time:</span>
              <span style={{ marginLeft: "30px" }}>
                {currentMovies.Runtime}
              </span>
            </div>
            <div style={{ marginBottom: "10px" }}>
              <span>Directed by:</span>
              <span style={{ marginLeft: "45px" }}>
                {currentMovies.Director}
              </span>
            </div>
            <div>
              <span>language:</span>
              <span style={{ marginLeft: "60px" }}>
                {currentMovies.Language}
              </span>
            </div>
            <p>{currentMovies.Plot}</p>
            <div>
              <Button className="play-btn" variant="contained">
                Play Movie
              </Button>
              <Button className="trailer-btn" variant="outlined">
                Watch Trailer
              </Button>
            </div>
          </div>
        </div>
      )}
      <Grid container spacing={2} id="movieListShow">
        {Movies.map((item) => (
          <Grid key={item.Title} item xs={12} sm={6} md={2.4}>
            <Card
              sx={{ maxWidth: 345, height: 330 }}
              style={{
                backgroundColor: "#394B61",
                color: "rgb(206, 199, 199)",
                padding: "10px",
              }}
            >
              <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={item.Images[0]}
                style={{ objectFit: "cover" }}
              />
              <Typography
                style={{ marginTop: "5px" }}
                gutterBottom
                variant="subtitle2"
              >
                {item.Title}
              </Typography>

              <CardActions>
                <Button
                  size="small"
                  className="movies-action-play-btn"
                  onClick={() => {
                    setMoviesDetailsShow(true);
                    setCurrentMovie(item);
                    window.scroll(0, 0);
                  }}
                >
                  <PlayCircleOutlinedIcon />
                </Button>
                <Button size="small" className="movies-action-btn">
                  <AddCircleOutlineOutlinedIcon />
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default MoviesList;
