import React, { useState, useEffect } from 'react';
import supabase from '../supabase';
import { saveAs } from 'file-saver';


const Files = () => {
    const [files, setFiles] = useState([]);
  
    useEffect(() => {
      const getFiles = async () => {
        const { data: userData } = await supabase.auth.getUser();
        const user = userData.user;
        console.log(user)

        if (!user) {
          console.error('User not logged in');
          return;
        }

        const { data: listData, error } = await supabase.storage.from('transcribly-useruploads').list('');
        console.log(listData);
        if (error) {
          console.error('Error fetching files:', error);
        } else {
          const userFiles = listData.filter(file => file.name.startsWith(`${user.id}_`));
          setFiles(userFiles);
        }
      };
      getFiles();
    }, []);

    const downloadFile = async (fileName) => {
      try {
        const { data, error } = await supabase.storage.from('transcribly-useruploads').download(fileName);
    
        if (error) {
          throw error;
        }
    
        saveAs(data, fileName);
      } catch (error) {
        console.error('Error downloading file:', error.message);
      }
    };

    const deleteFile = async (fileName) => {
      try {
        const { error } = await supabase.storage.from('transcribly-useruploads').remove([fileName]);
        
        if (error) {
          console.error('Error deleting file:', error);
        } else {
          setFiles(files => files.filter(file => file.name !== fileName));
          console.log('File deleted successfully');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const formatFileName = (fileName) => {
      const parts = fileName.split('_');
      if (parts.length > 2) {
        parts.shift(); 
        parts.shift();
      }
      return parts.join('_');
    };
  
    return (
      <div className="flex flex-col items-start space-y-4 p-5 bg-gray-100 w-full h-full rounded-lg shadow overflow-y-auto border-r border-gray-200 px-6 pb-4">
        <h1 className="text-lg font-semibold text-gray-900">All Files</h1>
        <ul className="list-disc list-inside space-y-2">
          {files.map(file => (
            <ul key={file.name} className="text-gray-900">
              {formatFileName(file.name)} 
              <button onClick={() => downloadFile(file.name)} className="bg-green-600 hover:bg-green-500 text-white font-semibold py-1 px-2 ml-2 rounded">
                Download
              </button>
              <button onClick={() => deleteFile(file.name)} className="bg-red-600 hover:bg-red-500 text-white font-semibold py-1 px-2 ml-2 rounded">
                Delete
              </button>
            </ul>
          ))}
        </ul>
      </div>
    );
  };

export default Files;