import { useState } from "react";

import Layout from "../components/Layout";
import JobCard from "../components/JobCard";
import jobsData from "../data/jobsData";

function JobListing() {
  const [searchTerm, setSearchTerm] = useState("");

  // Search Logic

  const filteredJobs = jobsData.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Layout>
      {/* Header */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Job Listings</h1>

          <p className="text-slate-500 mt-2">
            Manage all available job openings.
          </p>
        </div>

        {/* Search */}

        <input
          type="text"
          placeholder="Search jobs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400 w-full md:w-72"
        />
      </div>

      {/* Job Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              id={job.id}
              key={job.id}
              title={job.title}
              company={job.company}
              location={job.location}
              applicants={job.applicants}
              type={job.type}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-slate-500 text-lg">
            No jobs found.
          </div>
        )}
      </div>
    </Layout>
  );
}

export default JobListing;
