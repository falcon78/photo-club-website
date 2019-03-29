import React from "react";
import styled from "styled-components";
import {Button} from 'semantic-ui-react'

const Footer = () => {
  return (
    <Style>
      <footer className="page-footer grey darken-4">
        <div className="footer-copyright">
          <div className="container">
            <span>© 2019 TDU PHOTO CLUB 2</span>
            <div className={"links"}>

              <a
                className="grey-text text-lighten-4 right"
                href="https://github.com/tduphotoclub"
                target="_blank"
              >
                <Button primary>Github</Button>
              </a>

              <a
                className="grey-text text-lighten-4 right"
                href="https://www.dendai.ac.jp/"
                target="_blank"
              >
                <Button  >東京電機大学</Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </Style>
  );
};

export default Footer;

const Style = styled.div`
  font-family: "Sawarabi Gothic", serif;
  margin-top: 3em;
  span{
    margin: 5px;
  }
  .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
   
  }
  .page-footer{
    padding: 10px;
  }
  .links{
    padding: 0;
    margin: 0;
    display: flex;
    
    align-items: center;
    
  }
  a{
  color: black;
  font-weight: bold;
  }
`;
