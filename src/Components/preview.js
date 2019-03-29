import React from "react";
import { Card, Icon } from "semantic-ui-react";
import gallery from "../assets/gallery.svg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Preview = () => (
  <Style>
    <Link to="/gallery">
      <Card className="card" image={gallery} header="Gallery" meta="Galleryを開く" />
    </Link>
  </Style>
);

export default Preview;

const Style = styled.div`
  background: url("https://images.pexels.com/photos/234272/pexels-photo-234272.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
  padding: 3em;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .card {
    width: 300px;
    @media(max-width: 360px){
      width: 80vw;
    }
  }
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
