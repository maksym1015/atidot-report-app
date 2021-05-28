import React from "react";

import {
  FlexContainer,
  OutlineButton,
  CurrentStatus,
  PercentValue,
} from "../styled/styled.lib";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import { convertCurrency } from "../../utils";

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
              <PercentValue size='small'>{td[2]}%</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <FlexContainer>
          <FlexContainer align='center' className='mr-3'>
            <CurrentStatus size='small' variant={td[3] <= 0 ? "down" : "up"} />
            <PercentValue size='normal'>{td[3]}</PercentValue>
          </FlexContainer>
          <small>
            <FlexContainer align='center' className='font-size'>
              (
              <CurrentStatus
                size='small'
                variant={td[2] <= 0 ? "down" : "up"}
              />
              <PercentValue size='small'>{td[4]}%</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <FlexContainer>
          <FlexContainer align='center' className='mr-3'>
            <PercentValue size='normal'>{td[5]}</PercentValue>
          </FlexContainer>
          <small>
            <FlexContainer align='center' className='font-size'>
              (<PercentValue size='small'>{td[6]}</PercentValue>)
            </FlexContainer>
          </small>
        </FlexContainer>
      </td>
      <td>
        <PercentValue size='small'>{convertCurrency(td[7])}</PercentValue>
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
  const table = props.value;
  const tableData = props.data;
  const tableRow = tableData.map((item, index) => (
    <TableRow key={index} value={item} />
  ));

  return (
    <section>
      <FlexContainer align='baseline'>
        <h3>
          {table.title}
          <small>({table.small})</small>
        </h3>
        <a href='/' className='link-style'>
          Show Details
        </a>
      </FlexContainer>
      <Table hover responsive='lg'>
        <thead>
          <tr>
            <th className='w-20'>Name</th>
            <th>Submissions (%)</th>
            <th>Submitted premium (#)</th>
            <th>Premium Potential (%)</th>
            <th>Loss</th>
            <th>Confidence</th>
            <th></th>
          </tr>
        </thead>
        <tbody className={"tbody-back" + table.num}>{tableRow}</tbody>
      </Table>
    </section>
  );
};

export default DistributorPage;
