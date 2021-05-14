import React, { useContext } from "react";

import {
  FlexContainer,
  OutlineButton,
  CurrentStatus,
  PercentValue,
} from "../styled/styled.lib";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import { ReportContext } from "../../authenticated-app";

const TableRow = (props) => {
  const td = props.value;
  const progressVariant =
    td[8] >= 4
      ? "success"
      : 2 <= td[8] && td[8] < 4
      ? "warning"
      : td[8] < 2 && "danger";
  return (
    <tr>
      <td>
        <PercentValue size='small'>{td[0]}</PercentValue>
      </td>
      <td>
        <FlexContainer>
          <FlexContainer align='center' className='mr-3'>
            <CurrentStatus size='small' variant={td[1] <= 0 ? "down" : "up"} />
            <PercentValue size='normal'>{td[1]}</PercentValue>
          </FlexContainer>
          <small>
            <FlexContainer align='center' className='font-size'>
              (
              <CurrentStatus
                size='small'
                variant={td[2] <= 0 ? "down" : "up"}
              />
              <PercentValue size='small'>{td[2]}</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <PercentValue size='normal' className='mr-3'>
          {td[3]}
        </PercentValue>
        <PercentValue size='small'>({td[4]})</PercentValue>
      </td>
      <td>
        <FlexContainer>
          <FlexContainer align='center' className='mr-3'>
            <CurrentStatus size='small' variant={td[5] <= 0 ? "down" : "up"} />
            <PercentValue size='normal'>{td[5]}</PercentValue>
          </FlexContainer>
          <small>
            <FlexContainer align='center' className='font-size'>
              (
              <CurrentStatus
                size='small'
                variant={td[6] <= 0 ? "down" : "up"}
              />
              <PercentValue size='small'>{td[6]}</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <PercentValue size='small'>{td[7]}</PercentValue>
      </td>
      <td className='custom-width'>
        <ProgressBar variant={progressVariant} now={td[8]} max='5' />
      </td>
      <td>
        <OutlineButton>Learn More</OutlineButton>
      </td>
    </tr>
  );
};

const DistributorPage = (props) => {
  const item = props.value;
  const { file_1 } = useContext(ReportContext);

  let agency = [],
    subPl = [],
    subInd = [],
    premPl = [],
    premInd = [],
    potPl = [],
    potInd = [],
    loss = [],
    confidence = [];

  for (const item of Object.entries(file_1.agency)) {
    item[1] != null && agency.push(item[1]);
  }
  for (const item of Object.entries(file_1.perc_PL_sub)) {
    item[1] != null && subPl.push(item[1]);
  }
  for (const item of Object.entries(file_1.perc_IND_sub)) {
    item[1] != null && subInd.push(item[1]);
  }
  for (const item of Object.entries(file_1.perc_PL_sub_prem)) {
    item[1] != null && premPl.push(item[1]);
  }
  for (const item of Object.entries(file_1.perc_IND_sub_prem)) {
    item[1] != null && premInd.push(item[1]);
  }
  for (const item of Object.entries(file_1.perc_PL_prem_pot)) {
    item[1] != null && potPl.push(item[1]);
  }
  for (const item of Object.entries(file_1.perc_IND_prem_pot)) {
    item[1] != null && potInd.push(item[1]);
  }
  for (const item of Object.entries(file_1.loss_IND_to_PL)) {
    item[1] != null && loss.push(item[1]);
  }
  for (const item of Object.entries(file_1.Prediction_score)) {
    item[1] != null && confidence.push(item[1]);
  }
  const len = agency.length;
  let tableData = [];
  for (let i = 0; i < len; i++) {
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
  const tableRow = tableData.map((item, index) => (
    <TableRow key={index} value={item} />
  ));

  return (
    <section>
      <FlexContainer align='baseline'>
        <h3>
          {item.title}
          <small>({item.small})</small>
        </h3>
        <a href='/' className='link-style'>
          Show Details
        </a>
      </FlexContainer>
      <Table hover responsive='lg'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submissions %</th>
            <th>Submitted premium</th>
            <th>Premium Potential</th>
            <th>Loss</th>
            <th>Confidence</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={"tbody-back" + item.num}>{tableRow}</tbody>
      </Table>
    </section>
  );
};

export default DistributorPage;
