import React, { useState, useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/authcontext';
import { LoginPage } from './page/login';
import { SignupPage } from './page/signup';
import { useAuth } from './context/authcontext';
import { MainLayer } from './componets/layout/mainlayout';
import styled from 'styled-components';
import bg from './img/bg.jpg';
import { MainLayout } from './styles/layout';
import Orb from './componets/Orb';
import Navigation from './componets/navigation/navigation';
import Dashboard from './componets/dashboard/Dashboard';
import Expenses from './componets/expenses/Expenses';
import Incomes from './componets/income/Incomes';
import { useGlobalContext } from './context/globalcontext';


function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  const [active, setActive] = useState(1);
  const global = useGlobalContext();

  const displayData = () => {
    switch (active) {
      case 1:
        return <Dashboard />;
      case 2:
        return <Dashboard />;
      case 3:
        return <Incomes />;
      case 4:
        return <Expenses />;
      default:
        return <Dashboard />;
    }
  };

  const orbMemo = useMemo(() => {
    return <Orb />;
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Default route points to login */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            

            {/* Private Route */}
            <Route path="/dashboard" element={
                <PrivateRoute>
                  <AppStyled bg={bg} className="App">
                      {orbMemo}
                         <MainLayout>
                            <Navigation active={active} setActive={setActive} />
                             <main>{displayData()}</main>
                         </MainLayout>
                 </AppStyled>
                 </PrivateRoute>
              }
            />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
      
    </>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;

  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #FFFFFF;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 0; /* Hides the scrollbar */
    }
  }
`;

export default App;
