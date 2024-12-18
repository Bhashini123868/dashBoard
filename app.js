document.addEventListener("DOMContentLoaded", () => {
    const nutritionCtx = document.getElementById('nutritionChartCanvas').getContext('2d');
    const nutritionChart = new Chart(nutritionCtx, {
        type: 'bar',
        data: {
            labels: ['Fruits', 'Bakery', 'Grains', 'Milk', 'Fish', 'Meat', 'Vegetables', 'Nuts', 'Legumes'],
            datasets: [{
                label: 'Carbohydrates (%)',
                data: [15, 21, 65, 4.9, 35, 1.2, 12, 55, 25],
                backgroundColor: ['#ff9999', '#66b3ff', '#99ff99', '#ffcc99', '#c2c2f0', '#ffb3e6', '#ff6666', '#b3b3cc', '#ff9999'],
                borderColor: ['#e60000', '#3399ff', '#66b300', '#ff9900', '#5c5cd6', '#ff66b3', '#cc3333', '#4d4d99', '#ff3366'],
               
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const waterCtx = document.getElementById('waterIntakeChartCanvas').getContext('2d');
    const waterChart = new Chart(waterCtx, {
        type: 'pie',
        data: {
            labels: ['Morning', 'Afternoon', 'Evening', 'Night'],
            datasets: [{
                label: 'Water Intake from Foods or Drinks (%)',
                data: [30, 40, 20, 15],
                backgroundColor: ['#ff6666', '#66b3ff', '#99ff99', '#ffcc99'],
                borderColor: ['#e60000', '#3399ff', '#66b300', '#ff9900'],
                
            }]
        },
        options: {
            responsive: true
        }
    });
});
