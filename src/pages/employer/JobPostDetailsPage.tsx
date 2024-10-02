import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CandidateCard from '../../componenets/Candidatecard';

interface JobPostDetails {
  jobTitle: string;
  companyName: string;
  candidates: Array<{
    id: string;
    name: string;
    title: string;
    llm_response: string;
    matchingScore: number;
  }>;
}

const JobPostDetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState<JobPostDetails | null>(null);

  useEffect(() => {
    const fetchJobPostDetails = async () => {
      try {
        const response = await axios.get<JobPostDetails>('http://localhost:5000/api/job_post_details');
        setJobDetails(response.data);
      } catch (error) {
        console.error('Error fetching job post details:', error);
      }
    };
    fetchJobPostDetails();
  }, []);

  const handleBackClick = () => {
    navigate('/employer');
  };

  const handleDownloadCV = async (candidateId: string) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/download_cv/${candidateId}`, {
        responseType: 'blob',
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `candidate_${candidateId}_cv.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('Failed to download CV. Please try again.');
    }
  };

  if (!jobDetails) {
    return <div>Loading...</div>;
  }

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
                <h2 className="text-2xl font-semibold text-zinc-950">{jobDetails.jobTitle}</h2>
                <p className="text-sm text-zinc-500">{jobDetails.companyName}</p>
              </div>
            </div>
            <button className="px-4 py-2 text-white bg-indigo-900 rounded-lg">Edit Job</button>
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
            {jobDetails.candidates.map((candidate) => (
              <CandidateCard 
                key={candidate.id}
                id={candidate.id}
                name={candidate.name}
                title={candidate.title}
                llm_response={candidate.llm_response}
                matchingScore={candidate.matchingScore}
                onDownloadCV={() => handleDownloadCV(candidate.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPostDetailsPage;