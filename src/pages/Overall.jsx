import React, { useContext } from "react";

import BaseComponent from "../components/shared/BaseComponent";
import PerformanceComponent from "../components/OverallPage/Performance";
import InsightComponent from "../components/OverallPage/Insights";
import { ReportContext } from "../authenticated-app";

const Overall = () => {
  const contextData = useContext(ReportContext);
  const file_3 = contextData["file_3_Pacific Life"];
  let insights = [],
    topInsights = [],
    industryInsights = [];
  if (file_3) {
    for (const item of Object.entries(file_3.index)) {
      insights.push(item[1]);
    }
  }
  for (let i = 1; i <= 6; i++) {
    topInsights.push(insights[i]);
  }
  for (let i = 8; i <= 13; i++) {
    industryInsights.push(insights[i]);
  }

  return (
    <BaseComponent>
      <PerformanceComponent />
      <InsightComponent type='Top' value={topInsights} />
      <InsightComponent type='Industry' value={industryInsights} />
    </BaseComponent>
  );
};

export default Overall;
