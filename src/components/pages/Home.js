import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ background: '#222', color: '#fff', padding: '2em', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>What is Transcribly?</h1>
      <p style={{ textAlign: 'center', width: '60%', lineHeight: '1.6', marginTop: '1em' }}>
        Transcribly is an innovative video transcription tool designed to transform the way you work with videos. Whether you're an educator, content creator, filmmaker, or business professional, Transcribly offers a seamless experience, turning your video content into written transcripts quickly and accurately.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1em', marginTop: '2em' }}>
        <Link to="/upload" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '0.5em 1em', border: 'none', borderRadius: '0.25em', cursor: 'pointer', textDecoration: 'none' }}>
          Try for Free
        </Link>
        <button style={{ backgroundColor: '#28a745', color: '#fff', padding: '0.5em 1em', border: 'none', borderRadius: '0.25em', cursor: 'pointer' }}>
          See How It Works
        </button>
      </div>
    </div>
  );
}

export default Home;