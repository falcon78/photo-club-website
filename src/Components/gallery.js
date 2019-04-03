import React from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Lightbox from "react-images";
import { Button as BTN } from "semantic-ui-react";
import { withRouter } from "react-router-dom";

const photos = [
  {
    src: "https://i.imgur.com/TaPRvmE.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/vyMdW2B.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/eTmv8vP.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/ZoomGPM.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/k5QNDDu.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/FgCSngN.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/9ibtiF0.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/6XzIaVJ.jpg",
    width: 2,
    height: 3
  },
  {
    src: "https://i.imgur.com/MrKfuBG.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/XZY2tMS.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/SgT1Ldc.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/y1XWDxs.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/22y7kfQ.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/k4cY9k7.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/uTW0H4x.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/EWuDW27.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/ddlnSOj.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/7l3lG2z.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/zv0Xglb.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/dgwEA10.jpg",
    width: 3,
    height: 2
  },
  {
    src: "https://i.imgur.com/wnAd4U5.jpg",
    width: 3,
    height: 2
  },
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
    );
  }
}

export default withRouter(GalleryPic);

const Style = styled.div`
  margin: 6em 3em 7em;
  .about2 {
    position: relative;
    font-size: 2em;
    margin: 1em 0 0em;
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
