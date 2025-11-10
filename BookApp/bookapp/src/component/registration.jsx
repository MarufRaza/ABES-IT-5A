import React, { useState } from 'react';

const Registration = ({ onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isEmailValid = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Full name is required.');
      return;
    }
    if (!isEmailValid(emailAddress)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setErrorMessage('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      setIsSubmitting(true);
      // Replace this with actual API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (typeof onSuccess === 'function') {
        onSuccess({ fullName, emailAddress });
      }
      setFullName('');
      setEmailAddress('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      setErrorMessage('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ maxWidth: 440, margin: '24px auto', padding: 16, border: '1px solid #e5e7eb', borderRadius: 8 }}>
      <h2 style={{ margin: 0, marginBottom: 12 }}>Create an account</h2>
      <p style={{ marginTop: 0, color: '#6b7280' }}>Sign up to start using the app.</p>

      {errorMessage ? (
        <div style={{ background: '#fee2e2', color: '#991b1b', padding: 10, borderRadius: 6, marginBottom: 12 }}>
          {errorMessage}
        </div>
      ) : null}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 12 }}>
          <label htmlFor="fullName" style={{ display: 'block', marginBottom: 6 }}>Full name</label>
          <input
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="John Doe"
            style={{ width: '100%', padding: 10, border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>

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

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: 6 }}>Confirm password</label>
          <input
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            style={{ width: '100%', padding: 10, border: '1px solid #d1d5db', borderRadius: 6 }}
          />
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
          {isSubmitting ? 'Creating account...' : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default Registration;

