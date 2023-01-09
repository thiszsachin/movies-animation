import React, { useState } from "react";
import "./searchHeader.css";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import Movies from "../../movieList.json";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CircularProgress from "@mui/material/CircularProgress";

const SearchHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userSearch, setUserSearch] = useState("");
  const [result, setResult] = useState("");
  const [isSearched, setIsSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = () => {
    setIsOpen(!isOpen);
  };

  const hanldeSearch = () => {
    setIsLoading(true);
    let data = [];
    for (let i = 0; i < Movies.length; i++) {
      if (
        Movies[i].Title.toLocaleLowerCase() === userSearch.toLocaleLowerCase()
      ) {
        data.push(Movies[i]);
      }
    }
    setResult(data);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className={isOpen ? "search-container" : "search-container-close"}>
          {!isOpen && (
            <SearchIcon
              style={{ cursor: "pointer" }}
              fontSize="large"
              onClick={() => handleSearch()}
            />
          )}
          {isOpen && (
            <div className="input-wrapper">
              <SearchIcon
                style={{ cursor: "pointer" }}
                fontSize="large"
                onClick={() => {
                  hanldeSearch();
                  setIsSearched(true);
                  setIsSearched(false);
                }}
              />
              <input
                className="search-input"
                placeholder="Title, Movies, Keyword"
                onChange={(e) => setUserSearch(e.target.value)}
              />
              <CloseIcon
                style={{ cursor: "pointer" }}
                className="close-icon"
                onClick={() => {
                  setIsOpen(false);
                  setResult("");
                  setUserSearch("");
                }}
              />
            </div>
          )}
        </div>
        <div className="side-icons-wrapper">
          <LightModeOutlinedIcon fontSize="large" />
          <MoreVertOutlinedIcon fontSize="large" />
        </div>
      </div>
      {result.length === 0 && isSearched && (
        <div style={{ height: "100vh" }}>
          <p>No results found for your search.</p>
        </div>
      )}
      {isLoading && (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress size={100} />
        </div>
      )}
      {result.length > 0 && !isSearched && (
        <div
          style={{
            backgroundColor: "#273244",
            height: "100vh",
            width: "950px",
            position: "absolute",
            zIndex: "1",
          }}
        >
          <Grid container spacing={2}>
            {result.map((item) => (
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
                    <Button size="small" className="movies-action-play-btn">
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
        </div>
      )}
    </>
  );
};

export default SearchHeader;
