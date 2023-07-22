import React, { useState, useEffect } from 'react';
import supabase from '../supabase';

const Projects = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const getFiles = async () => {
      // Get current user
      const { data: userData } = await supabase.auth.getUser();
      const user = userData.user;
      console.log(user)

      // Ensure the user is logged in
      if (!user) {
        console.error('User not logged in');
        return;
      }

      const { data: listData, error } = await supabase.storage.from('transcribly-useruploads').list('');
      console.log(listData);
      if (error) {
        console.error('Error fetching files:', error);
      } else {
        // Filter files that belong to current user and have appropriate extension
        const userFiles = listData.filter(file => {
          const fileNameParts = file.name.split('_');
          const fileExt = fileNameParts[fileNameParts.length - 1].split('.')[1];
          return file.name.startsWith(`${user.id}_`) && ['mp3', 'mp4', 'wav', 'm4a'].includes(fileExt);
        });
        setFiles(userFiles);
      }
    };
    getFiles();
  }, []);
  const transcribeFile = async (fileName) => {
    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          bucketName: 'transcribly-useruploads',
          source: fileName
        })
      });

      if (response.ok) {
        console.log('File sent for transcription.');
      } else {
        console.error('Error sending file for transcription.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const formatFileName = (fileName) => {
    const parts = fileName.split('_');
    if (parts.length > 2) {
      // Remove the first two parts which contain the user id and timestamp
      parts.shift(); // Remove the user id
      parts.shift(); // Remove the timestamp
    }
    return parts.join('_');
  };
  return (
    <div className="flex flex-col items-start space-y-4 p-5 bg-gray-100 w-full h-full rounded-lg shadow overflow-y-auto border-r border-gray-200 px-6 pb-4">
      <h1 className="text-lg font-semibold text-gray-900">Transcribe</h1>
      <ul className="list-disc list-inside space-y-2">
        {files.map(file => (
          <ul key={file.name} className="text-gray-900">
            {formatFileName(file.name)} 
            <button onClick={() => transcribeFile(file.name)} className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-1 px-2 ml-2 rounded">
              Transcribe
            </button>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default Projects;