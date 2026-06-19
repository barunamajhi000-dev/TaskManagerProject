import { FaTasks, FaClock, FaCheckCircle } from "react-icons/fa";
import StatsCard from "./StatsCard";

function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        title="Total Tasks"
        value={stats.total}
        icon={<FaTasks className="text-white text-xl" />}
        color="bg-indigo-600"
      />

      <StatsCard
        title="In Progress"
        value={stats.inProgress}
        icon={<FaClock className="text-white text-xl" />}
        color="bg-yellow-500"
      />

      <StatsCard
        title="Completed"
        value={stats.completed}
        icon={<FaCheckCircle className="text-white text-xl" />}
        color="bg-green-600"
      />
    </div>
  );
}

export default StatsSection;
