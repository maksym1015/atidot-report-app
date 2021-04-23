import React from 'react';

import { Container } from './styles/styled.lib';
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
          <img className="reportLogo" src={reportLogo} alt="Atidot Report Logo"/>
        </a>
      </Container>
    </header>  
    <main>
      {props.children}
    </main>
    <footer>
      <Container align="center" justify="flex-end">
        <p className="logo-text">
          POWERED<br/>BY
        </p>
        <a href="atidot.com">
          <img className="logo" src={logo} alt="Atidot Logo"/>
        </a>
      </Container>
    </footer> 
  </>
);

export default Base;
