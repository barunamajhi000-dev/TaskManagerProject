import StatsSection from "./StatsSection";
import FilterBar from "./FilterBar";
import TaskList from "./TaskList";
import { useState } from "react";
import SearchBar from "./SearchBar";
function Dashboard({tasks ,onDelete ,onEdit, onComplete}) {
const [filter, setFilter] = useState("All");
const [searchTerm, setSearchTerm] = useState("");

  const stats = {
    total: tasks.length,
    inProgress: tasks.filter((t) => t.status === "In Progress").length,
    completed: tasks.filter((t) => t.status === "Completed").length,
  };

  return (
    <div className="p-4 md:p-8">
      <StatsSection stats={stats} />

      <div className="flex justify-between items-center mt-4">
        <FilterBar filter={filter} setFilter={setFilter} />

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
      <TaskList
        tasks={tasks}
        filter={filter}
        searchTerm={searchTerm}
        onDelete={onDelete}
        onComplete={onComplete}
        onEdit={onEdit}
      />
    </div>
  );
}

export default Dashboard;
