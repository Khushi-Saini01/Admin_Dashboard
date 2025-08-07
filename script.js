// Theme Toggle
document.getElementById("theme-toggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// Chart.js
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{
      label: 'Users',
      data: [12, 19, 10, 5, 18],
      backgroundColor: '#6a11cb'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: getComputedStyle(document.body).getPropertyValue('--text')
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: getComputedStyle(document.body).getPropertyValue('--text')
        }
      },
      y: {
        ticks: {
          color: getComputedStyle(document.body).getPropertyValue('--text')
        }
      }
    }
  }
});
