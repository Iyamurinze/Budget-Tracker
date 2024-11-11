import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../context/globalcontext";

export default function History(){
    const {transactionsHistory} = useGlobalContext()
    const history = transactionsHistory()
    return (
        <HistoryStyled>
            <h2>Recente History</h2>
            {history.map((item) =>{
                const {_id, title, amount, type} = item
                return (
                    <div key= {_id} className="historyItem">
                          <p style={{
                                color: type === 'expense' ? 'red' : 'var(--color-green)'
                            }}>
                                {title}
                            </p>
                            <p style={{
                                color: type === 'expense' ? 'red' : 'var(--color-green)'
                            }}>
                                {type === 'expense' ? `-${amount}` : `+${amount}`}
                            </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}
const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .history-item {
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: transform 0.3s ease; 
    
    &:hover {
      transform: scale(1.03);  
    }
  }
`;
