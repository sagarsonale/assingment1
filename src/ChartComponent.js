/*import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);



function ChartComponent({ data, type, title }) {

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [{
            label: title,
            data: data.map(item => item.count || item.totalSales || item.lifetimeValue),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    };
    


    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#000',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 18,
                    weight: 'bold'
                }
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    color: '#000'
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: '#000'
                }
            }
        }
    };

    return (
        <div>
            {type === 'line' ? <Line data={chartData} options={options} /> : <Bar data={chartData} options={options} />}
        </div>
    );
}

export default ChartComponent;*/

import React from 'react';
import { Line, Bar, Pie, Doughnut, Radar, Scatter, Bubble } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register components needed for different chart types
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement // For Pie, Doughnut, Radar charts
);

function ChartComponent({ data, type, title }) {

    const chartData = {
        labels: data.map(item => item._id),
        datasets: [{
            label: title,
            data: data.map(item => item.count || item.totalSales || item.lifetimeValue),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 2
        }]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 16 // Increase the font size for legend labels
                    }
                }
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 24 // Increase the font size for the chart title
                }
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        const label = tooltipItem.dataset.label || '';
                        const value = tooltipItem.raw;
                        return `${label}: ${value}`;
                    },
                    title: function(tooltipItems) {
                        const title = tooltipItems[0].label || '';
                        return `Date: ${title}`;
                    }
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14 // Increase the font size for x-axis labels
                    }
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 14 // Increase the font size for y-axis labels
                    }
                }
            }
        }
    };

    const renderChart = () => {
        switch(type) {
            case 'line':
                return <Line data={chartData} options={options} />;
            case 'bar':
                return <Bar data={chartData} options={options} />;
            case 'pie':
                return <Pie data={chartData} options={options} />;
            case 'doughnut':
                return <Doughnut data={chartData} options={options} />;
            case 'radar':
                return <Radar data={chartData} options={options} />;
            case 'scatter':
                return <Scatter data={chartData} options={options} />;
            case 'bubble':
                return <Bubble data={chartData} options={options} />;
            default:
                return <Line data={chartData} options={options} />;
        }
    };

    return (
        <div style={{ width: '100%', height: '500px' }}> {/* Adjust the height and width here */}
            {renderChart()}
        </div>
    );
}

export default ChartComponent;





