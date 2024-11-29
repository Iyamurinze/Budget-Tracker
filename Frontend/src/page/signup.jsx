import React from 'react';
import { AuthLayout } from '../componets/auth/authlayout';
import { SignupForm } from '../componets/auth/signupform';

export function SignupPage() {
  return (
    <AuthLayout title="Create Account">
      <SignupForm />
    </AuthLayout>
  );
}