import { signUp } from "aws-amplify/auth";
import { useState } from "react";
function Signup({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
const handleSignup = async (e) => {
  e.preventDefault();

  try {
    const result = await signUp({
      username: email,
      password,
      options: {
        userAttributes: {
          email,
          name,
        },
      },
    });

    console.log(result);
    alert("Verification code sent to your email");
    setPage("verify");
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
};
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">TaskSphere</h1>
          <p className="text-gray-400 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e)=>setName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Email Address"
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

        

          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:cursor-pointer hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition"
          >
            Create Account
          </button>
        </form>

        <div className="mt-6 text-center text-gray-400">
          Already have an account?
          <button
            onClick={() => setPage("login")}
            className="text-indigo-500 ml-2 hover:cursor-pointer hover:text-indigo-400"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
