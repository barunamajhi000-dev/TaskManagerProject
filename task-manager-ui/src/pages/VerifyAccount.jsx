import { useState } from "react";
import { confirmSignUp } from "aws-amplify/auth";

function VerifyAccount({setPage}) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      await confirmSignUp({
        username: email,
        confirmationCode: code,
      });

      alert("Account verified successfully!");
      setPage("login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded-xl">
        <h2 className="text-2xl text-white mb-6">Verify Account</h2>

        <form onSubmit={handleVerify} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          />

          <input
            type="text"
            placeholder="Verification Code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-800 text-white"
          />

          <button
            type="submit"
            className="w-full hover:cursor-pointer bg-indigo-600 text-white py-3 rounded-lg"
          >
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyAccount;
