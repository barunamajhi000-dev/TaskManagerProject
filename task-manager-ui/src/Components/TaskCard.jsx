import { FaEdit, FaTrash } from "react-icons/fa";

function TaskCard({ task, onComplete ,onDelete}) {
  return (
    <div className="bg-gray-900 rounded-2xl p-5 border border-gray-800">
      <div className="flex justify-between items-start">
        <div className="flex gap-4">
          <input
            type="checkbox"
            checked={task.status === "Completed"}
            onChange={() => onComplete(task.taskId)}
            className="
              mt-1
              h-5
              w-5
              accent-green-500
              cursor-pointer
            "
          />

          <div>
            <h3
              className={`font-semibold text-lg ${
                task.status === "Completed"
                  ? "line-through text-gray-500"
                  : "text-white"
              }`}
            >
              {task.title}
            </h3>

            <p className="text-gray-400 mt-1">{task.description}</p>

            <div className="flex gap-2 mt-3">
              <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm">
                {task.priority}
              </span>

              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                {task.status}
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="text-yellow-400">
            <FaEdit />
          </button>

          <button className="text-red-400 hover:cursor-pointer" onClick ={()=>{onDelete(task.taskId)}} >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
