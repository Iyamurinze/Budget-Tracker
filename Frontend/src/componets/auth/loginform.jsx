import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/authcontext';
import styled from 'styled-components';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <FormContainer>
      <FormCard>
        <Title>Login</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <div>
            <InputLabel htmlFor="email">Email</InputLabel>
            <InputField
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <InputLabel htmlFor="password">Password</InputLabel>
            <InputField
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <SubmitButton type="submit">Sign In</SubmitButton>
        </form>
        <SignUpLink>
          Don't have an account?{' '}
          <LinkText to="/signup"><strong>Sign up</strong></LinkText>
        </SignUpLink>
      </FormCard>
    </FormContainer>
  );
}

// Styled components for the LoginForm
const FormContainer = styled.div`
  height: 50vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 35rem;
  background: rgba(252, 246, 249, 0.78);
  border: 3px solid #FFFFFF;
  backdrop-filter: blur(4.5px);
  border-radius: 20px;
  padding: 2rem;
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #4A4A4A;
`;

const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4A4A4A;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  margin-top: 0.5rem;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  box-sizing: border-box;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #8b5cf6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.3);
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #F56692;
  color: #fff;
  border: none;
  border-radius: 20px;
  margin-top: 1.5rem;
  cursor: pointer;

   &:hover {
               background: var(--color-green) !important;
  }
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: #f8d7da;
  color: #721c24;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 0.875rem;
`;

const SignUpLink = styled.p`
  padding: 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #4b5563;
`;

const LinkText = styled(Link)`
  color: #8b5cf6;
  text-decoration: none;

  &:hover {
    color: #6b3d9e;
  }
`;