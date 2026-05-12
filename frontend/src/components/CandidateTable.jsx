import { useEffect, useState } from "react";
import { Link } from "react-router";

import StatusBadge from "./StatusBadge";

function CandidateTable() {
  const [candidates, setCandidates] = useState([]);

  // Fetch Candidates

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch("/data/candidates.json");

        const data = await response.json();

        setCandidates(data.slice(0, 5));
      } catch (error) {
        console.log("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, []);

  return (
    <div className="bg-white mt-8 rounded-2xl shadow-md overflow-hidden">
      {/* Header */}

      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-slate-700">Recent Candidates</h2>
      </div>

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <thead className="bg-slate-100">
            <tr>
              <th className="text-left py-4 px-6 text-slate-600">Candidate</th>

              <th className="text-left py-4 px-6 text-slate-600">Role</th>

              <th className="text-left py-4 px-6 text-slate-600">Score</th>

              <th className="text-left py-4 px-6 text-slate-600">Status</th>
            </tr>
          </thead>

          <tbody>
            {candidates.map((candidate) => (
              <Link
                key={candidate.id}
                to={`/candidateDetails/${candidate.id}`}
                className="contents"
              >
                <tr className="border-b hover:bg-slate-50 transition cursor-pointer">
                  <td className="py-4 px-6 font-medium text-slate-700">
                    {candidate.name}
                  </td>

                  <td className="py-4 px-6 text-slate-600">{candidate.role}</td>

                  <td className="py-4 px-6">{candidate.score}%</td>

                  <td className="py-4 px-6">
                    <StatusBadge status={candidate.status} />
                  </td>
                </tr>
              </Link>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateTable;
