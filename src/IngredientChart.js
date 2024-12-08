import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const IngredientChart = ({ ingredients }) => {
    const labels = ingredients.map((item) => item.name);
    const data = {
        labels,
        datasets: [
            {
                label: 'Quantities',
                data: ingredients.map((item) => item.quantity),
                backgroundColor: 'rgba(75, 192, 192, .2)',
                borderColor: 'rgba(75. 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: false,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Ingredient Quantities',
            },
        },
    };

    return <Bar data={data} options={options} />;
};

export default IngredientChart;