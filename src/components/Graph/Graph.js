/* eslint-disable */
import React, {useState, useEffect} from 'react';
import {Bar} from 'react-chartjs-2';
//import {} from '../../http/http';
import styles from './Graph.module.css';

const Graph = ({data: {cases, recovered, deaths}, countries}) => {
    
    const barChart = cases ? (

        <Bar
        data={{
            labels: ['Infections', 'Recoveries', 'Deaths'],
            datasets:[
                {
                    label: 'People',
                    backgroundColor: [
                        '#FFD369',
                        '#4E9F3D',
                        '#FF0000'
                    ],
                    data: [cases, recovered, deaths],

                },

            ],

            }}
            options={{
                legend: {display: false},
                title: {display: false, text: `Current data in ${countries}`},

            }}

        />

    ):null;






    return (
        <div className={styles.graphgrid}>
            {barChart}
        </div>
    )
}

export default Graph;
