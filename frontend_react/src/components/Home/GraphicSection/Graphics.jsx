import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import './Graphics.css';


Chart.register(...registerables);

const Graphics = () => {
  const radarChart = useRef(null);

  useEffect(() => {

    const ctx = radarChart.current.getContext('2d');
    if (ctx) {

      if (radarChart.current.chart) {
        radarChart.current.chart.destroy();
      }

      const chart = new Chart(ctx, {
        type: 'radar',
        data: {
          labels: ['Motivación', 'Agilidad', 'Velocidad', 'Aguante', 'Fuerza'],
          datasets: [
            {
              data: [90, 70, 90, 43, 56],
              borderColor: 'rgba(255, 162, 80, 1)',
              backgroundColor: 'rgba(255, 162, 80, 0.2)',
              borderWidth: 2,
            },
            {
              data: [40, 40, 50, 73, 96],
              borderColor: 'rgba(55, 162, 80, 1)',
              backgroundColor: 'rgba(55, 162, 80, 0.2)',
              borderWidth: 2,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            r: {
              angleLines: {
                color: 'rgba(0, 0, 0, 0.3)',
              },
              suggestedMin: 0,
              suggestedMax: 100,
              ticks: {
                stepSize: 20,
                font: {
                  size: 14,
                },
                color: '#4b5563',
              },
              grid: {
                color: 'rgba(0, 0, 0, 0.1)',
              },
              pointLabels: {
                font: {
                  size: 20,
                },
                color: '#000',
              },
            },
          },
        },
      });

      // Guardamos la instancia del gráfico en la referencia del canvas
      radarChart.current.chart = chart;
    }

    // Cleanup (limpieza): destruir el gráfico al desmontar el componente
    // return () => {
    //   if (radarChart.current.chart) {
    //     radarChart.current.chart.destroy();
    //   }
    // };
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div className="mt-5 container-graphics">
      <canvas ref={radarChart}></canvas>
    </div>
  );
};

export default Graphics;