import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("No file selected");

  const handleUpload = event => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(URL.createObjectURL(file));
      setFileName(file.name);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Add your logic to handle submit
    alert(`Submitting video: ${fileName}`);
  };

  return (
    <div style={{ background: '#222', color: '#fff', padding: '2em', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Upload Your Video</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', width: '100%', maxWidth: '400px', marginTop: '2em' }}>
        <input type="file" accept="video/*" id="video-file" onChange={handleUpload} style={{ display: 'none' }} />
        {selectedFile ? <ReactPlayer url={selectedFile} controls width='100%' height='auto'/> : null}
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
          <label htmlFor="video-file" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '0.5em 1em', border: 'none', borderRadius: '0.25em', cursor: 'pointer', flex: 1, marginRight: '0.5em' }}>
            Select Video
          </label>
          <button type="submit" style={{ backgroundColor: '#28a745', color: '#fff', padding: '0.5em 1em', border: 'none', borderRadius: '0.25em', cursor: 'pointer', flex: 1, marginLeft: '0.5em' }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Upload;