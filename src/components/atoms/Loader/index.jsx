import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div id="loader-container">
        <div className="loading">
          <div className="loading_circle loading_blue" />
          <div className="loading_circle loading_coral" />
          <div className="loading_circle loading_orange" />
        </div>
      </div>
  );
}

export default Loader;
