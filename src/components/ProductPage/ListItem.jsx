import React from "react";

import {
  FlexContainer,
  Text,
  ResultValue,
  OutlineButton,
} from "../styled/styled.lib";
import Container from "../shared/Container";
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Cell } from "recharts";

const ChartComponent = (props) => {
  // const data = props.chartData;
  // console.log(data);
  return <div></div>;
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
      <Text type="title">{category.subTitle}</Text>
      {product}
    </div>
  );
};

const ListItem = (props) => {
  const item = props.value;
  const categoryList = item.category.map((item, index) => (
    <CategoryItem key={index} item={item} />
  ));
  return (
    <section>
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
