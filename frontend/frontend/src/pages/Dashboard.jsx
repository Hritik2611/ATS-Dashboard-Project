import Layout from "../components/Layout";
import SummaryCard from "../components/SummaryCard";
import CandidateTable from "../components/CandidateTable";
import AnalyticsChart from "../components/AnalyticsChart";

function Dashboard() {
  const summaryData = [
    {
      title: "Total Jobs",
      value: 24,
      color: "bg-blue-600",
    },
    {
      title: "Candidates",
      value: 148,
      color: "bg-purple-600",
    },
    {
      title: "Interviews",
      value: 32,
      color: "bg-green-600",
    },
    {
      title: "Selected",
      value: 12,
      color: "bg-orange-500",
    },
  ];

  return (
    <Layout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Dashboard</h1>

        <p className="text-slate-500 mt-2">
          Monitor jobs and candidates performance.
        </p>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryData.map((item, index) => (
          <SummaryCard
            key={index}
            title={item.title}
            value={item.value}
            color={item.color}
          />
        ))}
      </div>

      <CandidateTable />

      <AnalyticsChart />
    </Layout>
  );
}

export default Dashboard;
