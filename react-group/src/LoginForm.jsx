import React, {useState, useEffect } from "react";
import { BsEmojiKiss } from "react-icons/bs";
import { GiHeartKey } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedUsername = localStorage.getItem("rememberedUsername");
    const savedPassword = localStorage.getItem("rememberedPassword");

    if (savedUsername && savedPassword) {
      setUsername(savedUsername);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    if (rememberMe) {
    localStorage.setItem("rememberedusername", username);
    localStorage.setItem("rememberedpassword", password);
    } else {
      localStorage.removeItem("rememberedUsername");
      localStorage.removeItem("rememberedPassword");
    }

    navigate("/game");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-pink-500 via-red-500 to-orange-500">
        <h1 className="text-4xl font-bold text-pink-50 mb-6 text-center drop-shadow-lg">
            MatchMoji
        </h1>
      <form 
        onSubmit={handleLogin}
        className=" bg-white/40  backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-md border border-white/20"
        >
        <h2 className="text-2xl font-bold text-white text-center mb-6">Login</h2>

        <div className="relative mb-4">
          <input 
          type="text" 
          placeholder="Username" 
          required 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <BsEmojiKiss className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <div className="relative mb-4">
          <input 
          type="password" 
          placeholder="Password" 
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full py-2 pl-10 pr-4 rounded-md bg-rose-400 text-white placeholder-pink-50 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          <GiHeartKey className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[30px] text-pink-50"/>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-300 mb-4">
          <label className="flex items-center gap-2">
            <input 
            type="checkbox" 
            className="accent-pink-900"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            />

            Remember me
          </label>
          <a href="/ForgotPassword" className="hover:underline hover:text-pink-50">Forgot password?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-rose-500 py-2 rounded-full hover:bg-rose-400 transition text-pink-50"
        >
          Login
        </button>

        <p className="text-sm text-center mt-4 text-pink-50">
            New player? Let´s get you in the game! {" "}
          <span
            onClick={() => navigate("/signup")}
            className="underline cursor-pointer hover:text-rose-400"
          >
            Register
          </span>
        </p>
      </form>
    </div>
  );
}
export default LoginForm;
