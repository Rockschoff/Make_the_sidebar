import "./styles.css";
import React from "react";
// #79155B
// #C23373
// #F6635C
// #FFBA86
export default function App() {
  var [sideOpen, setSideOpen] = React.useState(false);

  function handleClick(event) {
    var container = document.getElementById("container");

    if (!sideOpen) {
      container.style.setProperty("grid-template-columns", "1.5fr 5fr");
    } else {
      container.style.setProperty("grid-template-columns", "0fr 5fr");
    }
    // console.log(container.style.getPropertyValue("grid-template-columns"));
    setSideOpen(!sideOpen);
  }
  return (
    <div className="container" id="container">
      <div className="navbar">
        <h1 onClick={handleClick}>LOGO</h1>
      </div>
      <div className="banner">
        <h2>
          OPEN <br /> the side bar, <br /> click LOGO
        </h2>
      </div>
      <div className="sidebar" id="sidebar">
        <h2>Menu</h2>
        <p>Google</p>
        <p>Yahoo</p>
        <p>Meta</p>
      </div>
    </div>
  );
}
