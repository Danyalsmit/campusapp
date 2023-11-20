import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2"; 



function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();
 
  const handleFormSubmit = () => {
    if (!name || !email || !password  || !selectedOption) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'All fields are required!',
      });
      
      return ; 
    }
    const userData = {
      name: name,
      email: email,
      password: password,
      category: category,
      option: selectedOption,
    };
    
  
    axios
      .post("https://fair-cyan-abalone-gown.cyclic.app/api/users/signup", userData)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Signup Successful!',
          text: 'Your account has been created.',
        });
        console.log("Signup successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Signup failed:", error);
      });
      
  };
  
  return (
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
            Register foam
          </h2>
        </div>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className=" mb-2 block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2 ">
              <input
                id="name"
                name="name"
                placeholder="Name"
                type="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="passsword"
                name="password"
                placeholder="*******"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label>Choose an option:</label>
              <div>
                <input
                  type="radio"
                  name="option"
                  value={selectedOption}
                  checked={selectedOption === "Company"}
                  onChange={() => setSelectedOption("Company")}
                  required
                />{" "}
                Company
                <input
                  type="radio"
                  name="option"
                  value="Student"
                  checked={selectedOption === "Student"}
                  onChange={() => setSelectedOption("Student")}
                  required
                />{" "}
                Student
              </div>
            </div>
          </div>
          {selectedOption === "Student" && (
            <div>
              <label>Select Category:</label>
              <div>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="">Experience</option>
                  <option value="Senior">Senior</option>
                  <option value="Junior">Junior</option>
                  <option value="Freshman">Fresher</option>
                </select>
              </div>
            </div>
          )}

          <div>
            <button
              onClick={handleFormSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign Up
            </button>
          </div>
        </div>
        <div>
          <h2 className="text-black">
            Have an account{" "}
            <Link className="text-black-500 font-bold" to="/">
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
