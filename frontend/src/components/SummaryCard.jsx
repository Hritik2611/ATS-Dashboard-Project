function SummaryCard({ title, value, color }) {
  return (

    <div
      className={`p-6 rounded-2xl shadow-md text-white ${color} hover:scale-105 transition-all duration-300`}
    >

      <h2 className="text-lg font-medium opacity-90">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-4">
        {value}
      </p>

    </div>
  );
}

export default SummaryCard;