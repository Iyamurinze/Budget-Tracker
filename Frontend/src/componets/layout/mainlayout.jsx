import React from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const MainContent = styled.main`
  flex: 1;
  max-width: 1200px;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  overflow-x: hidden;
  padding: 2rem;
  height: calc(100vh - 4rem);
  
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export function MainLayer({ children }) {
  return (
    <LayoutWrapper>
      <MainContent>
        {children}
      </MainContent>
    </LayoutWrapper>
  );
}