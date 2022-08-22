import React, { useEffect, useState } from "react";
import {
  IconButton,
  ImageListItem,
  Button,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Tooltip,
} from "@mui/material";
import Input from "../input/Input";
import MenuIcon from "@mui/icons-material/Menu";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import NightlightOutlinedIcon from "@mui/icons-material/NightlightOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import styled from "styled-components";

//
import { ContextFunc } from "../../context/Context";

//
export default function Navbar() {
  const { openBars, setOpenBars } = ContextFunc();

  const [fix, setFix] = useState(false);
  // const [changeScreen, setChangeScreen] = useState(false);
  const language = [
    { id: 1, name: "English", type: "eng", value: 10 },
    { id: 2, name: "简体中文", type: "chin", value: 20 },
    { id: 3, name: "Uzbek", type: "uzb", value: 30 },
  ];

  const [selectedLang, setSelectedCar] = useState({
    id: 1,
    name: "English",
    type: "eng",
    value: 10,
  });

  function getCarIndex(idkey, language) {
    for (let i = 0; i < language.length; i++) {
      if (language[i].id === idkey) {
        return i;
      }
    }
    return "";
  }

  function toFixed() {
    if (window.scrollY >= 30) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", toFixed);

  function handleOpenBarsFunc() {
    setOpenBars(!openBars);
  }

  return (
    <StyleNavbar>
      <div className={fix ? "wrapper fix" : "wrapper"}>
        <div className="left">
          <IconButton onClick={handleOpenBarsFunc} sx={{ ml: "5px" }}>
            <MenuIcon
              sx={{
                color: "rgba(40, 53, 147, 0.64)",
                width: "24px",
                height: "24px",
              }}
            />
          </IconButton>
          <div className="logo__image">
            <img
              src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9ImRlY29yYXRpb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0U4RUFGNjt9Cgkuc3Qxe2ZpbGw6dXJsKCNTVkdJRF8xXyk7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLW1pdGVybGltaXQ6MTA7fQoJLnN0MntmaWxsOnVybCgjU1ZHSURfMl8pO30KPC9zdHlsZT4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQ0My4yLDExMy43TDI4Ny44LDI0Yy0xOS41LTExLjMtNDMuNi0xMS4zLTYzLjEsMEw2OS4zLDExMy43Yy0xOS41LDExLjMtMzEuNSwzMi4xLTMxLjUsNTQuNnYxNzkuNQoJYzAsMjIuNSwxMiw0My40LDMxLjUsNTQuNmwxNTUuNCw4OS43YzE5LjUsMTEuMyw0My42LDExLjMsNjMuMSwwbDE1NS40LTg5LjdjMTkuNS0xMS4zLDMxLjUtMzIuMSwzMS41LTU0LjZWMTY4LjMKCUM0NzQuOCwxNDUuOCw0NjIuOCwxMjUsNDQzLjIsMTEzLjd6Ii8+CjxsaW5lYXJHcmFkaWVudCBpZD0iU1ZHSURfMV8iIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMzcuNDgxMiIgeTE9IjI1NiIgeDI9IjQ3NC41MTg4IiB5Mj0iMjU2Ij4KCTxzdG9wICBvZmZzZXQ9IjAiIHN0eWxlPSJzdG9wLWNvbG9yOiMyODM1OTMiLz4KCTxzdG9wICBvZmZzZXQ9IjAuMjg4NyIgc3R5bGU9InN0b3AtY29sb3I6IzI5Mzc5NSIvPgoJPHN0b3AgIG9mZnNldD0iMC4zOTI3IiBzdHlsZT0ic3RvcC1jb2xvcjojMkUzQzlDIi8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjQ2NjYiIHN0eWxlPSJzdG9wLWNvbG9yOiMzNjQ2QTciLz4KCTxzdG9wICBvZmZzZXQ9IjAuNTE2OSIgc3R5bGU9InN0b3AtY29sb3I6IzNGNTFCNSIvPgoJPHN0b3AgIG9mZnNldD0iMC41ODUxIiBzdHlsZT0ic3RvcC1jb2xvcjojM0Y1MUI1Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojM0Y1MUI1Ii8+CjwvbGluZWFyR3JhZGllbnQ+CjxwYXRoIGNsYXNzPSJzdDEiIGQ9Ik00NDMsMTExLjZMMjg3LjUsMjEuOWMtMTkuNS0xMS4zLTQzLjYtMTEuMy02My4xLDBMNjksMTExLjZjLTE5LjUsMTEuMy0zMS41LDMyLjEtMzEuNSw1NC42djE3OS41CgljMCwyMi41LDEyLDQzLjQsMzEuNSw1NC42bDE1NS40LDg5LjdjMTkuNSwxMS4zLDQzLjYsMTEuMyw2My4xLDBMNDQzLDQwMC40YzE5LjUtMTEuMywzMS41LTMyLjEsMzEuNS01NC42VjE2Ni4zCglDNDc0LjUsMTQzLjcsNDYyLjUsMTIyLjksNDQzLDExMS42eiBNNDIyLjIsMjg3LjVsLTU1LjgsOTYuNmMtMTEuMywxOS41LTMyLjEsMzEuNS01NC42LDMxLjVIMjAwLjJjLTIyLjUsMC00My40LTEyLTU0LjYtMzEuNQoJbC01NS44LTk2LjZjLTExLjMtMTkuNS0xMS4zLTQzLjYsMC02My4xbDU1LjgtOTYuNmMxMS4zLTE5LjUsMzIuMS0zMS41LDU0LjYtMzEuNWgxMTEuNWMyMi41LDAsNDMuNCwxMiw1NC42LDMxLjVsNTUuOCw5Ni42CglDNDMzLjQsMjQ0LDQzMy40LDI2OCw0MjIuMiwyODcuNXoiLz4KPGc+Cgk8Zz4KCQk8bGluZWFyR3JhZGllbnQgaWQ9IlNWR0lEXzJfIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjEzMy4xMDI0IiB5MT0iMjU4LjA4MzQiIHgyPSIzNzkuNDA1MSIgeTI9IjI1OC4wODM0Ij4KCQkJPHN0b3AgIG9mZnNldD0iMCIgc3R5bGU9InN0b3AtY29sb3I6IzI4MzU5MyIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjI4ODciIHN0eWxlPSJzdG9wLWNvbG9yOiMyOTM3OTUiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC4zOTI3IiBzdHlsZT0ic3RvcC1jb2xvcjojMkUzQzlDIi8+CgkJCTxzdG9wICBvZmZzZXQ9IjAuNDY2NiIgc3R5bGU9InN0b3AtY29sb3I6IzM2NDZBNyIvPgoJCQk8c3RvcCAgb2Zmc2V0PSIwLjUxNjkiIHN0eWxlPSJzdG9wLWNvbG9yOiMzRjUxQjUiLz4KCQkJPHN0b3AgIG9mZnNldD0iMC41ODUxIiBzdHlsZT0ic3RvcC1jb2xvcjojM0Y1MUI1Ii8+CgkJCTxzdG9wICBvZmZzZXQ9IjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMzRjUxQjUiLz4KCQk8L2xpbmVhckdyYWRpZW50PgoJCTxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik0xNzAuNCwyNTEuN2w3My41LDQ1LjRjNC4yLDIuNiw4LjksMy45LDEzLjYsMy45YzQuNywwLDkuNS0xLjMsMTMuNy0zLjlsOTYuMi01OS44CgkJCWM3LjctNC44LDEyLjMtMTMuMSwxMi4yLTIyLjJjLTAuMS05LjEtNC44LTE3LjMtMTIuNy0yMmwtOTYuMi01N2MtOC4xLTQuOC0xOC4yLTQuOC0yNi4zLDBsLTk2LjcsNTYuOQoJCQljLTguNiw1LjEtMTQuNSwxNC41LTE0LjUsMjMuNGgwLjN2NzUuMmMwLDEyLDYuMSwyMi45LDE2LjMsMjkuMmw5NC41LDU4LjRjNS4xLDMuMiwxMC45LDQuOCwxNi42LDQuOGM1LjgsMCwxMS42LTEuNiwxNi43LTQuOAoJCQlsOTYuNS02MGMzLjUtMi4yLDQuNS02LjcsMi40LTEwLjJsLTguMi0xMy4xYy0yLjItMy41LTYuNy00LjUtMTAuMi0yLjRsLTgyLjQsNTAuNmMtOS41LDUuOS0yMS42LDUuOC0zMS4xLDBsLTc0LjMtNDQuNQoJCQljLTQuNi0yLjctNy4zLTcuNy03LjItMTNsMC42LTMwLjhDMTYzLjYsMjUyLDE2Ny40LDI0OS45LDE3MC40LDI1MS43eiIvPgoJPC9nPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTMyMi41LDIyMC42bC02MC43LDM1LjhjLTMuMiwxLjktNy4zLDEuOS0xMC41LTAuMWwtNTkuMS0zNS44Yy02LjYtNC02LjYtMTMuNSwwLTE3LjVsNTkuMS0zNS44CgkJYzMuMi0yLDcuMy0yLDEwLjUtMC4xbDYwLjcsMzUuOEMzMjkuMiwyMDcsMzI5LjIsMjE2LjcsMzIyLjUsMjIwLjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="
              alt="logo"
            />
            <span className="logo__text">Enlite Prime</span>
          </div>

          <div className="left__header__icons">
            <Tooltip title="Exit full screen">
              <IconButton>
                <FullscreenIcon sx={{ width: "25px", height: "25px" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Turn Dark/Light">
              <IconButton>
                <NightlightOutlinedIcon
                  sx={{ width: "25px", height: "25px" }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Show Guide">
              <IconButton>
                <HelpOutlineOutlinedIcon
                  sx={{ width: "25px", height: "25px" }}
                />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="right">
          <div className="search__input">
            <SearchOutlinedIcon
              sx={{
                position: "absolute",
                top: "50%",
                left: "30px",
                transform: "translateY(-50%)",
                color: "#d7d7d7",
              }}
            />
            <Input />
          </div>

          <FormControl sx={{ width: "120px" }}>
            <Select value={language[getCarIndex(selectedLang.id, language)]}>
              {language.map((item) => {
                return (
                  <MenuItem key={item.id} value={item}>
                    {item.name}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#3f51b5",
              fontWeight: "700",
              textTransform: "uppercase",
              padding: " 8px 20px 8px  23px",

              color: "white",
            }}
            startIcon={<AccountCircleIcon />}
          >
            Log in
          </Button>
        </div>
      </div>
    </StyleNavbar>
  );
}

const StyleNavbar = styled.div`
  font-family: "Maven Pro", sans-serif;
  .wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 8px 10px 32px;
    background-color: #ffffff;
    transition: 0.3s linear;
    z-index: 222;
    &.fix {
      box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 50px;
      .logo__image {
        display: flex;
        align-items: center;
        gap: 10px;
        img {
          width: 30px;
          height: 30px;
        }
        .logo__text {
          font-weight: 500;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.87);
        }
      }

      &__header__icons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }
    }
    .right {
      display: inline-flex;
      align-items: center;
      gap: 20px;
      .search__input {
        position: relative;
        border-radius: 8px;
        background-color: #f2f2f2;
        padding: 8px 8px 8px 72px;
      }
      .MuiSelect-select {
        padding: 8px 8px;
        border: none !important;
        background-color: #f2f2f2;
      }
      .Mui-focused {
        outline: none !important;
      }
    }
  }
`;
