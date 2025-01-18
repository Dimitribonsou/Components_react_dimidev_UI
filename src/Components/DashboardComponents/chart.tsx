import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Enregistrer les composants nécessaires
Chart.register(...registerables);

const MyChart = () => {
  useEffect(() => {
    // selectionner l'id du  premier element pour creer le graphique
    const canvas = document.getElementById('myChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    // selectionner l'id du  second element pour creer le graphique
    const canvas2 = document.getElementById('statCirculaire') as HTMLCanvasElement;
    const ctx2 = canvas2.getContext('2d');
    //verifier que les deux element selectionner existe dans le dom
    if (!ctx) return;
    if(!ctx2) return;
    
    const myChart = new Chart(ctx, {
      type: 'bar', // Type de graphique
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Commandes',
          data: [50, 20, 15, 25, 7, 3],
          backgroundColor: [
            '#ef4444',
            '#14b8a6',
            '#3b82f6',
            '#22c55e',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const statCirculaire = new Chart(ctx2, {
      type: 'pie', // Type de graphique
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'Ventes',
          data: [50, 20, 15, 25, 7, 3],
          backgroundColor: [
            '#ef4444',
            '#14b8a6',
            '#3b82f6',
            '#22c55e',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    
    // Nettoyage du graphique à la désinstallation du composant
    return () => {
      myChart.destroy();
      statCirculaire.destroy();
    };
    
  }, []);

  return(
    <div className='flex justify-center items-start h-fit gap-5  w-auto  '>
      <canvas id="myChart" className='w-3/4 h-14'  ></canvas>
      <canvas id="statCirculaire" className='w-3/4 h-14' ></canvas>
    </div>
  );
    
};

export default MyChart;
