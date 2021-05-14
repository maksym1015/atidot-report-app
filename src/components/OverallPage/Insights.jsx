import React from "react";
import Insight from "./Insight";
import Container from "../shared/Container";

const Insights = ({ type, value }) => {
  let valuePair = [
    [value[0], value[1]],
    [value[2], value[3]],
    [value[4], value[5]],
  ];
  return (
    <section>
      <h2>
        <i className='material-icons'>highlight</i>
        {type} Insights
      </h2>
      <Container>
        {valuePair.map((item, index) => (
          <Insight key={index} value={item} />
        ))}
      </Container>
    </section>
  );
};

export default Insights;
