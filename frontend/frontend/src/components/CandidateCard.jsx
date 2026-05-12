import StatusBadge from "./StatusBadge";
import { Link } from "react-router";

function CandidateCard({ id, name, role, experience, score, status }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
            {name.charAt(0)}
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-800">{name}</h2>
            <p className="text-slate-500 text-sm">{role}</p>
          </div>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="mt-6 space-y-3 text-slate-600">
        <p>💼 Experience: {experience}</p>

        <p>🎯 Score: {score}%</p>
      </div>

      <Link to={`/candidateDetails/${id}`}>
        <button className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition">
          View Profile
        </button>
      </Link>
    </div>
  );
}

export default CandidateCard;
