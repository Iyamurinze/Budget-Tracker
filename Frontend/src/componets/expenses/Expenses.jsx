import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/layout";

 export default function Expenses(){
    return(
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
            </InnerLayout>
        </ExpenseStyled>
    )
 }
  const ExpenseStyled = styled.div`
  
  `;