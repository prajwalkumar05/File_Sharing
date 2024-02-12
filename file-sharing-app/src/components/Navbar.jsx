import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "../css/navbar.css";
export default function Navbar() {
  const Linkto=()=>{
    window.open("https://github.com/Varshithvhegde/FreeShare","_blank");
  }
  return (
    <AppBar position="static" className="appBar">
      <Toolbar>
        <Typography variant="h4" className="Navtext">
          FileShare
        </Typography>
        {/* Add additional navigation items here */}
      </Toolbar>
    </AppBar>
  );
}
