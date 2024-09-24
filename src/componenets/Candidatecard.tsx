// CandidateCard.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CandidateCardProps {
  id: string;
  name: string;
  title: string;
  description: string;
  matchingScore: number;
  imageUrl: string;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ id, name, title, description, matchingScore, imageUrl }) => {
  const navigate = useNavigate();

  const handleCandidateDetails = () => {
    // Update the navigation path to include '/employer'
    navigate(`/employer/candidate/${id}`);
  };

  return (
    <div className="flex flex-col p-6 w-full bg-white rounded-xl border border-solid border-slate-200 mt-4">
      <div className="flex justify-between items-start w-full">
        <div className="flex flex-col flex-1 min-w-[240px] max-w-[70%]">
          <div className="flex gap-3 items-center">
            <img
              loading="lazy"
              src={imageUrl}
              className="object-contain w-10 h-10 rounded-full"
              alt={name}
            />
            <div className="flex flex-col justify-center text-sm leading-none">
              <div className="font-medium text-zinc-950">{name}</div>
              <div className="text-zinc-500">{title}</div>
            </div>
          </div>
          <div className="mt-4 text-sm leading-5 text-zinc-950">
            {description}
          </div>
        </div>
        <div className="flex flex-col items-end">
          <div className="text-center mb-4">
            <div className="relative w-[179px] h-[179px]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6e954908620b9c0a7c2349bac3f42a0f34010fb985358fc8327a43bb9a4daf8?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                className="object-cover absolute inset-0 w-full h-full"
                alt="Matching score background"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-2xl font-semibold leading-tight text-zinc-950">
                  {matchingScore}%
                </div>
                <div className="mt-1.5 text-sm font-medium leading-none text-zinc-600">
                  Matching Score
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full">
            <button className="flex justify-center items-center px-3 py-2 text-sm font-medium text-zinc-950 rounded-lg border border-solid border-neutral-900 border-opacity-40">
              <span>Download CV</span>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7a8e258c489e6315a4a714924328bf99a1b9ab59fdd76764f3ba39a63850041d?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                className="ml-2 w-4 h-4"
                alt="Download icon"
              />
            </button>
            <button 
              onClick={handleCandidateDetails}
              className="px-3 py-2 text-sm font-medium text-white bg-indigo-900 rounded-lg border border-solid shadow-xl border-white border-opacity-30"
            >
              Candidate details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
