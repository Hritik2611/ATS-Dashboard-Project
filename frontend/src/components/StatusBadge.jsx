function StatusBadge({ status }) {
  const statusStyles = {
    Selected: "bg-green-100 text-green-700",
    Rejected: "bg-red-100 text-red-700",
    Interview: "bg-yellow-100 text-yellow-700",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;
