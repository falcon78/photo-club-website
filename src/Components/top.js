import React from "react";
import styled from "styled-components";
import { Animated } from "react-animated-css";
import { Button as BTN } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Style>
      <div
        class="cont"
        style={{
          backgroundImage: "url(" + require("../assets/main.jpg") + ")"
        }}
      >
        <Animated animationIn="fadeInUp">
          <div className="headercontainer">
            <h2>TDU PHOTO CLUB</h2>
            <div class="buttons">
              <a href="#join">
                <BTN>&nbsp;&nbsp;&nbsp;&nbsp;Join&nbsp;&nbsp;&nbsp;&nbsp;</BTN>
              </a>
              <Link to="/gallery">
                <BTN>Gallery</BTN>
              </Link>
            </div>
          </div>
        </Animated>
      </div>
    </Style>
  );
};

export default Top;

const Style = styled.div`
  padding: 0;
  margin: 0;
  font-family: "Libre Baskerville", sans-serif;
  .buttons{
    display: flex;
    justify-content: center;
  }
  .cont {
    display: flex;
    justify-content: center;
    align-items: center;

    background: url("https://i.imgur.com/Cyt0PY6.jpg");
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    position: static;
  }
  h2 {
    color: white;
    font-size: 100%;
    text-align: center;
    margin: 10px;
    font-weight: bold;
  }

  span {
    font-size: 16px;
  }
  .headercontainer {
    font-size: 9.5vw;

    display: flex;
    flex-direction: column;
  }
`;
