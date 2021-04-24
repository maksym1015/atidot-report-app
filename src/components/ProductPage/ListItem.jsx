import React from 'react';

import { Container } from '../styled/styled.lib';

const ListItem = (props) => {
  const item = props.value;
  return (
    <section>
      <Container align="baseline">
        <h3>{item.title}</h3>
        <a href="/" className="link-style">Show Details</a>
      </Container>

    </section>
  )
} 

export default ListItem;