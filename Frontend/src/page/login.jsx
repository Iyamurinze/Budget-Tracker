import React from 'react';
import { AuthLayout } from '../componets/auth/authlayout';
import { LoginForm } from '../componets/auth/loginform';

export function LoginPage() {
  return (
    <AuthLayout title="Welcome Back">
      <LoginForm />
    </AuthLayout>
  );
}