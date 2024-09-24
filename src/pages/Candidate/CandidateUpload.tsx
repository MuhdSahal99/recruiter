// import React from 'react';
// import UploadPage from './UploadPage';

// const CandidateUpload: React.FC = () => {
//   return <UploadPage userType="candidate" />;
// };

// export default CandidateUpload;
import React, { useState } from 'react';
import UploadPage from './UploadPage';
import axios from 'axios';

const CandidateUpload: React.FC = () => {
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const handleUpload = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        setUploadStatus('success');
        alert('Resume uploaded successfully!');
      } else {
        setUploadStatus('error');
        alert('Failed to upload resume. Please try again.');
      }
    } catch (error) {
      setUploadStatus('error');
      alert('An error occurred while uploading the resume. Please try again.');
      console.error('Upload error:', error);
    }
  };

  return (
    <>
      <UploadPage userType="candidate" onUpload={handleUpload} />
      {uploadStatus === 'success' && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          Resume uploaded successfully!
        </div>
      )}
      {uploadStatus === 'error' && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
          Failed to upload resume. Please try again.
        </div>
      )}
    </>
  );
};

export default CandidateUpload;
