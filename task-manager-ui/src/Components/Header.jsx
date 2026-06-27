import { FaTasks } from "react-icons/fa";
import { signOut } from "aws-amplify/auth";
function Header({setShowForm,setIsAuthenticated,setTasks,setLoading}) {
  const handleLogout = async () => {
    try {
      await signOut();
      setIsAuthenticated(false);
      setTasks([]);
      setLoading(true);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center">
            <FaTasks className="text-white text-xl" />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-white">
              TaskSphere
            </h1>
            <p className="text-sm text-gray-400">
              Manage and track your tasks efficiently
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowForm(true)}
            // onClick={()=> console.log("button clicked")}
            className="bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white px-5 py-3 rounded-xl font-medium transition"
          >
            + New Task
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:cursor-pointer hover:bg-red-500 text-white px-5 py-3 rounded-xl font-medium transition"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
