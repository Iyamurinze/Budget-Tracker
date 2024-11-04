import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";
import { getIncomes, useGlobalContext } from "../../context/globalcontext";
import From from "../form/form";
import IncomeItem from "../incomeItem/incomeItem";

 export default function Incomes(){
   const {addIncome,Incomes,getIncome} = useGlobalContext()
   const [incomes, setIncomes] = useState([])
    
   useEffect(() =>{
        getIncomes(setIncomes)
    }, [])
   
    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <div className="income-content">
                    <div className=" form-content"></div>
                       <From />
                    <div className="incomes">
                        {incomes?.map((income) =>{
                            const {_id, title, amount, date, category, description} = income;
                            return <IncomeItem 
                            
                            
                            
                            />
                        })}
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
 }
  const IncomeStyled = styled.div`
  
  `;