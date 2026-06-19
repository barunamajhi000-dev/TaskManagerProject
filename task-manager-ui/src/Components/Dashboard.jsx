import StatsSection from "./StatsSection";
import FilterBar from "./FilterBar";
import TaskList from "./TaskList";

function Dashboard({tasks ,onDelete , onComplete}) {
//   const tasks = [
//     {
//       taskId: "1",
//       title: "Build Lambda CRUD API",
//       description: "Create backend APIs",
//       priority: "High",
//       status: "In Progress",
//     },
//     {
//       taskId: "2",
//       title: "Connect React Frontend",
//       description: "Integrate API Gateway",
//       priority: "Medium",
//       status: "Completed",
//     },
//   ];

  const stats = {
    total: tasks.length,
    inProgress: tasks.filter((t) => t.status === "In Progress").length,
    completed: tasks.filter((t) => t.status === "Completed").length,
  };

  return (
    <div className="p-4 md:p-8">
      <StatsSection stats={stats} />

      <FilterBar />

      <TaskList tasks={tasks} onComplete={onComplete} onDelete={onDelete}/>
    </div>
  );
}

export default Dashboard;
