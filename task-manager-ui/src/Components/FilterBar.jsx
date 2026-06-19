function FilterBar() {
  return (
    <div className="flex flex-wrap gap-3 mt-8">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg">
        All
      </button>

      <button className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg">
        High Priority
      </button>

      <button className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg">
        In Progress
      </button>

      <button className="bg-gray-900 text-gray-300 px-4 py-2 rounded-lg">
        Completed
      </button>
    </div>
  );
}

export default FilterBar;
