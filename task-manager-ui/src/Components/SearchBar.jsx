function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className=" mt-10 mb-5">
      <input
        type="text"
        placeholder="🔍 Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-96 bg-slate-900 border border-slate-700 text-white px-4 py-3 rounded-lg outline-none"
      />
    </div>
  );
}

export default SearchBar;
