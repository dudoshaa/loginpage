import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { Link } from "react-router-dom";
import { TfiUser } from "react-icons/tfi";
import { TbShieldLockFilled } from "react-icons/tb";
import { TfiEmail } from "react-icons/tfi";

function Login() {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    dispatch(login({ email, password }));
  };
  return (
    <section className="relative">
      <div className="login ">
        <TfiUser
          className="text-9xl absolute top-[-16%] left-[46%] bg-[#0d1f23]  text-[#afb3b7]
        p-6  rounded-4xl"
        />
        <form
          onSubmit={handleSubmit}
          className="w-96 bg-[#ffffff2c] pt-28 pb-12  px-12 rounded-4xl"
        >
          <fieldset className="fieldset ">
            <div className="flex ">
              <TfiEmail className="text-4xl h-[40px] bg-[#2d4a53]  text-[#afb3b7] pb-3 pt-2.5 rounded-l-xl" />
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
            </div>
          </fieldset>
          <fieldset className="fieldse">
            <div className="flex">
              <TbShieldLockFilled className="text-4xl h-[40px] bg-[#2d4a53]  text-[#afb3b7]  pb-2.5 pt-2.5 rounded-l-xl" />
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
            </div>
          </fieldset>
          <div className="my-5">
            <button className="btn ">Login</button>
          </div>
          <div className="flex gap-3">
            <span>Don't have an account?</span>
            <Link to="/signup" className="font-bold text-[#0d1f23]">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
