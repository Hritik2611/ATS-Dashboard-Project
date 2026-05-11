function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}) {

  return (

    <div className="flex items-center justify-center gap-3 mt-10 flex-wrap">

      {/* Previous */}

      <button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
      >
        Previous
      </button>

      {/* Page Numbers */}

      {[...Array(totalPages)].map((_, index) => (

        <button
          key={index}
          onClick={() => setCurrentPage(index + 1)}
          className={`w-10 h-10 rounded-lg font-medium transition
                
            ${
              currentPage === index + 1
                ? "bg-blue-600 text-white"
                : "bg-slate-200 hover:bg-slate-300"
            }
                
          `}
        >
          {index + 1}
        </button>

      ))}

      {/* Next */}

      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-slate-200 hover:bg-slate-300 disabled:opacity-50"
      >
        Next
      </button>

    </div>
  );
}

export default Pagination;