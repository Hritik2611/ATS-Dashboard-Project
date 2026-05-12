import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Layout from "../components/Layout";

function JobDetails() {
  const { id } = useParams();

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Job

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch("/data/jobs.json");

        const data = await response.json();

        const foundJob = data.find((item) => item.id === Number(id));

        setJob(foundJob);
      } catch (error) {
        console.log("Error fetching job:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  // Loading

  if (loading) {
    return (
      <Layout>
        <div className="text-center text-2xl font-bold mt-20 text-slate-600">
          Loading Job...
        </div>
      </Layout>
    );
  }

  // Not Found

  if (!job) {
    return (
      <Layout>
        <div className="text-center text-2xl font-bold text-red-500 mt-20">
          Job Not Found
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}

      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left */}

          <div>
            <h1 className="text-4xl font-bold text-slate-800">{job.title}</h1>

            <p className="text-slate-500 mt-3 text-lg">{job.company}</p>

            <div className="flex flex-wrap gap-3 mt-5">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                📍 {job.location}
              </span>

              <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-medium">
                💼 {job.type}
              </span>
            </div>
          </div>

          {/* Right */}

          <div className="bg-slate-100 rounded-2xl px-8 py-6 text-center">
            <p className="text-slate-500">Salary Package</p>

            <h2 className="text-4xl font-bold text-blue-600 mt-2">
              {job.salary}
            </h2>
          </div>
        </div>
      </div>

      {/* Main Section */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Job Description
          </h2>

          <p className="text-slate-600 leading-8">{job.description}</p>

          {/* Skills */}

          <div className="mt-10">
            <h2 className="text-xl font-bold text-slate-800 mb-4">
              Required Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {job.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Job Information
          </h2>

          <div className="space-y-5">
            <div>
              <p className="text-slate-500">Experience</p>

              <h3 className="font-semibold text-slate-800 mt-1">
                {job.experience}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">Applicants</p>

              <h3 className="font-semibold text-slate-800 mt-1">
                {job.applicants}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">Employment Type</p>

              <h3 className="font-semibold text-slate-800 mt-1">{job.type}</h3>
            </div>
          </div>

          {/* Buttons */}

          <div className="flex flex-col gap-4 mt-10">
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl transition">
              Apply Now
            </button>

            <button className="bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition">
              View Applicants
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default JobDetails;
