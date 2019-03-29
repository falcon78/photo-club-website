import React from "react";
import styled from "styled-components";
import camera from "../assets/camera.jpg";

const About = () => {
  return (
    <Style>
      <div className="left">
        <h1 className="about">&nbsp;&nbsp; About</h1>
        <img src={camera} alt="" />
      </div>
      <div className="right">
        <p>部室 : 東京電機大学千住キャンパス３号館３階 </p>
        <p>部員 : 50名</p>
        <p>主な活動として、１か月１回の撮影会。夏休みには、合宿を行います。</p>
        <p>
          毎年、学園祭(旭際)では、中間部写真部さんと合同で展示会を行います。
        </p>
        <p>
          写真部はいつでも部員募集中です!
          <br id="join" />
          カメラを持っていなくても、貸し出し用のカメラを持って、撮影してみよう!!
        </p>
      </div>
    </Style>
  );
};

const Style = styled.div`
  background-color: #232323;
  height: max-content;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
  margin: 0;
  padding: 0 20px 40px;
  color: white;
  flex-wrap: wrap;
  .right {
    height: 320px;
    width: 460px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 5em 0 0;
     
  }
  .left {
    margin: 40px 0;
  }

  img {
    width: 500px;
    height: auto;
    box-shadow: aliceblue;
  }
  @media (max-width: 560px) {
    img {
      width: 90vw;
      height: auto;
    }
  }
  @media (max-width: 992px) {
    .right {
      margin-top: 10px;
    }
    height: max-content;
  }
  .about {
    position: relative;
    margin-bottom: 30px;
    font-family: "Libre Baskerville", sans-serif;
    font-weight: bold;
  }
  .about::before {
    margin-top: 4px;
    position: absolute;
    content: "";
    width: 11px;
    height: 1.2em;
    background-color: lightblue;
    z-index: 0;
    top: -3px;
  }
  p{
  font-size: 1.1em;
  font-family:  "Sawarabi Gothic", sans-serif;
  }
`;

export default About;
