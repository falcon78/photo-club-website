import React from "react";
import join from "../assets/join.svg";
import styled from "styled-components";
import { Loader, Dimmer } from "semantic-ui-react";

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
            送信 &nbsp;
            <i className=" far fa-paper-plane" />
          </button>
          &nbsp;&nbsp;
          <div className="loader">
          <Loader inline active={props.sending} />
          </div>
          {props.passed && <p>{props.passed}</p>}
        </form>
      </div>
    </Style>
  );
};

export default Join;

const Style = styled.div`
  background: url("https://images.unsplash.com/photo-1552840687-b25e05d08047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  p {
    margin-top: 1em;
  }
  .form {
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: max-content;
  }
  .btn {
    margin-top: 1em;
  }
  font-weight: bold;
  display: flex;
  justify-content: space-around;
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
      margin: 10px 0;
    }
  }
  .loader{
    margin-top: 1em;
    
    
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
  padding: 40px;
  height: max-content;
  width: 100vw;
`;
