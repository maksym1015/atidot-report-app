import React, { useContext } from "react";

import BaseComponent from "../components/shared/BaseComponent";
import DistributorPage from "../components/DistributorPage";
import { distributors } from "../components/fakeData";
import { ReportContext } from "../authenticated-app";

const DistributorList = (props) =>
  distributors.map((table, index) => {
    let agency = [],
      subPl = [],
      subInd = [],
      premPl = [],
      premInd = [],
      potPl = [],
      potInd = [],
      loss = [],
      confidence = [];

    for (const item of Object.entries(props.file.agency)) {
      item[1] != null && agency.push(item[1].slice(2, item[1].length - 2));
    }
    for (const item of Object.entries(props.file.perc_PL_sub)) {
      item[1] != null && subPl.push(item[1]);
    }
    for (const item of Object.entries(props.file.perc_IND_sub)) {
      item[1] != null && subInd.push(item[1]);
    }
    for (const item of Object.entries(props.file.perc_PL_sub_prem)) {
      item[1] != null && premPl.push(item[1]);
    }
    for (const item of Object.entries(props.file.perc_IND_sub_prem)) {
      item[1] != null && premInd.push(item[1]);
    }
    for (const item of Object.entries(props.file.perc_PL_prem_pot)) {
      item[1] != null && potPl.push(item[1]);
    }
    for (const item of Object.entries(props.file.perc_IND_prem_pot)) {
      item[1] != null && potInd.push(item[1]);
    }
    for (const item of Object.entries(props.file.loss_IND_to_PL)) {
      item[1] != null && loss.push(item[1]);
    }
    for (const item of Object.entries(props.file.Prediction_score)) {
      item[1] != null && confidence.push(item[1]);
    }
    let tableData = [];
    if (table.num === 1) {
      for (let i = 0; i <= 4; i++) {
        tableData.push([
          agency[i],
          subPl[i],
          subInd[i],
          premPl[i],
          premInd[i],
          potPl[i],
          potInd[i],
          loss[i],
          confidence[i],
        ]);
      }
    } else if (table.num === 2) {
      for (let i = 5; i <= 8; i++) {
        tableData.push([
          agency[i],
          subPl[i],
          subInd[i],
          premPl[i],
          premInd[i],
          potPl[i],
          potInd[i],
          loss[i],
          confidence[i],
        ]);
      }
    } else {
      for (let i = 9; i <= 13; i++) {
        tableData.push([
          agency[i],
          subPl[i],
          subInd[i],
          premPl[i],
          premInd[i],
          potPl[i],
          potInd[i],
          loss[i],
          confidence[i],
        ]);
      }
    }
    return <DistributorPage key={index} value={table} data={tableData} />;
  });

const Distributors = () => {
  const contextData = useContext(ReportContext);
  const file_1 = contextData["file_1_Pacific Life"];

  return (
    <BaseComponent type='distributor'>
      <h2>By Distributors</h2>
      <DistributorList file={file_1} />
    </BaseComponent>
  );
};

export default Distributors;
