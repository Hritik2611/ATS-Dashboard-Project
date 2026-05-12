import { Routes, Route, Link } from "react-router";
import { Navigate } from "react-router";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import JobListing from "./pages/JobListing.jsx";
import CandidateListing from "./pages/CandidateListing.jsx";
import CandidateDetails from "./pages/CandidateDetails.jsx";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/jobListing"} element={<JobListing />} />
        <Route path={"/candidateListing"} element={<CandidateListing />} />
        <Route path="/candidateDetails/:id" element={<CandidateDetails />} />
      </Routes>
    </>
  );
}

export default App;
