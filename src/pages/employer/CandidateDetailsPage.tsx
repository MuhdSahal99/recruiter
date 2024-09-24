import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CandidateDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const handleBackClick = () => {
    navigate('/employer/job-post');
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <button onClick={handleBackClick} className="flex gap-2 items-center self-start text-sm font-medium leading-none text-zinc-600">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/470d75cd6735604346933c81a4c2f0434c8a3924301fe9a988b375400faeb950?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Back arrow"
        />
        <span>Back to Applicants</span>
      </button>

      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col gap-6 p-6 w-full bg-white rounded-xl shadow-sm">
          {/* Candidate header */}
          <div className="flex gap-3 items-center self-start py-px min-h-[66px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
              className="object-contain w-16 h-16 rounded-full"
              alt="Candidate"
            />
            <div>
              <div className="text-lg font-medium leading-none text-zinc-950">Mohamed Khalifa</div>
              <div className="text-sm leading-none text-zinc-500">Product Designer</div>
            </div>
          </div>

          {/* How Well Do You Fit This Role? section */}
          <div className="flex flex-wrap gap-4 items-start w-full">
            {/* ... (include the content for this section) ... */}
          </div>

          {/* Strengths and Weaknesses section */}
          <div className="flex flex-wrap gap-8 items-center w-full">
            {/* ... (include the content for this section) ... */}
          </div>
        </div>

        {/* Why he is a good fit for the role? section */}
        <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-xl shadow-sm">
          {/* ... (include the content for this section) ... */}
        </div>
      </div>
    </div>
  );
};

export default CandidateDetailsPage;