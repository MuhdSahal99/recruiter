import React, { useState, useRef } from 'react';
import UploadOption from '../../componenets/UploadOption';
import { useNavigate } from 'react-router-dom';

type UploadType = 'Job Description' | 'CV' | 'Interview Script';

interface UploadPageProps {
  userType: 'candidate' | 'employer';
  onUpload?: (file: File, uploadType: UploadType) => Promise<void>;
}

const UploadPage: React.FC<UploadPageProps> = ({ userType, onUpload }) => {
  const [activeUpload, setActiveUpload] = useState<UploadType>(
    userType === 'candidate' ? 'CV' : 'Job Description'
  );
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleUploadOptionClick = (type: UploadType) => {
    setActiveUpload(type);
    setFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleSelectFile = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (file && onUpload) {
      await onUpload(file, activeUpload);
    } else {
      alert('Please select a file to upload.');
    }
  };

  const uploadOptions: UploadType[] =
    userType === 'candidate'
      ? ['CV']
      : ['Job Description', 'Interview Script'];

  return (
    <div className="flex flex-col text-sm max-w-[590px] mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold leading-none text-center text-neutral-800 max-md:max-w-full">
        {userType === 'candidate' ? 'Upload Your CV' : 'Upload Documents'}
      </h2>

      {/* Upload Options */}
      <div className="flex flex-wrap gap-4 self-center mt-6 w-full font-medium leading-5 text-center text-zinc-900">
        {uploadOptions.map((option) => (
          <UploadOption
            key={option}
            icon={
              option === 'CV'
                ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/5525b385639718078f8698872f2a63a2bc39e5360d3d1c2cf52d33348afade0f?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3'
                : option === 'Job Description'
                ? 'https://cdn.builder.io/api/v1/image/assets/TEMP/ddcd9a41cd4c4ced88a3ce9e898c508735fcdbb8effda54cb325066d124e7766?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3'
                : 'https://cdn.builder.io/api/v1/image/assets/TEMP/9398edb82516530bdd9251cf0c2bcc462638e79fa53b928cf6f7405e5285c135?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3'
            }
            text={`Upload ${option}`}
            isActive={activeUpload === option}
            onClick={() => handleUploadOptionClick(option)}
          />
        ))}
      </div>

      {/* Upload Area */}
      <div className="flex flex-col mt-10 w-full leading-none max-md:max-w-full">
        <div
          className="flex flex-col px-8 pt-6 pb-10 w-full bg-white rounded-md border-2 border-dashed border-neutral-300 border-opacity-70 min-h-[230px] max-md:px-5 max-md:max-w-full"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center text-center w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e370944f4058b559ff062fc81b8e86d2becc80ecd5dc90f63ac1489edeece472?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                className="object-contain self-center w-12 aspect-square"
                alt="Upload icon"
              />
              <div className="flex flex-col items-start mt-3 w-full max-md:max-w-full">
                <div className="font-medium text-zinc-900 max-md:max-w-full">
                  {file ? file.name : `Drag and drop your ${activeUpload} file here`}
                </div>
                <div className="mt-1.5 text-gray-500 max-md:max-w-full">
                  You can upload DOC, DOCX, PDF, or TXT. Max file size 12 MB.
                </div>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".doc,.docx,.pdf,.txt"
              style={{ display: 'none' }}
            />
            <div className="flex flex-col items-center mt-6">
              <button
                type="button"
                className="overflow-hidden gap-2 px-3.5 py-2 mb-4 font-medium text-white bg-indigo-900 rounded-lg border border-solid shadow-xl border-white border-opacity-30 w-[126px]"
                onClick={handleSelectFile}
              >
                Select File
              </button>
              <button
                type="submit"
                className={`overflow-hidden gap-2 px-3.5 py-2 font-medium text-white ${
                  file
                    ? 'bg-indigo-600 hover:bg-indigo-700'
                    : 'bg-indigo-300 cursor-not-allowed'
                } rounded-lg border border-solid shadow-xl border-white border-opacity-30 w-[126px]`}
                disabled={!file}
              >
                {`Upload ${activeUpload}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;