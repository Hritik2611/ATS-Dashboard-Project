import StatusBadge from "./StatusBadge";

function CandidateTable() {
  const candidates = [
    {
      id: 1,
      name: "Rahul Sharma",
      role: "Frontend Developer",
      score: 92,
      status: "Selected",
    },
    {
      id: 2,
      name: "Priya Singh",
      role: "UI/UX Designer",
      score: 81,
      status: "Interview",
    },
    {
      id: 3,
      name: "Aman Verma",
      role: "Backend Developer",
      score: 67,
      status: "Rejected",
    },
    {
      id: 4,
      name: "Sneha Patel",
      role: "React Developer",
      score: 88,
      status: "Interview",
    },
  ];

  return (
    <div className="bg-white mt-8 rounded-2xl shadow-md overflow-hidden">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-slate-700">Recent Candidates</h2>
      </div>

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
              <tr
                key={candidate.id}
                className="border-b hover:bg-slate-50 transition"
              >
                <td className="py-4 px-6 font-medium text-slate-700">
                  {candidate.name}
                </td>

                <td className="py-4 px-6 text-slate-600">{candidate.role}</td>

                <td className="py-4 px-6">{candidate.score}%</td>

                <td className="py-4 px-6">
                  <StatusBadge status={candidate.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CandidateTable;
