import React from "react";
import { BsEmojiKiss } from "react-icons/bs";
import { GiHeartKey } from "react-icons/gi";
import { SiTinyletter } from "react-icons/si";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/LoginForm");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-amber-500 via-orange-500 to-red-500">
        <h1 className="text-4xl font-bold text-pink-50 mb-6 text-center drop-shadow-lg">
            MatchMoji
        </h1>
      <form 
        onSubmit={handleRegister}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"s
        >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>

        <div className="relative mb-4">
          <input 
          type="text" 
          placeholder="Username" 
          required 
          pattern="^[a-zA-Z0-9]{4,15}$"
          title="4-15 characters. Only letters and numbers."
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <BsEmojiKiss className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <div className="relative mb-4">
          <input 
          type="password" 
          placeholder="Password" 
          required 
          pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$"
          title="At least 6 characters with letters and numbers."
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <GiHeartKey className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <div className="relative mb-4">
          <input 
          type="text" 
          placeholder="Email" 
          required 
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <SiTinyletter className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition c"
        >
          Register
        </button>

        <p className="text-sm text-center mt-4 text-pink-50">
        Already registered? Jump back in! {" "}

          <span
            onClick={() => navigate("/LoginForm")}
            className="underline cursor-pointer hover:text-rose-400"
          >
           Login
          </span>
          </p>
      </form>
    </div>
  );
}
export default Signup;


