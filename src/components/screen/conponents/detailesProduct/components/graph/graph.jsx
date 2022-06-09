import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./graph.css";
Chart.register(...registerables);

const Graph = ({ dates }) => {
  const data = {
    labels: dates.map((date) => date.date),
    datasets: [
      {
        label: "Closing price",
        data: dates.map((date) => date.close),
        borderColor: "blue",
      },

      {
        label: "Ema",
        data: dates.map((date) => date.ema),
        borderColor: "green",
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
