function StatsCard({ title, value, icon, color }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-900 transition">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">{title}</p>

          <h2 className="text-3xl font-bold text-white mt-2">{value}</h2>
        </div>

        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
