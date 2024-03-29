import React, { PureComponent } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: [1, 3, 5, 7, 15, 20],
  datasets: [
    {
      label: 'Nu',
      data: [5, 2, 10, 4, 20, 6],
      fill: false,
      borderWidth: 2,
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
    },
  ],
};

export class LineChart extends PureComponent {
  render() {
    return (
      <div>
        <Line data={data} type="" height={100} />
      </div>
    );
  }
}
