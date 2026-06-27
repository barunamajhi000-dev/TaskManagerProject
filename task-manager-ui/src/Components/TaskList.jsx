import TaskCard from "./TaskCard";

function TaskList({onEdit,tasks, filter, onDelete, onComplete , searchTerm }) {
  const filteredTasks = tasks.filter((task) => {
    const matchesFilter = filter === "All" ? true : task.status === filter;

    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  return (
    // <div className="mt-8 space-y-4">
    //   {filteredTasks.map((task) => (
    //     <TaskCard
    //       key={task.taskId}
    //       filter={filter}
    //       task={task}
    //       onComplete={onComplete}
    //       onDelete={onDelete}
    //     />
    //   ))}
    // </div>
  <div className="mt-8 space-y-4">
    {filteredTasks.length > 0 ? (
      filteredTasks.map((task) => (
        <TaskCard
          key={task.taskId}
          task={task}
          onComplete={onComplete}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))
    ) : (
      <div className="text-center text-gray-400 mt-10">
        No tasks found 🔍
      </div>
    )}
  </div>
);
  
}

export default TaskList;
