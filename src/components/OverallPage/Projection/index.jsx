import React from "react";

import { FlexContainer } from "../../styled/styled.lib";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import { title, subTitle } from "../../fakeData";
import Project from "./Project";
import Container from "../../shared/Container";

const Projection = (props) => {
  const type = props.type;
  return (
    <>
      {type === "paid" ? (
        <FlexContainer column txtCenter type='paid' className='mt-5'>
          <h3>{title[type]}</h3>
          <Project title={subTitle[type]} type={type} />
          <a href='/' className='link-style mt-2 mb-4'>
            Show Details
          </a>
        </FlexContainer>
      ) : (
        <>
          <FlexContainer align='baseline'>
            <h3>{title[type]}</h3>
            <a href='/' className='link-style'>
              Show Details
            </a>
          </FlexContainer>
          <Container>
            <LeftSide title={subTitle[type]} type={type} />
            <RightSide type={type} />
          </Container>
        </>
      )}
    </>
  );
};

export default Projection;
