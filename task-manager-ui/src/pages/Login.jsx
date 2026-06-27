
import { useState } from "react";
import { signIn } from "aws-amplify/auth";



function Login({ setPage, setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    try {
      const result = await signIn({
        username: email.trim(),
        password,
      });

      if (result.isSignedIn) {
        setIsAuthenticated(true);
      }
    } catch (error) {
      if (error.name === "UserAlreadyAuthenticatedException") {
        setIsAuthenticated(true);
      } else {
        console.error(error);
      }
    }
}
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">TaskSphere</h1>
          <p className="text-gray-400 mt-2">Welcome back</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 text-center">
          <button className="text-red-400 hover:cursor-pointer hover:text-white text-sm">
            Forgot Password?
          </button>
        </div>

        <div className="mt-6 text-center text-gray-400">
          Don't have an account?
          <button
            onClick={() => setPage("signup")}
            className="text-indigo-500 ml-2 hover:cursor-pointer hover:text-indigo-400"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
