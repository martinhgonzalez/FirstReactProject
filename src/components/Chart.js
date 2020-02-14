import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Chart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["HTML", "CSS", "Javascript", "React JS", "Node JS", "Python"],
        datasets: [
          {
            label: "StackOverflow Questions per Technology",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }

  render() {
    return (
      <div className="chart">
        <Pie
          data={this.state.chartData}
          options={{
            title: {
              display: "asd",
              text: "StackOverflow qu estions by Technology",
              fontSize: 25
            }
          }}
        />
      </div>
    );
  }
}

export default Chart;
