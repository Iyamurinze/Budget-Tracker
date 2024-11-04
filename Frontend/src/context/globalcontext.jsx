import React, { useContext, useState } from "react";
import axios from 'axios';
import Incomes from "../componets/income/Incomes";


const BASE_URL = "http://localhost:5000/api/v1";
const GlobalContext = React.createContext();

const addIncomeAPI = async (incomeData, setIncomes, setError) => {
    try {
        const response = await axios.post(`${BASE_URL}/add-income`, incomeData);
        setIncomes(prevIncomes => [...prevIncomes, response.data]);
    } catch (err) {
        console.error("Error adding income:", err);
        setError(err.response?.data?.message || "Error occurred while adding income");
    }
};

export const getIncomes = async (setIncomes) => {
    const response = await axios.get(`${BASE_URL}/get-income`)
    setIncomes(response.data)
    console.log(response.data)
}


export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = (incomeData) => addIncomeAPI(incomeData, setIncomes, setError);

    return (
        <GlobalContext.Provider value={{ Incomes, addIncome, getIncomes }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export default GlobalContext;
