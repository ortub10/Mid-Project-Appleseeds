import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import "./graph.css";
const Graph = ({ dates }) => {
  const data = {
    labels: dates.map((date) => date.date),
    datasets: [
      {
        label: "Closing price",
        data: dates.map((date) => date.close),
      },
    ],
  };
  return (
    <div className="contain_graph">
      <Line data={data} />
    </div>
  );
};

export default Graph;
