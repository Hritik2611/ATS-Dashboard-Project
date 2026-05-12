import { Link } from "react-router";

function JobCard({ id, title, company, location, applicants, type }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-slate-100">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>

          <p className="text-slate-500 mt-1">{company}</p>
        </div>

        <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">
          {type}
        </span>
      </div>

      <div className="mt-6 flex flex-col gap-2 text-slate-600">
        <p>📍 {location}</p>

        <p>👨‍💻 {applicants} Applicants</p>
      </div>

      <Link to={`/jobDetails/${id}`}>
        <button className="mt-6 w-full bg-slate-900 hover:bg-slate-800 text-white py-3 rounded-xl transition">
          View Details
        </button>
      </Link>
    </div>
  );
}

export default JobCard;
