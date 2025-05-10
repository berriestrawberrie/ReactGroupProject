import React from "react";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {

    const navigate = useNavigate();

    const handleRegister = (e) => {
      e.preventDefault();
      navigate("/LoginForm");
    };
    
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-gray-700 via-rose-500 to-orange-400">
      <form className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl w-full max-w-md border-white/20">
        <h2 className="text-2xl font-bold text-white text-center mb-6">
          Forgot Password
        </h2>
        <p className=" text-base mb-3 text-center text-pink-50">
          Reset time! Enter your email and we´ll send you a secret key to get back in the game.
        </p>
        <input
          typ="email"
          placeholder="Email"
          required
          className="w-full py-2 pl-10 pr-4 mb-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
         

        <button
          typ="submit"
          className="w-full bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition text-pink-50"
          onClick={() => navigate("/LoginForm")}
        >
          Send reset link
        </button>
      </form>
    </div>
  );
}
export default ForgotPassword;
