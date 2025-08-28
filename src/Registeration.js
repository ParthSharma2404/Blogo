import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

function Registeration() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", data);
      navigate("/login");
    } catch (error) {
      alert("Registration failed: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="min-h-screen content-center">
      <h1 className="font-extrabold text-5xl text-center">Register</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="text-center mt-10 mb-2">
        <input
          type="text"
          placeholder="Name"
          {...register("username")}
          className="outline outline-2 text-2xl rounded-xl pl-3 py-2 mb-5 focus:outline-green-400 dark:text-black"
        /><br />
        {errors.username && <p style={{ color: "red" }}>{errors.username.message}</p>}
        <input
          type="email"
          placeholder="Email"
          {...register("email")}
          className="outline outline-2 text-2xl rounded-xl pl-3 py-2 mb-5 focus:outline-green-400 dark:text-black"
        /><br />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
        <input
          type="password"
          placeholder="Password"
          {...register("password")}
          className="outline outline-2 text-2xl rounded-xl pl-3 py-2 mb-5 focus:outline-green-400 dark:text-black"
        /><br />
        {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
        <input
          type="submit"
          value="Register"
          className="font-medium text-2xl outline outline-2 px-4 py-2 rounded-xl hover:bg-green-400 hover:text-white hover:duration-300"
        />
      </form>
      <div className="text-center">
        <Link to="/login" className="text-green-400 font-semibold text-xl">Already have an account?</Link>
      </div>
    </div>
  );
}

export default Registeration;