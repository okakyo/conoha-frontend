import React, { FC } from "react";
import { LineChart, Line } from "recharts";

export const BarCharts: FC = (props: any) => {
  return (
    <LineChart>
      <Line type="monotone" />
    </LineChart>
  );
};
