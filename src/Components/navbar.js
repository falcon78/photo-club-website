import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon_twitter from "../assets/icon_twitter.svg";
import icon_instagram from "../assets/icon_instagram.svg";
import logo from "../assets/logo.svg";
import github from "../assets/icon_github.svg";

const Navigation = () => {
  return (
    <Style>
      <div className="navi   grey darken-4">
        <div className="link">
          <Link to="/">
            <img className={"logo"} src={logo} alt="" />
          </Link>
        </div>

        <ul>
          <li>
            <a href="https://www.instagram.com/tdu_2photo/" target="_blank" rel="noreferrer noopener">
              <img src={icon_instagram} alt="" />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/dendai_2ndphoto" target="_blank" rel="noreferrer noopener">
              <img className="twitter" src={icon_twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="https://github.com/tduphotoclub" target="_blank" rel="noreferrer noopener">
              <img className="github" src={github} alt="" />
            </a>
          </li>
        </ul>
      </div>
    </Style>
  );
};

export default Navigation;

const Style = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  img {
    height: 22px;
  }
  .twitter{
    height: 21px;
  }
  .github {
    height: 26px;
  }
  .logo {
    height: 30px;
  }
  h2 {
    display: inline;
  }
  
  .navi {
    p {
      display: inline;
      font-size: 1.5em;
    }
    display: flex;
    justify-content: space-between;

    width: 100vw;
    max-width: 1800px;

    padding: 0 10px;
    align-items: center;
  }

  ul {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: space-around;
    width: 130px;
  }
  
  z-index: 999;
  font-family: "Montserrat", "Sawarabi Gothic", sans-serif;
  position: fixed;
  top: 0;
  width: 100vw;

  font-weight: normal;
  background: #212121;
`;
