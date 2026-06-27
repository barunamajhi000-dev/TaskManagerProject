
function FilterBar({filter,setFilter}) {
  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => setFilter("All")}
        className={
          filter === "All"
            ? "bg-indigo-600 text-white px-5 py-1 rounded-lg"
            : "bg-gray-900 text-gray-300 hover:cursor-pointer px-5 py-1 rounded-lg"
        }
        // className="bg-indigo-600 text-white px-4 py-2 rounded-lg"
      >
        All
      </button>

      {/* <button
        className="bg-gray-900 text-gray-300 hover:cursor-pointer px-4 py-2 rounded-lg"
        onClick={() => setFilter("HightPriority")}
      >
        High Priority
      </button> */}

      <button
        onClick={() => setFilter("Pending")}
        className={
          filter === "Pending"
            ? "bg-indigo-600 text-white px-4 py-2 rounded-lg"
            : "bg-gray-900 text-gray-300 hover:cursor-pointer px-4 py-2 rounded-lg"
        }
      >
        Pending
      </button>

      <button
        onClick={() => setFilter("Completed")}
        className={
          filter === "Completed"
            ? "bg-indigo-600 text-white px-4 py-2 rounded-lg"
            : "bg-gray-900 text-gray-300 hover:cursor-pointer px-4 py-2 rounded-lg"
        }
      >
        Completed
      </button>
    </div>
  );
}

export default FilterBar;
