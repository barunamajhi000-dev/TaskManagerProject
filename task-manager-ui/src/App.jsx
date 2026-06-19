import { useState , useEffect } from "react";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import { createTask,getTasks,deleteTask,updateTask } from "./services/Api";
function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

useEffect(() => {
  fetchTasks();
}, []);

const fetchTasks = async () => {
  try {
    const data = await getTasks();
    setTasks(data);
  } catch (error) {
    console.error(error);
  }
};

 const handleCreateTask = async () => {
   await createTask({
     title,
     description,
   });
     await fetchTasks();

   setShowForm(false);
   setTitle("");
   setDescription("");
 };
const handleDeleteTask = async (taskId) => {
  await deleteTask(taskId);
  await fetchTasks();
};
const handleCompleteTask = async (taskId) => {
  await updateTask(taskId, {
    status: "Completed",
  });

  await fetchTasks();
};

  return (
    <div className="min-h-screen bg-gray-950">
      <Header setShowForm={setShowForm} />

      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              Create New Task
            </h2>

            <input
              type="text"
              placeholder="Task Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 mb-4"
            />

            <textarea
              placeholder="Task Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="4"
              className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 mb-4"
            />

            <div className="flex gap-3">
              <button
                onClick={handleCreateTask}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
              >
                Save Task
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <Dashboard tasks={tasks} onDelete={handleDeleteTask} onComplete={handleCompleteTask}/>
    </div>
  );
}

export default App;
