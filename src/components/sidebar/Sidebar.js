import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ContextFunc } from "../../context/Context";
import { useNavigate, useLocation } from "react-router-dom";

///
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import route from "./static";
import { Button, IconButton, Typography } from "@mui/material";
//
export default function Sidebar() {
  const { openBars, setOpenBars } = ContextFunc();
  const [currentId, setCurrentId] = useState(1);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  function setCurrentActive(idkey, url) {
    setCurrentId(idkey);
    navigate(url);
  }

  function routeInnerSectionPage(url) {
    navigate(url);
  }

  return (
    <StyleSidebar>
      <motion.div
        animate={{ maxWidth: openBars ? "110px" : "330px" }}
        className="sidebar"
      >
        <div className="left">
          <Button>
            <AccountCircleIcon sx={{ width: "42px", height: "42px" }} />
          </Button>
          {route.map((item) => {
            const { id, path, name, icon } = item;
            return (
              <Button
                key={id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  pr: "20px",
                  color: currentId === id ? "#3F51B5" : "rgba(0, 0, 0, 0.24)",
                  borderLeft: currentId === id ? "5px solid" : "",
                }}
                onClick={() => setCurrentActive(id, path)}
              >
                {icon}
                <Typography
                  variant="h3"
                  component="div"
                  sx={{
                    fontSize: "10px",
                    fontWeight: "700",
                    mt: " 5px",
                    color: "rgba(0, 0, 0, 0.54)",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {name}
                </Typography>
              </Button>
            );
          })}
        </div>
        <div
          className="right"
          style={openBars ? { display: "none" } : { display: "initial" }}
        >
          {route[0].section.map((item) => {
            return (
              <div className="section" key={item.id}>
                <Typography
                  variant="p"
                  component="p"
                  sx={{
                    marginTop: "20px",
                    pr: "16px",
                    color: "#3F51B5",
                    fontSize: "0.875rem",
                    fontWeight: "600",
                  }}
                >
                  {item.type}
                </Typography>
                <div className="inner__section">
                  {item.list.map((every) => {
                    return (
                      <Button
                        key={every.id}
                        onClick={() => routeInnerSectionPage(every.path)}
                        startIcon={every.innericon}
                        sx={{
                          whiteSpace: "nowrap",
                          width: "100%",
                          display: "flex",
                          justifyContent: "flex-start",
                          pt: "10px",
                          pb: "10px",
                          pr: "16px",
                          mt: "8px",
                          fontWeight: 400,
                          fontSize: "12px",
                          lineHeight: 1.43,
                          textTransform: "uppercase !important",
                          backgroundColor:
                            every.path === pathname ? "#E1E6FE" : "initial",
                          color: "rgba(122, 122, 122, 0.87)",
                          ":hover": {
                            backgroundColor:
                              every.path === pathname
                                ? "#E1E6FE"
                                : "rgba(239, 239, 239, 0.87)",
                          },
                        }}
                      >
                        {every.typeName}
                      </Button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </StyleSidebar>
  );
}

const StyleSidebar = styled.div`
  position: fixed;
  left: 0;
  top: 65px;
  font-family: "Maven Pro", sans-serif;
  .sidebar {
    height: 100vh;
    display: flex;
    background-color: #fcfcfe;
    .left {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .user__info {
        display: flex;
        align-items: center;
      }
    }
    .right {
      padding: 0 16px 0 8px;
    }
  }
`;
