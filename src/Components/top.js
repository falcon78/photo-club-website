import React from "react";
import styled from "styled-components";
import { Animated } from "react-animated-css";

const Top = () => {
  return (
    <Style>
      <div
        style={{
          backgroundImage: "url(" + require("../assets/main.jpg") + ")"
        }}
      >
        <Animated animationIn="fadeInUp">
          <h1>
            TDU PHOTO CLUB<span>2</span>
          </h1>
        </Animated>
      </div>
    </Style>
  );
};

export default Top;

const Style = styled.div`
  padding: 0;
  margin: 0;
  font-family: "Montserrat", sans-serif;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    //height: 100vh;
    background: url(require("/src/assets/main.jpg"));

    height: 100vh;

    /* Create the parallax scrolling effect */
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-size: cover;
    position: static;
  }
  h1 {
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: 4em;
    letter-spacing: 10px;
  }

  span {
    font-size: 16px;
  }
`;
