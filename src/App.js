import React from "react";
import Top from "./Components/top";
import Navigation from "./Components/navbar";
import styled from "styled-components";
import About from "./Components/About";
import Join from "./Components/join";
import Footer from "./Components/footer";
import db from "./Firebase/firebase";
import Preview from "./Components/preview";
import firebase from "firebase/app";

class App extends React.Component {
  initialState = {
    number: "",
    status: undefined,
    displaySuccess: "",
    sending : false,
  };
  state = this.initialState;

  regex = /[\d]{2}[a-zA-Z]{2}[\d]{3}/g;
  docRef = db
    .collection("UserDetails")
    .doc("users")
    .collection("users");

  onSubmit = e => {
    e.preventDefault();

    if (
      this.state.number.match(this.regex) &&
      this.state.number.match(this.regex)[0] === this.state.number
    ) {
      if (this.state.number && this.state.status) {
        this.setState({
          sending: true
        })
        this.docRef
          .where("number", "==", this.state.number.toUpperCase())
          .get()
          .then(snapshot => {
            if (snapshot.empty) {
              db.collection("UserDetails")
                .doc("users")
                .collection("users")
                .add({
                  date: firebase.firestore.FieldValue.serverTimestamp(),
                  number: this.state.number.toUpperCase(),
                  status: this.state.status,
                  updateCount: 0
                })
                .then(() => {
                  this.setState(this.initialState);
                  this.setState({
                    displaySuccess: "送信しました。ありがとうございます。"
                  });
                })
                .catch(() => {
                  this.setState({ displaySuccess: "送信できませんでした" });
                });
            } else {
              this.setState({
                sending: true
              })
              snapshot.docs.forEach(data => {
                if (data.data().number === this.state.number.toUpperCase()) {
                  db.collection("UserDetails")
                    .doc("users")
                    .collection("users")
                    .doc(data.id)
                    .update({
                      date: firebase.firestore.FieldValue.serverTimestamp(),
                      status: this.state.status,
                      updateCount: data.data().updateCount + 1
                    })
                    .then(() => {
                      this.setState(this.initialState);
                      this.setState({
                        displaySuccess: "更新しました。ありがとうございます。"
                      });
                    });
                }
              });
            }
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
            sending ={this.state.sending}
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
