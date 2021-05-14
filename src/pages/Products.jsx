import React, { useContext } from "react";

import BaseComponent from "../components/shared/BaseComponent";
import ProductPage from "../components/ProductPage";
import { Text } from "../components/styled/styled.lib";
import { ReportContext } from "../authenticated-app";
import { convertCurrency } from "../utils";
// import { measurings } from "../components/fakeData";

const Products = () => {
  const { file_1 } = useContext(ReportContext);

  const measurings = [
    {
      title: "Whole Life",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Me",
              value: "123",
              percent: file_1.PL_sum_preds_sub[6],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "234",
              percent: file_1.IND_sum_preds_sub[6],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Me",
              value: "9.7",
              percent: file_1.PL_sum_preds_sub_prem[6],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "12",
              percent: file_1.IND_sum_preds_sub_prem[6],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Me",
              value: "7.8",
              percent: file_1.PL_preds_prem_pot[6],
              status: "down",
            },
            {
              text: "Benchmark Avg.",
              value: "2.8",
              percent: file_1.IND_preds_prem_pot[6],
              status: "down",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Premium Loss/Gain",
          value: convertCurrency(file_1.loss_IND_to_PL[6]),
          comment: "Negative growth predicted at ",
          distributor: "Distributor D",
          type: "total",
        },
      ],
    },
    {
      title: "Universal Life",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Me",
              value: "123",
              percent: file_1.PL_sum_preds_sub[7],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "234",
              percent: file_1.IND_sum_preds_sub[7],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Me",
              value: "9.7",
              percent: file_1.PL_sum_preds_sub_prem[7],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "12",
              percent: file_1.IND_sum_preds_sub_prem[7],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Me",
              value: "7.8",
              percent: file_1.PL_preds_prem_pot[7],
              status: "down",
            },
            {
              text: "Benchmark Avg.",
              value: "2.8",
              percent: file_1.IND_preds_prem_pot[7],
              status: "down",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Premium Loss/Gain",
          value: convertCurrency(file_1.loss_IND_to_PL[7]),
          comment: "Negative growth predicted at ",
          distributor: "Distributor D",
          type: "total",
        },
      ],
    },
    {
      title: "Term",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Me",
              value: "123",
              percent: file_1.PL_sum_preds_sub[8],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "234",
              percent: file_1.IND_sum_preds_sub[8],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Me",
              value: "9.7",
              percent: file_1.PL_sum_preds_sub_prem[8],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "12",
              percent: file_1.IND_sum_preds_sub_prem[8],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Me",
              value: "7.8",
              percent: file_1.PL_preds_prem_pot[8],
              status: "down",
            },
            {
              text: "Benchmark Avg.",
              value: "2.8",
              percent: file_1.IND_preds_prem_pot[8],
              status: "down",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Premium Loss/Gain",
          value: convertCurrency(file_1.loss_IND_to_PL[8]),
          comment: "Negative growth predicted at ",
          distributor: "Distributor D",
          type: "total",
        },
      ],
    },
    {
      title: "VUL",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Me",
              value: "123",
              percent: file_1.PL_sum_preds_sub[9],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "234",
              percent: file_1.IND_sum_preds_sub[9],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Me",
              value: "9.7",
              percent: file_1.PL_sum_preds_sub_prem[9],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: "12",
              percent: file_1.IND_sum_preds_sub_prem[9],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Me",
              value: "7.8",
              percent: file_1.PL_preds_prem_pot[9],
              status: "down",
            },
            {
              text: "Benchmark Avg.",
              value: "2.8",
              percent: file_1.IND_preds_prem_pot[9],
              status: "down",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Premium Loss/Gain",
          value: convertCurrency(file_1.loss_IND_to_PL[9]),
          comment: "Negative growth predicted at ",
          distributor: "Distributor D",
          type: "total",
        },
      ],
    },
  ];

  const measureList = measurings.map((item, index) => (
    <ProductPage key={index} value={item} />
  ));

  return (
    <BaseComponent>
      <Text type='periodT'>December 21 - January 18, 2020</Text>
      <h2>By Product</h2>
      {measureList}
    </BaseComponent>
  );
};

export default Products;
