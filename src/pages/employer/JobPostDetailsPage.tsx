import React from 'react';
import { useNavigate } from 'react-router-dom';
import CandidateCard from '../../componenets/Candidatecard';

const JobPostDetailsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/employer');
  };
  

  const candidates = [
    {
      id: '1',
      name: 'Mohamed Khalifa',
      title: 'Product Designer',
      description: 'Mohamed Khalifa is a suitable candidate for the Data Scientist role because...',
      matchingScore: 88.6,
      imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8338af4c3896ac5eda00af734a541c80f761a4600b477a39f7b91e3ef44b9154?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3'
    },
    // Add more candidates as needed
  ];

  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <button onClick={handleBackClick} className="flex gap-2 items-center self-start text-sm font-medium leading-none text-zinc-600">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/470d75cd6735604346933c81a4c2f0434c8a3924301fe9a988b375400faeb950?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Back arrow"
        />
        <span>Back to all job posts</span>
      </button>

      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col items-start p-6 w-full bg-white rounded-xl">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/16288a5e44da49479d0b570644ec48372273c2adecbc0486681e0a0666990942?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                className="w-10 h-10 mr-3"
                alt="Company logo"
              />
              <div>
                <h2 className="text-2xl font-semibold text-zinc-950">Senior UX Designer</h2>
                <p className="text-sm text-zinc-500">ADNOC</p>
              </div>
            </div>
            <button className="px-4 py-2 text-white bg-indigo-900 rounded-lg">Edit Job</button>
          </div>
          <div className="flex mt-6 space-x-8">
            <JobInfoItem icon="🏷️" title="Job Reference Code" value="70HK661" />
            <JobInfoItem icon="📅" title="Job Posted" value="1 Sep, 2024" />
            <JobInfoItem icon="⏳" title="Job expire in" value="30 Sep, 2024" />
            <JobInfoItem icon="🎓" title="Education" value="Bachelor is a must" />
          </div>
          <div className="flex mt-6 space-x-8">
            <JobInfoItem icon="💰" title="Salary" value="AED 50k-80k/month" />
            <JobInfoItem icon="📍" title="Location" value="Abu Dhabi, UAE" />
            <JobInfoItem icon="⏱️" title="Experience" value="2-3 Years" />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 items-start px-6 pt-2 w-full text-sm font-medium bg-white border-t border-gray-200 text-zinc-500">
          <div className="gap-1.5 self-stretch py-2">Overview</div>
          <div className="gap-1.5 self-stretch py-2 border-b-2 border-sky-600 text-zinc-950">Applicants</div>
          <div className="gap-1.5 self-stretch py-2">Settings</div>
        </div>

        <div className="flex flex-col mt-8 w-full">
          <div className="flex justify-between items-center">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border rounded-md w-64"
            />
            <div className="flex space-x-4">
              <select className="p-2 border rounded-md">
                <option>Sort by</option>
              </select>
              <button className="px-4 py-2 bg-white border rounded-md">Filters</button>
            </div>
          </div>

          <div className="flex flex-col mt-6 w-full">
            <h2 className="text-xl font-semibold tracking-tight leading-relaxed text-indigo-900">
              Top 3 Candidates
              </h2>
            {candidates.map((candidate) => (
              <CandidateCard 
                key={candidate.id} 
                id={candidate.id}
                name={candidate.name}
                title={candidate.title}
                description={candidate.description}
                matchingScore={candidate.matchingScore}
                imageUrl={candidate.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const JobInfoItem: React.FC<{ icon: string; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="flex flex-col">
    <span className="text-2xl mb-2">{icon}</span>
    <span className="text-xs uppercase text-zinc-500">{title}</span>
    <span className="text-sm font-medium text-zinc-900">{value}</span>
  </div>
);

export default JobPostDetailsPage;