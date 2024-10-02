import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import TypingEffect from '../../componenets/TypingEffect';
import styles from './JobCard.module.css';


interface JobMatch {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  similarityScore: string;
  llm_response?: string; // Add llm_response field
}

const formatLLMResponse = (response: string) => {
  const sections = response.split('\n\n');
  return sections.map(section => {
    const [title, ...content] = section.split('\n');
    const formattedContent = content.map(line => {
      if (line.trim().startsWith('-') || line.trim().startsWith('*')) {
        return `<li>${line.trim().substring(1).trim()}</li>`;
      }
      return `<p>${line.trim()}</p>`;
    }).join('');
    
    return `<h3 class="text-lg font-semibold mt-4 mb-2">${title.trim()}</h3><ul class="list-disc list-inside">${formattedContent}</ul>`;
  }).join('');
};

const JobCard: React.FC<{ job: JobMatch }> = ({ job }) => (
  <div className="flex overflow-hidden flex-col gap-6 p-6 w-full bg-white rounded-xl border border-solid border-zinc-200 max-md:px-5 max-md:max-w-full mb-4">
    <div className="flex flex-wrap gap-10 justify-between items-center w-full max-md:max-w-full">
      <div className="flex gap-4 items-center self-stretch my-auto min-w-[240px]">
        <div className="flex flex-col self-stretch my-auto min-w-[240px]">
          <div className="flex gap-2 justify-center items-start self-start">
            <div className="flex flex-col justify-center">
              <div className="text-lg font-medium leading-loose text-zinc-900">{job.title}</div>
              <div className="text-sm leading-none text-zinc-500">{job.company}</div>
            </div>
          </div>
          <div className="flex gap-4 items-center mt-2 text-sm leading-none text-zinc-500">
            <div className="flex gap-1.5 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4888f631ba56a7b45cf7d55093b50fe98328c3dab3907f491377eb5d6f9a217?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[22px]"
                alt="Location icon"
              />
              <div className="self-stretch my-auto">{job.location}</div>
            </div>
            <div className="flex gap-1 items-center self-stretch my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/606ae7adcae62e76ed3a227305894cce6edacde4c70b8df60335bc40fac6c4f4?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
                className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
                alt="Salary icon"
              />
              <div className="self-stretch my-auto">{job.salary}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-stretch px-4 py-3.5 my-auto text-center text-indigo-900 rounded-xl border border-indigo-900 border-solid min-h-[66px] w-[174px]">
        <div className="text-lg font-bold leading-none">{job.similarityScore}</div>
        <div className="self-center mt-2 text-xs font-medium leading-none">
          Similarity Score
        </div>
      </div>
    </div>
    {job.llm_response && (
      <div className="mt-4 text-sm text-gray-700">
        <h2 className="text-xl font-semibold mb-2">Job Match Analysis:</h2>
        <div className={styles.analysisContent}>
          <TypingEffect 
            text={formatLLMResponse(job.llm_response)} 
            speed={30} 
            html={true}
          />
        </div>
      </div>
    )}
    <div className="flex gap-3 items-start mt-8 justify-end">
      <Link
        to={`/candidate/jobs/${job.id}`} 
        className="flex overflow-hidden gap-2 justify-center items-center py-2 px-3.5 text-sm font-medium leading-none text-white bg-indigo-900 rounded-lg border border-solid shadow-xl border-white border-opacity-30 w-[126px]"
      > 
        View details
      </Link>
    </div>
  </div>
);


const JobsPage: React.FC = () => {
  const [jobMatches, setJobMatches] = useState<JobMatch[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobMatches = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get<JobMatch[]>('http://localhost:5000/api/job_matches');
        setJobMatches(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching job matches:', err);
        setError('Failed to fetch job matches. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchJobMatches();
  }, []);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <div className="flex gap-6 items-center p-6">
      <div className="flex flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
        {jobMatches.length > 0 ? (
          jobMatches.map((job, index) => (
            <JobCard 
              key={job.id} 
              job={job}
            />
          ))
        ) : (
          <div className="text-center">No job matches found.</div>
        )}
      </div>
    </div>
  );
};

export default JobsPage;
