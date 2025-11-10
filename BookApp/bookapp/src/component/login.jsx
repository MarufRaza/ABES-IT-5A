import React, { useState } from 'react';

const Login = ({ onSuccess }) => {
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!isEmailValid(emailAddress)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (!password) {
      setErrorMessage('Password is required.');
      return;
    }

    try {
      setIsSubmitting(true);
      // Replace with real authentication
      await new Promise((resolve) => setTimeout(resolve, 700));
      if (typeof onSuccess === 'function') {
        onSuccess({ emailAddress, rememberMe });
      }
    } catch (error) {
      setErrorMessage('Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '24px auto', padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h2 style={{ margin: 0, marginBottom: 12 }}>Welcome back</h2>
      <p style={{ marginTop: 0, color: '#6b7280' }}>Sign in to continue.</p>

      {errorMessage ? (
        <div style={{ background: '#fee2e2', color: '#991b1b', padding: 10, borderRadius: 6, marginBottom: 12 }}>
          {errorMessage}
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: 6 }}>Email</label>
          <input
            id="email"
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="you@example.com"
            style={{ width: '100%', padding: 10, border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: 6 }}>Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: '100%', padding: 10, border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <input
            id="rememberMe"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            width: '100%',
            padding: 12,
            background: isSubmitting ? '#93c5fd' : '#3b82f6',
            color: '#ffffff',
            border: 'none',
            borderRadius: 6,
            cursor: isSubmitting ? 'not-allowed' : 'pointer'
          }}
        >
          {isSubmitting ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    </div>
  );
};

export default Login;

