export function initializeChart() {
  console.log('chart.js: initializeChart called.');
  const ctx = document.getElementById('categoryChart');
  if (ctx) {
    console.log('chart.js: categoryChart canvas found.');
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['Web Apps', 'Deep Learning', 'Tools & Scripts', 'Other'],
        datasets: [{
          data: [30, 20, 40, 10], // Example data
          backgroundColor: [
            '#0969da',
            '#8250df',
            '#bf8500',
            '#6e7781'
          ],
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          },
          title: {
            display: true,
            text: 'Project Categories Overview'
          }
        }
      }
    });
  } else {
    console.log('chart.js: categoryChart canvas NOT found.');
  }
}