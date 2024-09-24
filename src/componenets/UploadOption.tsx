import React from 'react';

interface UploadOptionProps {
  icon: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const UploadOption: React.FC<UploadOptionProps> = ({ icon, text, isActive, onClick }) => {
  return (
    <div 
      className={`flex flex-col flex-1 shrink items-center p-4 basis-0 cursor-pointer ${isActive ? 'rounded-xl bg-blue-600 bg-opacity-10' : ''}`}
      onClick={onClick}
    >
      <img
        loading="lazy"
        src={icon}
        className="object-contain aspect-square w-[38px]"
        alt={`${text} icon`}
      />
      <div className="mt-3" dangerouslySetInnerHTML={{ __html: text.replace(' ', '<br />') }} />
    </div>
  );
};

export default UploadOption;