import React, { useContext } from "react";

import BaseComponent from "../components/shared/BaseComponent";
import ProductPage from "../components/ProductPage";
import { ReportContext } from "../authenticated-app";
import { convertCurrency } from "../utils";

const Products = () => {
  const contextData = useContext(ReportContext);
  const file_1 = contextData["file_1_Pacific Life"];
  const measurings = [
    {
      title: "Term",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub[8],
              percent: file_1.perc_PL_sub[8],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub[8],
              percent: file_1.perc_IND_sub[8],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub_prem[8],
              percent: file_1.perc_PL_sub_prem[8],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub_prem[8],
              percent: file_1.perc_IND_sub_prem[8],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_preds_prem_pot[8],
              percent: file_1.perc_PL_prem_pot[8],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_preds_prem_pot[8],
              percent: file_1.perc_IND_prem_pot[8],
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
      title: "IUL",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub[6],
              percent: file_1.perc_PL_sub[6],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub[6],
              percent: file_1.perc_IND_sub[6],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub_prem[6],
              percent: file_1.perc_PL_sub_prem[6],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub_prem[6],
              percent: file_1.perc_IND_sub_prem[6],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_preds_prem_pot[6],
              percent: file_1.perc_PL_prem_pot[6],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_preds_prem_pot[6],
              percent: file_1.perc_IND_prem_pot[6],
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
      title: "VUL",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub[6],
              percent: file_1.perc_PL_sub[6],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub[6],
              percent: file_1.perc_IND_sub[6],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub_prem[9],
              percent: file_1.perc_PL_sub_prem[9],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub_prem[9],
              percent: file_1.perc_IND_sub_prem[9],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_preds_prem_pot[9],
              percent: file_1.perc_PL_prem_pot[9],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_preds_prem_pot[9],
              percent: file_1.perc_IND_prem_pot[9],
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
    {
      title: "Universal Life",
      category: [
        {
          subTitle: "Submissions",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub[7],
              percent: file_1.perc_PL_sub[7],
              status: "up",
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub[7],
              percent: file_1.perc_IND_sub[7],
              status: "up",
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Submitted Premium",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_sum_preds_sub_prem[7],
              percent: file_1.perc_PL_sub_prem[7],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_sum_preds_sub_prem[7],
              percent: file_1.perc_IND_sub_prem[7],
            },
          ],
          type: "chart",
        },
        {
          subTitle: "Paid Potential",
          chartData: [
            {
              text: "Carrier",
              value: file_1.PL_preds_prem_pot[7],
              percent: file_1.perc_PL_prem_pot[7],
            },
            {
              text: "Benchmark Avg.",
              value: file_1.IND_preds_prem_pot[7],
              percent: file_1.perc_IND_prem_pot[7],
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
  ];

  const measureList = measurings.map((item, index) => (
    <ProductPage key={index} value={item} />
  ));

  return (
    <BaseComponent>
      <h2>By Product</h2>
      {measureList}
    </BaseComponent>
  );
};

export default Products;
