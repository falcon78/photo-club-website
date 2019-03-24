import React from "react";
import Top from "./Components/top";
import Navigation from "./Components/navbar";
import styled from "styled-components";
import About from "./Components/About";
import GalleryPic from "./Components/gallery";
import Join from "./Components/join";

import db from "./Firebase/firebase";

class App extends React.Component {
  state = {
    number: "",
    status: undefined,
    displaySuccess: ""
  };

  onSubmit = e => {
    e.preventDefault();
    let regex = /[\d]{2}[a-zA-Z]{2}[\d]{3}/g;

    if (
      this.state.number.match(regex) &&
      this.state.number.match(regex)[0] === this.state.number
    ) {
      if (this.state.number && this.state.status) {
        db.collection("UserDetails")
          .doc("user")
          .collection("users")
          .add({
            number: this.state.number,
            status: this.state.status
          })
          .then(() => {
            this.setState({
              displaySuccess: "送信しました。ありがとうございます。",
              number: "",
              status: ""
            });
          })
          .catch(() => {
            this.setState({ displayError: "送信できませんでした" });
          });
      } else if (!this.state.status) {
        this.setState({
          displaySuccess: "選択してください。"
        });
      }
    } else {
      this.setState({
        displaySuccess: "学籍番号が正しくありません。"
      });
    }
  };

  onClick1 = () => {
    this.setState({
      status: "検討中"
    });
  };
  onClick2 = () => {
    this.setState({
      status: "入部したい！"
    });
  };

  inputHandle = e => {
    this.setState({
      number: e.target.value
    });
  };
  async fetch() {
    const docRef = db
      .collection("UserDetails")
      .doc("user")
      .collection("users");

    await docRef.get().then(snapshot => {
      snapshot.docs.forEach(data => {
        console.log(data.data());
      });
    });
  }
  /*componentDidMount() {
    this.fetch();
  }*/

  render() {
    return (
      <Main>
        <Style>
          <Navigation />
          <Top />
          <About />
          <Join
            status={this.state.status}
            input={this.state.number}
            text={this.inputHandle}
            click={this.onSubmit}
            check1={this.onClick1}
            check2={this.onClick2}
            passed={this.state.displaySuccess}
          />
          <div className="gallery">
            <div>
              <GalleryPic />
            </div>
          </div>
        </Style>
      </Main>
    );
  }
}

export default App;

const Main = styled.div``;

const Style = styled.div`
  background: url("https://images.unsplash.com/photo-1552840687-b25e05d08047?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80");

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: cover;
  position: static;
  @import url("https://fonts.googleapis.com/css?family=Montserrat");
  @import url("https://fonts.googleapis.com/css?family=Sawarabi+Gothic");
  font-family: "Montserrat", "Sawarabi Gothic", sans-serif;
  .gallery {
    padding-top: 1em;
    background-color: white;
    display: flex;
    justify-content: center;
    div {
      width: 80vw;
    }
  }
`;
