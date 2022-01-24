import {Bar} from 'react-chartjs-2';
import styles from './Graph.module.css';

const Graph = ({data: {cases, recovered, deaths}, countries}) => {
  const barChart = cases ? (
    <Bar
      data={{
        labels: ['Infections', 'Recoveries', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: ['#FFD369', '#4E9F3D', '#FF0000'],
            data: [cases, recovered, deaths],
          },
        ],
      }}
      options={{
        legend: {display: false},
        title: {display: false, text: `Current data in ${countries}`},
      }}
    />
  ) : null;

  return <div className={styles.graph_grid}>{barChart}</div>;
};

export default Graph;
