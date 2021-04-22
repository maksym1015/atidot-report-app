import React from 'react';

import { Container } from './styled.lib';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/app.scss';
import reportLogo from '../assets/img/Image 6.png';
import logo from '../assets/img/Image 7.png';

const Base = (props) => (
  <>
    <header>
      <Container justify="space-between">
          <h1>Weekly Predictive <br/>Performance Report</h1>
          <a href="/">
            <img className="reportLogo" src={reportLogo} srcSet="img/image-6@2x.png 2x, img/image-6@3x.png 3x" alt="Atidot Report Logo"/>
          </a>
      </Container>
    </header>  
    <main>
      {props.children}
    </main>
    <footer>
      <div className="d-flex justify-content-end align-items-center">
        <p className="logo-text">
          POWERED<br/>BY
        </p>
        <a href="atidot.com">
          <img className="logo" src={logo} srcSet="img/image-7@2x.png 2x, img/image-7@3x.png 3x" alt="Atidot Logo"/>
        </a>
      </div>
    </footer> 
  </>
);

export default Base;
