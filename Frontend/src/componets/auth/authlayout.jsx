import React from 'react';
import { LogIn } from 'lucide-react';
import styled from 'styled-components';

// Styled component for the background container
const AuthContainer = styled.div`
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

// Styled component for the form card container
const AuthCard = styled.div`
  width: 100%;
  max-width: 36rem;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 32px;
  padding: 2rem;
  overflow: hidden;
`;

// Styled component for the icon wrapper
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

// Styled component for the title
const Title = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4A4A4A;
`;

export function AuthLayout({ children, title }) {
  return (
    <AuthContainer className="auth-container">
      <AuthCard className="auth-card">
        <IconWrapper className="icon-wrapper">
          <LogIn className="w-8 h-8 text-purple-600" />
        </IconWrapper>
        <Title className="title">{title}</Title>
        {children}
      </AuthCard>
    </AuthContainer>
  );
}
