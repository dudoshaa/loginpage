import React, { useState } from "react";
import { signUp } from "../app/features/userSlice";
import { useDispatch } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import { TbShieldLockFilled } from "react-icons/tb";
import { LuUserPen } from "react-icons/lu";
import { IoImages } from "react-icons/io5";
import { ImUserPlus } from "react-icons/im";

function SignUp() {
  const [isSigned, setIsSeigned] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const userName = formData.get("userName");
    if (email && password && userName) {
      dispatch(signUp({ userName, email, password }));
      setIsSeigned(true);
    }
  };
  return (
    <section className="relative">
         <div className="login signup ">
           <ImUserPlus
           className="text-9xl absolute top-[-16%] left-[46%] bg-[#0d1f23]  text-[#afb3b7]
           p-6  rounded-4xl"
           />
           <form
             onSubmit={handleSubmit}
             className="w-96 bg-[#ffffff2c] pt-28 pb-12  px-12 rounded-4xl"
           >
             <fieldset className="fieldse">
               <div className="flex">
                 <LuUserPen className="text-4xl h-[40px] bg-[#2d4a53]  text-[#afb3b7]  pb-2.5 pt-2.5 rounded-l-xl" />
                 <input
                   name="userName"
                   type="text"
                   className="input"
                   placeholder="User Name"
                 />
               </div>
             </fieldset>
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
               <button className="btn ">Sign Up</button>
             </div>
             <div className="flex gap-3">
               <span >Do You have an account?</span>
               <Link to="/login" className="font-bold text-[#2d4a53]">Login</Link>
             </div>
             {isSigned && <Navigate to="/login"/>}
           </form>
         </div>
       </section>
  );
}

export default SignUp;
