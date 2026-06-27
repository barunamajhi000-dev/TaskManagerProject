function Shimmer() {
  return (
    <div className="animate-pulse">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
          >
            <div className="h-5 w-24 bg-gray-700 rounded mb-6"></div>

            <div className="flex justify-between items-center">
              <div className="h-10 w-12 bg-gray-700 rounded"></div>

              <div className="w-14 h-14 rounded-xl bg-gray-700"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Filter + Search */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-4">
          <div className="h-12 w-20 bg-gray-700 rounded-xl"></div>
          <div className="h-12 w-24 bg-gray-700 rounded-xl"></div>
          <div className="h-12 w-28 bg-gray-700 rounded-xl"></div>
        </div>

        <div className="h-12 w-96 bg-gray-700 rounded-xl"></div>
      </div>

      {/* Task Cards */}
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-5"
        >
          <div className="flex justify-between">
            <div className="flex gap-4 w-full">
              <div className="w-6 h-6 bg-gray-700 rounded"></div>

              <div className="flex-1">
                <div className="h-6 w-64 bg-gray-700 rounded mb-4"></div>

                <div className="h-4 w-96 bg-gray-700 rounded mb-5"></div>

                <div className="flex gap-4">
                  <div className="h-8 w-24 bg-gray-700 rounded-full"></div>

                  <div className="h-8 w-36 bg-gray-700 rounded"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
              <div className="w-8 h-8 bg-gray-700 rounded"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Shimmer;
