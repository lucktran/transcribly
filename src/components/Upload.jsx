import React, { useState } from 'react';
import supabase from '../supabase'; 

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    try {
      if (!selectedFile) {
        setUploadStatus('Please select a file to upload.');
        return;
      }
  
      const { data: userData } = await supabase.auth.getUser();
      console.log(userData);
      
      if (!userData) {
        setUploadStatus('Please login to upload files.');
        return;
      }
      
      const userId = userData.user.id;

      const fileName = `${userId}_${Date.now()}_${selectedFile.name}`;
  
      const { data, error } = await supabase.storage
        .from('transcribly-useruploads')
        .upload(fileName, selectedFile);
  
      if (error) {
        setUploadStatus('Error uploading file.');
      } else {
        setUploadStatus('File uploaded successfully!');
        setSelectedFile(null);
      }
    } catch (error) {
      setUploadStatus('Error uploading file.');
    }
  };
  
  return (
    <div className="flex flex-col items-start space-y-4 p-5 bg-gray-100 w-full h-full rounded-lg shadow overflow-y-auto border-r border-gray-200 px-6 pb-4">
      <h1 className="text-lg font-semibold text-gray-900">Upload Page</h1>

      <div className="flex items-center space-x-3">
        <input type="file" onChange={handleFileChange} className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"/>
        
        <button onClick={handleUpload} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-4 rounded">
          Upload File
        </button>
      </div>

      {uploadStatus && <p className="text-gray-900">{uploadStatus}</p>}
    </div>
  );
};

export default Upload;