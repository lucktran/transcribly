import React from 'react';

const Contact = () => {
  return (
    <div style={{ background: '#222', color: '#fff', padding: '2em', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Contact Us</h1>
      <p style={{ textAlign: 'center', width: '60%', lineHeight: '1.6', marginTop: '1em' }}>Get in touch with us!</p>
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
          Message:
          <textarea name="message" rows="5" style={{ padding: '0.5em', width: '100%', backgroundColor: '#f2f2f2', borderRadius: '0.15em' }} />
        </label>
        <input type="submit" value="Send Message" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '0.5em 1em', border: 'none', borderRadius: '0.15em', cursor: 'pointer', marginTop: '1em' }} />
      </form>
    </div>
  );
}

export default Contact;