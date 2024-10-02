import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UploadPage from './pages/Candidate/UploadPage';
import JobsPage from './pages/Candidate/JobPage';
import JobDetailsPage from './pages/Candidate/JobDeatilsPage';
import HomePage from './pages/Homepage';
import CandidateLayout from './Layouts/CandidateLayout';
import EmployerLayout from './Layouts/EmployerLayout';
import MyJobPostsPage from './pages/employer/JobPostDetailsPage';
import CandidateDetailsPage from './pages/employer/CandidateDetailsPage';
import InterviewAnalysisPage from './pages/employer/InterviewAnalysisPage';
import CandidateUpload from './pages/Candidate/CandidateUpload';
import EmployerUpload from './pages/employer/EmployerUpload';



// Import other pages as needed

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/candidate" element={<CandidateLayout />}>
          <Route path="upload" element={<CandidateUpload />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobDetailsPage />} />
        </Route>
        <Route path="/employer" element={<EmployerLayout />}>
          <Route path="job-post" element={<MyJobPostsPage />} />
          <Route path="candidate/:id" element={<CandidateDetailsPage />} />
          <Route path="interview-analysis" element={<InterviewAnalysisPage />} />
          <Route path="upload" element={<EmployerUpload />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;