import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon_twitter from "../assets/icon_twitter.svg";
import icon_instagram from "../assets/icon_instagram.svg";

const Navigation = () => {
  return (
    <Style>
      <div className="navi   grey darken-4">
        <div className="link">
          <Link to="/">
            <h2>二部写真部</h2>
          </Link>
        </div>

        <ul>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <img src={icon_instagram} alt="" />
            </a>
          </li>

          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <img className="twitter" src={icon_twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <p className="fab fa-github" />
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
    height: 20px;
  }

  h2 {
    display: inline;
  }
  link {
    height: max-content;
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
    ul {
      text-decoration: none;
      color: white;
    }
    ul:link {
      color: white;
    }
    padding: 0 10px;
    align-items: center;
  }

  ul {
    display: flex;
  }
  a {
    color: white;
    margin-right: 20px;
  }
  z-index: 999;
  font-family: "Montserrat", "Sawarabi Gothic", sans-serif;
  position: fixed;
  top: 0;
  width: 100vw;
  color: white;
  font-weight: normal;
  background: #212121;
`;
