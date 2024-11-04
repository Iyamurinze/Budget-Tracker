import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import bg from './img/bg.jpg';
import { MainLayout } from './styles/layout';
import Orb from './componets/Orb';
import Navigation from './componets/navigation/navigation';
import Dashboard from './componets/dashboard/Dashboard';
import Expenses from './componets/expenses/Expenses';
import Incomes from './componets/income/Incomes';
import { useGlobalContext } from './context/globalcontext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext()
  console.log(global);

  const displayData = () =>{
    switch(active){
      case 1:
        return <Dashboard />
      case 2:
        return <Dashboard />
      case 3:
        return <Incomes />
        case 4:
          return <Expenses/>  
        default: 
          return <Dashboard />
    }
  }

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <AppStyled bg={bg} className="App">
      {orbMemo}
      <MainLayout>
        <Navigation active={active} setActive={setActive} />
        <main>
          {displayData()}
        </main>
      </MainLayout>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  height: 100vh; /* Corrected from 100hv to 100vh */
  background-image: url(${props => props.bg});
  position: relative;

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-y: auto; 
    overflow-x: hidden; 
    
    &::-webkit-scrollbar {
      width: 0; /* Hides the scrollbar */
    }
  }
`;

export default App;
