import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import moment from "moment";
import { FC } from "react";
import { Line } from "react-chartjs-2";

import { ILineChartProps } from "@/common/types/assets";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart: FC<ILineChartProps> = (props: ILineChartProps) => {
  const { data } = props;

  const options = {
    responsive: true,
    scale: {
      x: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
      },
    },
  };

  const values = {
    labels: data[0].price_chart_data.map((element: any) =>
      moment(element[0]).format("DD.MM.YY")
    ),
    datasets: [
      {
        label: data[0].name.charAt(0).toUpperCase() + data[0].name.slice(1),
        data: data[0].price_chart_data.map((element: any) => element[1]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return <Line options={options} data={values} width="100%" height="20%" />;
};

export default LineChart;
