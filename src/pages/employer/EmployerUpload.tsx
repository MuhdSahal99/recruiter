import React, { useState } from 'react';
import UploadPage from '../Candidate/UploadPage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type UploadType = 'Job Description' | 'CV' | 'Interview Script';

const EmployerUpload: React.FC = () => {
  const navigate = useNavigate();
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleUpload = async (file: File, uploadType: UploadType) => {
    if (uploadType === 'CV') {
      setErrorMessage('Employers cannot upload CVs.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const endpoint = uploadType === 'Job Description' ? '/api/upload_job_description' : '/api/upload_interview_script';
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadStatus('success');
        setErrorMessage(null);
        alert(`${uploadType} uploaded successfully!`);
      } else {
        setUploadStatus('error');
        setErrorMessage(`Failed to upload ${uploadType}. Please try again.`);
      }
    } catch (error) {
      setUploadStatus('error');
      if (axios.isAxiosError(error)) {
        if (error.response) {
          setErrorMessage(`Error ${error.response.status}: ${error.response.data.error || 'Unknown error'}`);
        } else if (error.request) {
          setErrorMessage('No response received from server. Please try again later.');
        } else {
          setErrorMessage('An error occurred while setting up the request.');
        }
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
      console.error('Upload error:', error);
    }
  };

  return (
    <>
      <UploadPage userType="employer" onUpload={handleUpload} />
      {uploadStatus === 'success' && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          File uploaded successfully!
        </div>
      )}
      {uploadStatus === 'error' && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
          {errorMessage || 'Failed to upload file. Please try again.'}
        </div>
      )}
    </>
  );
};

export default EmployerUpload;