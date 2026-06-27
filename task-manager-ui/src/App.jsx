import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Shimmer from "./Components/Shimmer";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import VerifyAccount from "./pages/VerifyAccount";
import { createTask, getTasks, deleteTask, updateTask } from "./services/Api";
import { getCurrentUser } from "aws-amplify/auth";
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [page, setPage] = useState("login");
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(
    new Date().toISOString().split("T")[0],
  );
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    checkUser();
  }, []);
  useEffect(()=>{
    if(user){
      fetchTasks();
    }
  },[user])
  
const checkUser = async () => {
  try {
    setLoading(true);
    const currentUser = await getCurrentUser();

    console.log("Current User:", currentUser);

    setUser(currentUser);
    setIsAuthenticated(true);
  } catch (error) {
    console.error(error);
    setIsAuthenticated(false);
  }
};
  const fetchTasks = async () => {
    if (!user) return;

    try {
       setLoading(true);
      const data = await getTasks(user.userId);
      setTasks(data);
    } catch (error) {
      console.error(error);
    }finally{
      setLoading(false)
    }
  };
// console.log("User:", user);
  const handleCreateTask = async () => {
    if (editingTask) {
      await updateTask(editingTask.taskId, {
        title,
        description,
        dueDate,
        status: editingTask.status,
      });
    } else {
      console.log("User:", user);
      await createTask({
        title,
        description,
        dueDate,
        userId: user.userId,
      });
    }


    await fetchTasks();

    setEditingTask(null);
    setShowForm(false);

    setTitle("");
    setDescription("");
    setDueDate("");
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
  const handleEditClick = (task) => {
    setEditingTask(task);

    setTitle(task.title);
    setDescription(task.description);
    setDueDate(task.dueDate || "");

    setShowForm(true);
  };
  //   return (
  //     // < className="min-h-screen bg-gray-950">
  //     //   <Header setShowForm={setShowForm} />

  //     //   {showForm && (
  //     //     <

  if (!isAuthenticated) {
    return (
      <>
        {page === "login" && (
          <Login setPage={setPage} setIsAuthenticated={setIsAuthenticated} />
        )}

        {page === "signup" && <Signup setPage={setPage} />}

        {page === "verify" && <VerifyAccount setPage={setPage} />}
      </>
    );
  }

  // If authenticated, show the app
  return (
    <div className="min-h-screen bg-gray-950">
      <Header
        setShowForm={setShowForm}
        setIsAuthenticated={setIsAuthenticated}
        setTasks={setTasks}
        setLoading={setLoading}
      />
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-md bg-gray-900 p-6 rounded-xl shadow-xl border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">
              {editingTask ? "Edit Task" : "Create New Task"}
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

            <input
              type="date"
              value={dueDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-3 rounded-lg bg-slate-900 border border-slate-700 text-white"
            />

            <div className="flex mt-4 gap-3">
              <button
                onClick={handleCreateTask}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg"
              >
                {editingTask ? "Update Task" : "Save Task"}
              </button>

              <button
                onClick={() => setShowForm(false)}
                className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {loading ? (
        <Shimmer />
      ) : (
        <Dashboard
          tasks={tasks}
          onDelete={handleDeleteTask}
          onComplete={handleCompleteTask}
          onEdit={handleEditClick}
        />
      )}
    </div>
  );
}

export default App;
