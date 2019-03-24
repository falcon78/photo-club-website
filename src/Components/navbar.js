import React from "react";

import styled from "styled-components";

const Navigation = () => {
  return (
    <Style>
      <div className="navi   grey darken-4">
        <h5>二部写真部</h5>
        <ul>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <p className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <p className="fab fa-github" />
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <p className="fab fa-twitter-square" />
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
