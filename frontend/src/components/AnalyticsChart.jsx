import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";

function AnalyticsChart() {

  const data = [
    {
      name: "Selected",
      value: 12,
    },
    {
      name: "Interview",
      value: 32,
    },
    {
      name: "Rejected",
      value: 18,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#eab308",
    "#ef4444",
  ];

  return (

    <div className="bg-white rounded-2xl shadow-md p-6 mt-8">

      <h2 className="text-2xl font-bold text-slate-800 mb-6">
        Hiring Analytics
      </h2>

      <div className="w-full h-[350px]">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={110}
              dataKey="value"
              label
            >

              {data.map((entry, index) => (

                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />

              ))}

            </Pie>

            <Tooltip />

            <Legend />

          </PieChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default AnalyticsChart;