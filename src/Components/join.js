import React from "react";
import join from "../assets/join.svg";
import styled from "styled-components";

const Join = props => {
  return (
    <Style>
      <div className="left">
        <img src={join} alt="join us svg" />
      </div>
      <div className="form">
        <h1>JOIN US!</h1>
        <form>
          <input
            onChange={props.text}
            required
            value={props.input}
            placeholder="例）18NC021"
            id="number"
            type="text"
            className="validate"
          />
          <label htmlFor="number">学籍番号</label>
          <br />
          <div className={"radiobutton"}>
            <label>
              <input
                className="with-gap"
                name="group3"
                type="radio"
                checked={props.status === "検討中"}
                onChange={props.check1}
              />
              <span>検討中</span>
            </label>
            <label className={"two"}>
              <input
                className="with-gap "
                name="group3"
                type="radio"
                checked={props.status === "入部したい！"}
                onChange={props.check2}
              />
              <span>入部したい！</span>
            </label>
          </div>

          <button
            disabled={!props.input}
            onClick={props.click}
            className="waves-effect waves-light btn"
          >
            送信
          </button>
          {props.passed && <p>{props.passed}</p>}

        </form>
      </div>
    </Style>
  );
};

export default Join;

const Style = styled.div`
  .form {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 300px;
  }
  .btn {
    margin-top: 1em;
  }
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  form {
    background-color: white;
    border-radius: 10px;
    padding: 20px;
  }
  .two {
    margin-left: 10px;
  }
  .radiobutton {
    margin-top: 10px;
  }
  h1 {
    text-align: center;
    font-size: 3em;

    font-weight: bolder;
    margin-bottom: 30px;
  }
  @media (max-width: 732px) {
    h1 {
      margin-top: 30px;
    }
  }
  .left {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  div img {
    @media (max-width: 500px) {
      width: 80vw;
    }
    width: 400px;
    margin: 20px 0;
    height: auto;
    box-shadow: aliceblue;
  }

  background: transparent;
  height: max-content;
  margin: 40px;
`;
