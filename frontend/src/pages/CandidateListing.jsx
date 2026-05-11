import { useState } from "react";

import Layout from "../components/Layout";
import CandidateCard from "../components/CandidateCard";

import candidatesData from "../data/candidatesData";
import Pagination from "../components/Pagination";

function CandidateListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const candidatesPerPage = 6;
  // Filter Logic

  const filteredCandidates = candidatesData.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : candidate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const lastCandidateIndex = currentPage * candidatesPerPage;

  const firstCandidateIndex = lastCandidateIndex - candidatesPerPage;

  const currentCandidates = filteredCandidates.slice(
    firstCandidateIndex,
    lastCandidateIndex,
  );

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);

  return (
    <Layout>
      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Candidates</h1>

          <p className="text-slate-500 mt-2">
            Manage and review all applicants.
          </p>
        </div>

        {/* Controls */}

        <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
          {/* Search */}

          <input
            type="text"
            placeholder="Search candidates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-72"
          />

          {/* Filter */}

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400 bg-white"
          >
            <option value="All">All Status</option>

            <option value="Selected">Selected</option>

            <option value="Interview">Interview</option>

            <option value="Rejected">Rejected</option>
          </select>
        </div>
      </div>

      {/* Candidate Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCandidates.length > 0 ? (
          currentCandidates.map((candidate) => (
            <CandidateCard
              id={candidate.id}
              key={candidate.id}
              name={candidate.name}
              role={candidate.role}
              experience={candidate.experience}
              score={candidate.score}
              status={candidate.status}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-10 text-slate-500 text-lg">
            No candidates found.
          </div>
        )}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  );
}

export default CandidateListing;
