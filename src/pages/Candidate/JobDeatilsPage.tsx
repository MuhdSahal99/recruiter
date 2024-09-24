import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ClipLoader from 'react-spinners/ClipLoader'; // Example spinner

const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [fitAnalysis, setFitAnalysis] = useState<any>(null); // Separate state for fit analysis
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5000/api/job_details/${id}`);
        setJobDetails(response.data.analysis.job_details);
        setFitAnalysis(response.data.analysis.fit_analysis);
      } catch (err) {
        console.error('Error fetching job details:', err);
        setError('Failed to fetch job details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, [id]);

  const handleBackClick = () => {
    navigate('/candidate/jobs');
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const renderDetail = (label: string, value: any) => {
    return (
      <p>
        <strong>{label}:</strong> {value || 'Not specified'}
      </p>
    );
  };

  return (
    <div className="flex flex-col p-6 bg-gray-100">
      <button 
        onClick={handleBackClick}
        className="flex gap-2 items-center text-sm font-medium leading-none text-zinc-600 mb-4 self-start"
      >
        <span className="self-stretch my-auto">Back to jobs</span>
      </button>
  
      {jobDetails ? (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Job Details</h2>
          {renderDetail("Title", jobDetails.job_title)}
          {renderDetail("Company", jobDetails.company_name)}
          {renderDetail("Location", jobDetails.location)}
          {renderDetail("Salary", jobDetails.salary)}
          {renderDetail("Key Responsibilities", jobDetails.key_responsibilities)}
        </div>
      ) : (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
          <p>No job details available.</p>
        </div>
      )}

      {fitAnalysis ? (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4">How Well Do You Fit This Role?</h2>
          {renderDetail("Overall Suitability", fitAnalysis.overall_suitability_score)}
          {renderDetail("Strengths", fitAnalysis.candidate_strengths)}
          {renderDetail("Areas for Improvement", fitAnalysis.areas_for_improvement)}
          {renderDetail("Detailed Analysis", fitAnalysis.detailed_analysis)}
        </div>
      ) : (
        <div className="mt-6 p-6 bg-white rounded-xl shadow-sm">
          <p>No fit analysis available.</p>
        </div>
      )}
    </div>
  );
};

export default JobDetailsPage;
