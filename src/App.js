import React from "react";
import Top from "./Components/top";
import Navigation from "./Components/navbar";
import styled from "styled-components";
import About from "./Components/About";
import Join from "./Components/join";
import Footer from "./Components/footer";
import db from "./Firebase/firebase";
import Preview from "./Components/preview";

class App extends React.Component {
  state = {
    number: "",
    status: undefined,
    displaySuccess: "",
    isCorrect: false
  };

  regex = /[\d]{2}[a-zA-Z]{2}[\d]{3}/g;

  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.number.match(this.regex) &&
      this.state.number.match(this.regex)[0] === this.state.number
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
            this.setState({ displaySuccess: "送信できませんでした" });
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

          <Preview />

          <Footer />
        </Style>
      </Main>
    );
  }
}

export default App;

const Main = styled.div``;

const Style = styled.div`
  position: static;
  @import url("https://fonts.googleapis.com/css?family=Libre+Baskerville");
  @import url("https://fonts.googleapis.com/css?family=Sawarabi+Gothic");
  @import url("https://fonts.googleapis.com/css?family=Roboto");
  font-family: "Roboto", "Libre Baskerville", "Sawarabi Gothic", sans-serif;
  .gallery {
    padding-top: 1em;
    background-color: white;
    display: flex;
    justify-content: center;
  }
`;
