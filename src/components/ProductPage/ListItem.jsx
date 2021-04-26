import React from "react";

import {
  FlexContainer,
  Text,
  ResultValue,
  OutlineButton,
} from "../styled/styled.lib";
import Container from "../shared/Container";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const ChartComponent = (props) => {
  const data = props.chartData;

  const CustomizedLabel = ({ x, y, value }) => {
    return (
      <text x={x} y={y} dy={-4} fontSize="16" fill="#000" textAnchor="right">
        ~{value}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={170}>
      <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
        <XAxis dataKey="text" tick={{ fill: "#000" }} />
        <YAxis hide />
        <Bar dataKey="value" barSize={100} label={<CustomizedLabel />}>
          {data.map((entry, index) => (
            <Cell key={index} fill={index === 0 ? "#3384af" : "#dea831"} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
  // return <div></div>;
};

const CategoryItem = (props) => {
  const category = props.item;
  const product =
    category.type === "chart" ? (
      <ChartComponent chartData={category.chartData} />
    ) : (
      <>
        <ResultValue size="big" color="green">
          {category.value}
        </ResultValue>
        <FlexContainer>
          <i className="material-icons">highlight</i>
          <div>
            <Text type="comment" className="mt-2 mb-4">
              {category.comment}
              <a href="/" className="link-style">
                {category.distributor}
              </a>
            </Text>
            <OutlineButton>Learn More</OutlineButton>
          </div>
        </FlexContainer>
      </>
    );
  return (
    <div className="col-md-3">
      <FlexContainer column justify="space-between">
        <Text type="title" className="mb-3">
          {category.subTitle}
        </Text>
        {product}
      </FlexContainer>
    </div>
  );
};

const ListItem = (props) => {
  const item = props.value;
  const categoryList = item.category.map((item, index) => (
    <CategoryItem key={index} item={item} />
  ));
  return (
    <section className="border-line">
      <FlexContainer align="baseline">
        <h3>{item.title}</h3>
        <a href="/" className="link-style">
          Show Details
        </a>
      </FlexContainer>
      <Container>{categoryList}</Container>
    </section>
  );
};

export default ListItem;
