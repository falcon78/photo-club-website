import React from "react";
import styled from "styled-components";
import { Animated } from "react-animated-css";
import { Button as BTN } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <Style>
      <div
        className="cont"
        style={{
          backgroundImage: "url(" + require("../assets/main.jpg") + ")"
        }}
      >
        <Animated animationIn="fadeInUp">
          <div className="headercontainer">
            <h2>TDU PHOTO CLUB</h2>
            <div className="buttons">
              <a href="#join">
                <BTN>&nbsp;Join&nbsp;</BTN>
              </a>
              <Link to="/gallery">
                <BTN secondary>Gallery</BTN>
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
  .buttons {
    display: flex;
    justify-content: center;
  }
  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
