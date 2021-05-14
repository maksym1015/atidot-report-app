import React, {
  Suspense,
  lazy,
  useEffect,
  useState,
  createContext,
} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Loading from "./components/shared/Loading";
import https from "https";

const Overall = lazy(() => import("./pages/Overall"));
const Products = lazy(() => import("./pages/Products"));
const Distributors = lazy(() => import("./pages/Distributors"));
const NotFound = lazy(() => import("./pages/NotFound"));

const endPoint = process.env.REACT_APP_API_BASE_URL;
const runID = {
  date: "20210505",
  run_id: "982a8ce5-6a2c-4a8b-bd16-390fc2f2e231",
};

export const ReportContext = createContext();

const AuthenticatedApp = () => {
  const [reportData, setData] = useState(null);
  useEffect(() => {
    axios
      .post(endPoint, runID, {
        httpsAgent: new https.Agent({
          rejectUnauthorized: false,
        }),
      })
      .then(
        (res) => {
          setData(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, []);

  return (
    reportData && (
      <ReportContext.Provider value={reportData}>
        <Router>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/' component={Overall} />
              <Route path='/products' component={Products} />
              <Route path='/distributors' component={Distributors} />
              <Route path='*' component={NotFound} />
            </Switch>
          </Suspense>
        </Router>
      </ReportContext.Provider>
    )
  );
};

export default AuthenticatedApp;
