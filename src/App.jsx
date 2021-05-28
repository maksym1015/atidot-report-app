import React from "react";
// import * as auth from "./auth-provider";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/app.scss";
import AuthenticatedApp from "./authenticated-app";
// import UnauthenticatedApp from "./unauthenticated-app";

const App = () => {
  // const [authenticated, setAuthenticated] = useState(() => {
  //   const authToken = auth.getToken();
  //   if (authToken === process.env.REACT_APP_AUTH_TOKEN) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // });

  // const login = ({ username, password }) => {
  //   setAuthenticated(
  //     auth.login({
  //       username,
  //       password,
  //     })
  //   );
  // };

  // return authenticated ? (
  //   <Router>
  //     <Switch>
  //       <Route path='/' component={AuthenticatedApp} />
  //     </Switch>
  //   </Router>
  // ) : (
  //   <UnauthenticatedApp login={login} />
  // );
  return (
    <Router>
      <Switch>
        <Route path='/' component={AuthenticatedApp} />
      </Switch>
    </Router>
  );
};

export default App;
