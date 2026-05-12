import { useEffect, useState } from "react";
import { useParams } from "react-router";

import Layout from "../components/Layout";
import StatusBadge from "../components/StatusBadge";

function CandidateDetails() {
  const { id } = useParams();

  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Candidate

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const response = await fetch("/data/candidates.json");

        const data = await response.json();

        const foundCandidate = data.find((item) => item.id === Number(id));

        setCandidate(foundCandidate);
      } catch (error) {
        console.log("Error fetching candidate:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidate();
  }, [id]);

  // Loading State

  if (loading) {
    return (
      <Layout>
        <div className="text-center text-2xl font-bold mt-20 text-slate-600">
          Loading Candidate...
        </div>
      </Layout>
    );
  }

  // Candidate Not Found

  if (!candidate) {
    return (
      <Layout>
        <div className="text-center text-2xl font-bold text-red-500 mt-20">
          Candidate Not Found
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

          <div className="flex items-center gap-6">
            {/* Avatar */}

            <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center text-4xl font-bold">
              {candidate.name.charAt(0)}
            </div>

            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                {candidate.name}
              </h1>

              <p className="text-slate-500 mt-2">{candidate.role}</p>

              <div className="mt-4">
                <StatusBadge status={candidate.status} />
              </div>
            </div>
          </div>

          {/* Right */}

          <div className="bg-slate-100 rounded-2xl px-8 py-6 text-center">
            <p className="text-slate-500">Candidate Score</p>

            <h2 className="text-5xl font-bold text-blue-600 mt-2">
              {candidate.score}%
            </h2>
          </div>
        </div>
      </div>

      {/* Details */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        {/* Left */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Candidate Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-500">Experience</p>

              <h3 className="font-semibold text-slate-800 mt-1">
                {candidate.experience}
              </h3>
            </div>

            <div>
              <p className="text-slate-500">Role</p>

              <h3 className="font-semibold text-slate-800 mt-1">
                {candidate.role}
              </h3>
            </div>
          </div>

          {/* Skills */}

          <div className="mt-8">
            <h2 className="text-xl font-bold text-slate-800 mb-4">Skills</h2>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                React
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                JavaScript
              </span>

              <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>

        {/* Right */}

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Actions</h2>

          <div className="flex flex-col gap-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl transition">
              Download Resume
            </button>

            <button className="bg-green-600 hover:bg-green-500 text-white py-3 rounded-xl transition">
              Schedule Interview
            </button>

            <button className="bg-red-600 hover:bg-red-500 text-white py-3 rounded-xl transition">
              Reject Candidate
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default CandidateDetails;
