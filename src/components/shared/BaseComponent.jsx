import { useContext } from "react";
import { Link } from "react-router-dom";
import { Base, FlexContainer, Text } from "../styled/styled.lib";

import reportLogo from "../../assets/img/Image 6.png";
import logo from "../../assets/img/Image 7.png";
import { ReportContext } from "../../authenticated-app";
import { convertDateFormat } from "../../utils";

const BaseComponent = (props) => {
  const type = props.type;
  const contextData = useContext(ReportContext);
  const { metadata } = contextData;
  return (
    <Base>
      <header>
        <FlexContainer justify='space-between'>
          <h1 className='head-text'>
            {metadata.carrier} Weekly Predictive <br />
            Performance Report
          </h1>
          <FlexContainer column>
            <Link to='/'>
              <img
                className='reportLogo'
                src={reportLogo}
                alt='Atidot Report Logo'
              />
            </Link>
            <FlexContainer justify='space-around' className='navmenu mt-2'>
              <ul>
                <li>
                  <Link to='/'>Page 1</Link>
                </li>
                <li>
                  <Link to='/products'>Page 2</Link>
                </li>
                <li>
                  <Link to='/distributors'>Page 3</Link>
                </li>
              </ul>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </header>
      <main>
        <Text type='periodT'>{convertDateFormat(metadata.date_end)}</Text>
        {props.children}
      </main>
      <footer className='d-flex justify-content-between'>
        <FlexContainer align='center'>
          <div className='exclamation'></div>
          <ul className='footer-list'>
            <li className='footer-text'>
              For the purpose of this report, {metadata.carrier} will be called
              "Carrier".
            </li>
            {type === "distributor" ? (
              <>
                <li className='footer-text'>
                  The 'Prediction Score' is an accuracy score for the next 4
                  weeks.
                </li>
                <li className='footer-text'>
                  This data is an estimation based on analysis of the
                  distributors’ predictive performance compared to the industry
                  and their potential LTV, Underinsurance, Upsell Opportunities,
                  Likelihood to Place, Cycle Time Loyalty, and Lapse
                </li>
              </>
            ) : (
              <li className='footer-text'>
                Benchmark is avg. performance of top-10 insurers excluding{" "}
                {metadata.carrier} on iPipeline's network.
              </li>
            )}
          </ul>
        </FlexContainer>
        <FlexContainer align='center' justify='flex-end'>
          <p className='logo-text'>
            POWERED
            <br />
            BY
          </p>
          <a href='https://atidot.com'>
            <img className='logo' src={logo} alt='Atidot Logo' />
          </a>
        </FlexContainer>
      </footer>
    </Base>
  );
};

export default BaseComponent;
