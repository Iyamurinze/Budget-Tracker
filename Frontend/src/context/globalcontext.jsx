import React, { Children, useState } from "react"
import axios from 'axios'


const BASE_URL = "http://lacolhost:5000/api/vi";
const GlobalContext = React.createContext()

export const Globalprovider = ({Children}) =>{
const [incomes, setIncomes] = useState([])
const [expenses, setExpenses] = useState([])
const [error, setError] = useState(null)

    return(
        <GlobalContext.Provider>
            {Children}
        </GlobalContext.Provider>
    )
}