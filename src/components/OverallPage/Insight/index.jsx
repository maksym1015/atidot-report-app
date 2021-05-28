import { useContext } from "react";
import { ReportContext } from "../../../authenticated-app";
import { convertDateFormat } from "../../../utils";
import { Text, Button } from "../../styled/styled.lib";

const Insight = ({ value }) => {
  const contextData = useContext(ReportContext);
  const { metadata } = contextData;

  return (
    <div className='col-md-4 mt-3'>
      <Text type='period'>{convertDateFormat(metadata.date_end)}</Text>
      <Text type='content'>{value[0]}</Text>
      <Text type='comment' className='mt-3'>
        {value[1]}
        {/* <a href="/" className="link-style">Distributor A</a> 
          has positive growth potential 
        (<PercentValue variant="up">50%</PercentValue>) in 
        <a href="/" className="link-style">Term</a> submission for&nbsp; 
        <a href="/" className="link-style">36-40 y/o male</a> */}
      </Text>
      <Button className='mt-4'>Learn more</Button>
    </div>
  );
};

export default Insight;
