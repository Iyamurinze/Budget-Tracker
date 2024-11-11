import React from "react";
import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalcontext";
import { dateFormat } from "../../utils/dateformat";

// Register Chart.js components
ChartJs.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export default function Chart() {
    const { incomes, expenses } = useGlobalContext();

    const data = {
        labels: incomes.map((inc) => {
            const { date } = inc;
            return dateFormat(date);
        }),
        datasets: [
            {
                label: "Income",
                data: incomes.map((income) => income.amount),
                backgroundColor: "green",
                borderColor: "green",
                tenstion: .2,
                fill: false
            },
            {
                label: "Expenses",
                data: expenses.map((expense) => expense.amount),
                backgroundColor: "red",
                borderColor: "red",
                tenstion: .2,
                fill: false
            }
        ]
    };

    return (
        <ChartStyled>
            <Line data={data} />
        </ChartStyled>
    );
}

const ChartStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    height: 100%;
`;
