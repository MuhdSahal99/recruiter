// src/pages/employer/InterviewAnalysisPage.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

const InterviewAnalysisPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/employer/job-post'); // Adjust this path as needed
  };

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
              Interview Analysis for {/* Add candidate name dynamically if needed */}
            </div>
            <div className="flex gap-3 items-center self-start py-px mt-6 min-h-[66px]">
              <div className="flex flex-col self-stretch my-auto w-16 min-h-[64px]">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/072fd5cb0ba80d5a21150b8effbada24091269b67f07ae8b37c81124e5702849?placeholderIfAbsent=true&apiKey=e8521392b64d4ca28efa899b1eeac3c3&width=2000 2000w"
                  className="object-contain flex-1 w-16 rounded-full aspect-square"
                  alt="Candidate"
                />
              </div>
              <div className="flex flex-col justify-center self-stretch my-auto">
                <div className="text-lg font-medium leading-none text-zinc-950">
                  Mohamed Khalifa
                </div>
                <div className="mt-2 text-sm leading-none text-zinc-500">
                  Product Designer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence & Personal Skills Section */}
        <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-xl shadow-sm">
          <div className="flex flex-col w-full">
            <div className="text-lg font-semibold leading-none text-indigo-900">
              Confidence & Personal Skills:
            </div>
            <div className="mt-2 text-base leading-6 text-zinc-950">
              {/* Dummy content */}
              Twitter is seeking an experienced and innovative Senior UX
              Designer to join our dynamic design team. As a Senior UX Designer
              at Twitter, you will play a pivotal role in shaping intuitive,
              seamless, and delightful experiences for millions of users
              worldwide. You will collaborate closely with product managers,
              engineers, and other key stakeholders to understand user needs,
              define design solutions, and drive product innovation.
              <br />
              In this role, you will take ownership of the entire UX process,
              from user research and ideation to wireframing, prototyping, and
              delivering high-fidelity designs. You will use your expertise to
              guide the design strategy, conduct usability testing, and iterate
              based on insights and data-driven decisions. If you're passionate
              about user-centered design, have a knack for solving complex
              problems, and excel in a fast-paced, collaborative environment, we
              want to hear from you!
            </div>
          </div>
        </div>

        {/* Strengths Section */}
        <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-xl shadow-sm">
          <div className="flex flex-col w-full">
            <div className="text-lg font-semibold leading-none text-indigo-900">
              He Performs Well At The Following:
            </div>
            <div className="mt-2 text-base leading-6 text-zinc-950">
              {/* Dummy content */}
              Twitter is seeking an experienced and innovative Senior UX
              Designer to join our dynamic design team. As a Senior UX Designer
              at Twitter, you will play a pivotal role in shaping intuitive,
              seamless, and delightful experiences for millions of users
              worldwide. You will collaborate closely with product managers,
              engineers, and other key stakeholders to understand user needs,
              define design solutions, and drive product innovation.
              <br />
              In this role, you will take ownership of the entire UX process,
              from user research and ideation to wireframing, prototyping, and
              delivering high-fidelity designs. You will use your expertise to
              guide the design strategy, conduct usability testing, and iterate
              based on insights and data-driven decisions. If you're passionate
              about user-centered design, have a knack for solving complex
              problems, and excel in a fast-paced, collaborative environment, we
              want to hear from you!
            </div>
          </div>
        </div>

        {/* Areas for Improvement Section */}
        <div className="flex flex-col justify-center p-6 mt-6 w-full bg-white rounded-xl shadow-sm">
          <div className="flex flex-col w-full">
            <div className="text-lg font-semibold leading-none text-indigo-900">
              What He Needs to Improve:
            </div>
            <div className="mt-2 text-base leading-6 text-zinc-950">
              {/* Dummy content */}
              Twitter is seeking an experienced and innovative Senior UX
              Designer to join our dynamic design team. As a Senior UX Designer
              at Twitter, you will play a pivotal role in shaping intuitive,
              seamless, and delightful experiences for millions of users
              worldwide. You will collaborate closely with product managers,
              engineers, and other key stakeholders to understand user needs,
              define design solutions, and drive product innovation.
              <br />
              In this role, you will take ownership of the entire UX process,
              from user research and ideation to wireframing, prototyping, and
              delivering high-fidelity designs. You will use your expertise to
              guide the design strategy, conduct usability testing, and iterate
              based on insights and data-driven decisions. If you're passionate
              about user-centered design, have a knack for solving complex
              problems, and excel in a fast-paced, collaborative environment, we
              want to hear from you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewAnalysisPage;
