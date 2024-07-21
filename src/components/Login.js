import React, { useState } from "react";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const submit = async () => {
    setUserData({ email: "", password: "" });
    console.log(userData);
  };
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
      <p className="font-bold text-xl">Sign In</p>
      <form className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={userData.email}
            onChange={handleChange}
            placeholder="user@email.com"
            className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
          />
        </div>
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="email">Password</label>
          <input
            type="password"
            id="password"
            value={userData.password}
            onChange={handleChange}
            placeholder="*********"
            className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
          />
        </div>
        <div
          className="w-full text-center bg-blue-400 text-white px-2 rounded-lg py-2 cursor-pointer"
          onClick={submit}
        >
          Sign In
        </div>
      </form>
    </div>
  );
};

export default Login;
