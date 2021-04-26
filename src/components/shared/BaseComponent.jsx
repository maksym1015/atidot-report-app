import { Link } from "react-router-dom";
import { FlexContainer } from "../styled/styled.lib";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/scss/app.scss";
import reportLogo from "../../assets/img/Image 6.png";
import logo from "../../assets/img/Image 7.png";

const BaseComponent = (props) => (
  <>
    <header>
      <FlexContainer justify="space-between">
        <h1>
          Weekly Predictive <br />
          Performance Report
        </h1>
        <Link to="/">
          <img
            className="reportLogo"
            src={reportLogo}
            alt="Atidot Report Logo"
          />
        </Link>
      </FlexContainer>
    </header>
    <main>{props.children}</main>
    <footer>
      <FlexContainer align="center" justify="flex-end">
        <p className="logo-text">
          POWERED
          <br />
          BY
        </p>
        <Link to="https://atidot.com">
          <img className="logo" src={logo} alt="Atidot Logo" />
        </Link>
      </FlexContainer>
    </footer>
  </>
);

export default BaseComponent;
