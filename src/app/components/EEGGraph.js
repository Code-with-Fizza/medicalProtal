// components/EEGGraph.js
"use client";
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EEGGraph = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      new Chart(ctx, {
        type: 'line',
        data: {
          labels: data.labels,
          datasets: data.datasets,
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: 'linear',
              position: 'bottom',
            },
            y: {
              title: {
                display: true,
                text: 'EEG Value',
              },
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default EEGGraph;
