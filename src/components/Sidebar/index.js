import React from "react";
import ProfileImg from "../../assests/dummy-profile.png";
import "./sidebar.css";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import AirplayIcon from "@mui/icons-material/Airplay";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  const headerLinks = [
    { name: "Discover", icon: <SearchIcon /> },
    { name: "Playlist", icon: <PlaylistPlayIcon /> },
    { name: "Movie", icon: <LiveTvIcon /> },
    { name: "TV Shows", icon: <AirplayIcon /> },
    { name: "My List", icon: <FormatListBulletedIcon /> },
  ];
  return (
    <>
      <div className="sidebarWrapper">
        <img className="profileImage" src={ProfileImg} alt="Profile_image" />
        <p className="usernameText">Eric Hoffman</p>
        <div className="line-4">
          <hr />
        </div>
      </div>
      <div className="main-nav-container">
        {headerLinks.map((item) => (
          <div
            key={item.name}
            className={
              item?.name !== "Discover" ? "nav-wrapper" : "nav-wrapper blue"
            }
          >
            <span>{item.icon}</span>
            <span className="list-name">{item?.name}</span>
          </div>
        ))}
        <div className="line-4" style={{ marginLeft: "-70px" }}>
          <hr />
        </div>
        <div className="nav-wrapper">
          <span>
            <WatchLaterIcon />
          </span>
          <span className="list-name">Watch later</span>
        </div>
        <div className="nav-wrapper">
          <span>
            <FavoriteBorderIcon />
          </span>
          <span className="list-name">Recomended</span>
        </div>
        <div className="line-4" style={{ marginLeft: "-70px" }}>
          <hr />
        </div>
        <div className="nav-wrapper">
          <span>
            <SettingsIcon />
          </span>
          <span className="list-name">Settings</span>
        </div>
        <div className="nav-wrapper" style={{ marginBottom: "0px" }}>
          <span>
            <LogoutIcon />
          </span>
          <span className="list-name">Logout</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
