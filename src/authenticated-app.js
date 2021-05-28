import React, {
  Suspense,
  lazy,
  useEffect,
  useState,
  createContext,
} from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import axios from "axios";
import Loading from "./components/shared/Loading";
import https from "https";

const Overall = lazy(() => import("./pages/Overall"));
const Products = lazy(() => import("./pages/Products"));
const Distributors = lazy(() => import("./pages/Distributors"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const ReportContext = createContext();

const endPoint = process.env.REACT_APP_API_BASE_URL;
const DEFAULT_RUN_ID = "292dc671-ae5c-445b-a120-e608623a3761";
const DEFAULT_DATE = "20210513";

const AuthenticatedApp = () => {
  const [reportData, setData] = useState(null);

  // get RunID from query params
  const search = useLocation().search;
  const RunID = new URLSearchParams(search).get("RunID");
  const DateParam = new URLSearchParams(search).get("Date");

  useEffect(() => {
    // run_id is default when RunID doesn't exist
    const run_id = RunID ?? DEFAULT_RUN_ID;
    const date = DateParam ?? DEFAULT_DATE;
    axios
      .post(
        endPoint,
        {
          date,
          run_id,
        },
        {
          httpsAgent: new https.Agent({
            rejectUnauthorized: false,
          }),
        }
      )
      .then(
        (res) => {
          setData(res.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [RunID, DateParam]);

  return (
    reportData && (
      <ReportContext.Provider value={reportData}>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path='/products' component={Products} />
            <Route path='/distributors' component={Distributors} />
            <Route exact path='/' component={Overall} />
            <Route path='*' component={NotFound} />
          </Switch>
        </Suspense>
      </ReportContext.Provider>
    )
  );
};

export default AuthenticatedApp;
