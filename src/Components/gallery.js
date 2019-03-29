import React from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { Button as BTN } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const photos = [
  {
    src:
      "https://images.unsplash.com/photo-1511120727971-4eb2d2816935?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    width: 4,
    height: 3
  },

  {
    src:
      "https://images.unsplash.com/photo-1553096537-82ab4c0ae230?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=632&q=80",
    width: 3,
    height: 4
  },
  {
    src:
      "https://images.unsplash.com/photo-1516472151647-6900f65d8975?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    width: 3,
    height: 4
  },
  {
    src:
      "https://images.unsplash.com/photo-1553336972-e104649d0554?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src:
      "https://images.unsplash.com/photo-1553136838-4daa421120b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    width: 4,
    height: 3
  },
  {
    src:
      "https://images.unsplash.com/photo-1553176772-493c732932da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    width: 4,
    height: 3
  }
];

class GalleryPic extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  render() {
    return (
      <div>
        <Style>
          <p className="about">&nbsp;&nbsp;&nbsp;&nbsp;Gallery</p>

          <Gallery photos={photos} onClick={this.openLightbox} />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />
          <div className={"about2"}>
            <BTN
              fluid
              secondary
              onClick={() => {
                this.props.history.push("/");
              }}
            >
              戻る
            </BTN>
          </div>
        </Style>
      </div>
    );
  }
}

export default withRouter(GalleryPic);

const Style = styled.div`
  margin: 6em 3em 3em;
  .about2 {
    position: relative;
    font-size: 2em;
    margin: 1em 0 2em;
    
  }
  .backButton {
    width: 100vw;
    display: flex;
    justify-content: center;
  }
  p {
    font-family: "Libre Baskerville", sans-serif;
    font-weight: bold;
  }
  .about {
    position: relative;
    font-size: 2em;
    margin-bottom: 20px;
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
`;
