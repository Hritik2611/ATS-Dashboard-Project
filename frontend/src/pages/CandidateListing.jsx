import { useEffect, useState } from "react";

import Layout from "../components/Layout";
import CandidateCard from "../components/CandidateCard";
import Pagination from "../components/Pagination";

function CandidateListing() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [candidatesData, setCandidatesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Pagination States

  const [currentPage, setCurrentPage] = useState(1);

  const candidatesPerPage = 6;

  // Fetch Candidates

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch("/data/candidates.json");

        const data = await response.json();

        setCandidatesData(data);
      } catch (error) {
        console.log("Error fetching candidates:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  // Filter Logic

  const filteredCandidates = candidatesData.filter((candidate) => {
    const matchesSearch =
      candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.role.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ? true : candidate.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // Pagination Logic

  const lastCandidateIndex = currentPage * candidatesPerPage;

  const firstCandidateIndex = lastCandidateIndex - candidatesPerPage;

  const currentCandidates = filteredCandidates.slice(
    firstCandidateIndex,
    lastCandidateIndex,
  );

  const totalPages = Math.ceil(filteredCandidates.length / candidatesPerPage);

  // Loading UI

  if (loading) {
    return (
      <Layout>
        <div className="text-center text-2xl font-bold mt-20 text-slate-600">
          Loading Candidates...
        </div>
      </Layout>
    );
  }

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
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="px-4 py-3 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-72"
          />

          {/* Filter */}

          <select
            value={statusFilter}
            onChange={(e) => {
              setStatusFilter(e.target.value);
              setCurrentPage(1);
            }}
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
        {currentCandidates.length > 0 ? (
          currentCandidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              id={candidate.id}
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

      {/* Pagination */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  );
}

export default CandidateListing;
