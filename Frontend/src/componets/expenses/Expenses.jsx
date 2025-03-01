import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { useGlobalContext } from "../../context/globalcontext";
import ExpenseFrom from "./expenseform";
import IncomeItem from "../incomeItem/incomeItem";


 export default function Expenses(){
   const {addExpense,getExpenses,deleteExpense, totalExpenses} = useGlobalContext()
   const [expenses, setExpenses] = useState([])
    
   useEffect(() =>{
        getExpenses(setExpenses)
    }, [])
   
    return(
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className="total-income">Total Expenses: <span>$ {totalExpenses(expenses)}</span></h2>
                <div className="income-content">
                    <div className=" form-content"></div>
                       <ExpenseFrom addIncome={addExpense} />

                    <div className="incomes">
                        {expenses.map((Expense, index) =>{
                            const {id, title, amount, date, type,category, description} = Expense;
                            return <IncomeItem
                                key={id || index}
                                id={id}
                                title={title}
                                description={description}
                                amount={amount} 
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
 }
  const ExpenseStyled = styled.div`
      display: flex;
      overflow: auto;
      .total-income{
           display: flex;
           justify-content: center;
           align-items: center;
           background: #FCF6F9;
           border: 2px solid #FFFFFF;
           box-shadow: 0px 1px 15px rgba(0,0,0,0.06);
           border-radius: 20px;
           padding: 1rem;
           margin: 1rem 0;
           font-size: 2rem;
           gap: 0.5rem;
           span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
         }
      .income-content{
         display: flex;
         gap: 2rem;
         .incomes{
            flex: 1;
         }
       }
  `;