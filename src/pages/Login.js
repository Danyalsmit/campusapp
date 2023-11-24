import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    axios
      .post("https://fair-cyan-abalone-gown.cyclic.app/api/users/login", data)
      .then(async (res) => {
        console.log("resres",res)
        console.log("Login successful!");
        const Role = res.data;
        console.log("role", Role);
        const id = res.data?._id;

        const userRole = res.data.option;
        if (userRole === "Student") {
          await localStorage.setItem("UserId", JSON.stringify(id));
          navigate("/student");
        } else if (userRole === "Company") {
          await localStorage.setItem("UserId", JSON.stringify(id));
          navigate("/camp");
        } else if (userRole === "Admin") {
          await localStorage.setItem("UserId", JSON.stringify(id));
          navigate("/admin");
        } else {
          navigate("/");
        }
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: "Welcome back!",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
        });
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-indigo-530 p-4">
          <div className="flex items-center">
            <svg
              className=" mt-9 h-10 w-auto text-indigo-700"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3 1 9l11 6 9-4.91V17h2V9L12 3z"
                fill="currentColor"
              ></path>
            </svg>
            <h2 className="ml-11 mt-10 px-2 text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login to your account
            </h2>
          </div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="px-2 block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete=" email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>

              <div>
                <h2 className="text-black">
                  Do You Want To Create Account?
                  <Link className="text-black-500 font-bold" to={"/signup"}>
                    Signup
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
