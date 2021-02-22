import React, { Component } from "react";
import BarChart from "react-apexcharts";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          stacked: true,
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          labels: {
          }
        },
        theme: {
            monochrome: {
              enabled: true,
              color: '#392c70',
              shadeTo: 'light',
            }
          },
          stroke: {
            show: true,
            curve: 'smooth',
            lineCap: 'square',
            colors: '#392c70',
            width: 2,
            dashArray: 0,      
        }
      },
      series: [
        // {
        //   name: "Delivered",
        //   data: [260, 380, 230, 400, 780, 530, 340, 200, 400, 650, 780, 500]
        // },
        {
          name: "Estimated",
          data: [480, 600, 510, 600, 1000, 570, 500, 200, 450, 710, 820, 650]
        }
      ]
    };
  }
  render() {
    return (
        <>
            <BarChart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
            />
     </>
    );
  }
}
export default Chart;