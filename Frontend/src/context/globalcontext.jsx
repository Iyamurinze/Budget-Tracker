import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1";
const GlobalContext = React.createContext();

const addIncomeAPI = async (incomeData, setIncomes, setError) => {
    try {
        const response = await axios.post(`${BASE_URL}/add-income`, incomeData);
        setIncomes(prevIncomes => [...prevIncomes, incomeData]);
        await getIncomes(setIncomes);
    } catch (err) {
        console.error("Error adding income:", err);
        setError(err.response?.data?.message || "Error occurred while adding income");
    }
}

export const getIncomes = async (setIncomes) => {
    const response = await axios.get(`${BASE_URL}/get-income`)
    setIncomes(response.data)
    console.log(response.data)
}

const deleteIncomeAPI = async (id, setIncomes, setError) => {
    try {
        await axios.delete(`${BASE_URL}/delete-income/${id}`);
        await getIncomes(setIncomes);
        setIncomes(prevIncomes => prevIncomes.filter(income => income._id !== id));
    } catch (err) {
        console.error("Error deleting income:", err);
        setError(err.response?.data?.message || "Error occurred while deleting income");
    }
};

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null);

    const addIncome = (incomeData) => addIncomeAPI(incomeData, setIncomes, setError);
    const deleteIncome = (id) => deleteIncomeAPI(id, setIncomes, setError);
    const fetchIncomes = () => getIncomes(setIncomes);

    useEffect(() =>{
        fetchIncomes();
    },[]);

    const totalIncome = () => {
        if (!incomes || incomes.length === 0) return 0; 

        return incomes.reduce((total, income) => {
            const amount = Number(income.amount);
            if (!isNaN(amount)) {
                return total + amount; 
            }
            return total; 
        }, 0);
    };

    return (
        <GlobalContext.Provider value={{ 
            incomes,
            addIncome, 
            getIncomes,
            deleteIncome,
            totalIncome
             }}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};

export default GlobalContext;
