import TaskCard from "./TaskCard";

function TaskList({ tasks , onDelete , onComplete}) {
  return (
    <div className="mt-8 space-y-4">
      {tasks.map((task) => (
        <TaskCard key={task.taskId} task={task} onComplete={onComplete} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default TaskList;
