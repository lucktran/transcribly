import React from 'react';

const Register = () => {
  return (
    <div style={{ background: '#222', color: '#fff', padding: '2em', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Register</h1>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', width: '50%', marginTop: '1em' }}>
        <label style={{ color: '#fff', width: '100%' }}>
          Name:
          <input type="text" name="name" style={{ padding: '0.5em', width: '100%', backgroundColor: '#f2f2f2', borderRadius: '0.15em' }} />
        </label>
        <label style={{ color: '#fff', width: '100%' }}>
          Email:
          <input type="email" name="email" style={{ padding: '0.5em', width: '100%', backgroundColor: '#f2f2f2', borderRadius: '0.15em' }} />
        </label>
        <label style={{ color: '#fff', width: '100%' }}>
          Password:
          <input type="password" name="password" style={{ padding: '0.5em', width: '100%', backgroundColor: '#f2f2f2', borderRadius: '0.15em' }} />
        </label>
        <input type="submit" value="Register" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '0.5em 1em', border: 'none', borderRadius: '0.15em', cursor: 'pointer', marginTop: '1em' }} />
      </form>
    </div>
  );
}

export default Register;