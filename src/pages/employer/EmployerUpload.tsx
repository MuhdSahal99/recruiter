import React, { useState } from 'react';
import UploadPage from '../Candidate/UploadPage';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

type UploadType = 'Job Description' | 'CV' | 'Interview Script';

const EmployerUpload: React.FC = () => {
  const navigate = useNavigate();
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [uploadedInterviewInfo, setUploadedInterviewInfo] = useState<{ id: string } | null>(null);


  const handleUpload = async (file: File, type: UploadType) => {
    if (type === 'CV') {
      setErrorMessage('Employers cannot upload CVs.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const endpoint = type === 'Job Description' ? '/api/upload_job_description' : '/api/upload_interview_script';
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadStatus('success');
        setErrorMessage(null);
        alert(`${type} uploaded successfully!`);
        if (type === 'Interview Script') {
          const interviewId = response.data.interview_script.id;
          setUploadedInterviewInfo({ id: interviewId });
         
        }
      } else {
        setUploadStatus('error');
        setErrorMessage(`Failed to upload ${type}. Please try again.`);
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
    <div className="space-y-6">
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
    </div>
  );
};

export default EmployerUpload;