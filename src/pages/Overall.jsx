import React, { useContext } from "react";

import BaseComponent from "../components/shared/BaseComponent";
import PerformanceComponent from "../components/OverallPage/Performance";
import InsightComponent from "../components/OverallPage/Insights";
import { Text } from "../components/styled/styled.lib";
import { ReportContext } from "../authenticated-app";

const Overall = () => {
  const { file_3 } = useContext(ReportContext);
  let insights = [],
    topInsights = [],
    industryInsights = [];

  for (const item of Object.entries(file_3.index)) {
    insights.push(item[1]);
  }
  for (let i = 1; i <= 6; i++) {
    topInsights.push(insights[i]);
  }
  for (let i = 8; i <= 13; i++) {
    industryInsights.push(insights[i]);
  }

  return (
    <BaseComponent>
      <Text type='periodT'>Feb' 1 - Mar' 1, 2021</Text>
      <PerformanceComponent />
      <InsightComponent type='Top' value={topInsights} />
      <InsightComponent type='Industry' value={industryInsights} />
    </BaseComponent>
  );
};

export default Overall;
