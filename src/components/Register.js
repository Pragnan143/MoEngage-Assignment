import React, { useState } from "react";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const submit = async () => {
    console.log(userData);
    setUserData({ email: "", password: "", fullName: "" });
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
      <p className="font-bold text-xl">Sign Up</p>
      <form className="flex flex-col gap-2">
        <div className="w-full flex flex-col gap-2">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            value={userData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full border border-gray-400 px-3 py-2 rounded-lg focus:border-zomato-400"
            required
          />
        </div>
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

export default Register;
