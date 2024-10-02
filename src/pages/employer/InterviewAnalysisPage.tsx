import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface InterviewAnalysis {
  candidate_name: string;
  candidate_title: string;
  analysis: {
    confidence_and_skills: string;
    strengths: string;
    areas_for_improvement: string;
  };
}

const InterviewAnalysisPage: React.FC = () => {
  const [analysis, setAnalysis] = useState<InterviewAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnalysis = async () => {
      try {
        setIsLoading(true);
        console.log('Fetching analysis for most recent interview script');
        const response = await axios.get<InterviewAnalysis>('http://localhost:5000/api/latest-interview-analysis');
        console.log('Received response:', response.data);
        setAnalysis(response.data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching interview analysis:', err);
        setError('Failed to fetch interview analysis. Please try again later.');
        setIsLoading(false);
      }
    };

    fetchAnalysis();
  }, []);

  const handleBackClick = () => {
    navigate('/employer/job-post'); // Adjust this path as needed
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!analysis) {
    return <div className="text-center">No analysis found.</div>;
  }

  return (
    <div className="flex flex-col p-6 bg-gray-100 min-h-screen">
      <button
        onClick={handleBackClick}
        className="flex gap-2 items-center self-start text-sm font-medium leading-none text-zinc-600 mb-4"
      >
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/470d75cd6735604346933c81a4c2f0434c8a3924301fe9a988b375400faeb950?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Back arrow"
        />
        <span>Back to Applicants</span>
      </button>

      <div className="flex flex-col mt-5 w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col gap-6 p-6 w-full bg-white rounded-xl shadow-sm">
            <div className="text-lg font-semibold leading-none text-indigo-900">
              Interview Analysis for {analysis.candidate_name} ({analysis.candidate_title})
            </div>
          </div>
        </div>

        <AnalysisSection
          title="Confidence & Personal Skills:"
          content={analysis.analysis.confidence_and_skills}
        />

        <AnalysisSection
          title="Key Strengths:"
          content={analysis.analysis.strengths}
        />

        <AnalysisSection
          title="Areas for Improvement:"
          content={analysis.analysis.areas_for_improvement}
        />
      </div>
    </div>
  );
};

interface AnalysisSectionProps {
  title: string;
  content: string;
}

const AnalysisSection: React.FC<AnalysisSectionProps> = ({ title, content }) => (
  <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-xl shadow-sm">
    <div className="flex flex-col w-full">
      <div className="text-lg font-semibold leading-none text-indigo-900">
        {title}
      </div>
      <div className="mt-2 text-base leading-6 text-zinc-950">
        {content}
      </div>
    </div>
  </div>
);

export default InterviewAnalysisPage;