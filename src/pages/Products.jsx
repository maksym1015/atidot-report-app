import React from 'react';

import BaseComponent from '../components/shared/BaseComponent';
import ListItem from '../components/ProductPage/ListItem';
import { Text } from '../components/styled/styled.lib';
import { measurings } from '../components/fakeData';

const measureList = measurings.map((item, index) => 
  <ListItem key={index} value={item}/>
)

export const Products = () => (
  <BaseComponent>
    <Text type="periodT">December 21 - January 18, 2020</Text>
    <h2>By Product</h2>
    { measureList }
  </BaseComponent>
)
