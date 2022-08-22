import React from "react";
import styled from "styled-components";
//
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
//
export default function MainLayout() {
  return (
    <StyleCabinet>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <Outlet />
      </div>
    </StyleCabinet>
  );
}

const StyleCabinet = styled.div`
  .d-flex {
    min-height: 120vh;
    margin-top: 64px;
   
  }
`;
