import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "../../../Components/button/Button";
function Signup() {
  const navigate = useNavigate();
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(5).max(12).required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6).max(12).required("Password is required"),
    option: Yup.string().required("Option is required"),
  });

  validationSchema.when("option", {
    is: (val) => val === "Student",
    then: Yup.object().shape({
      category: Yup.string().required("Category is required"),
    }),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post(
        "https://fair-cyan-abalone-gown.cyclic.app/api/users/signup",
        values
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Signup Successful!",
          text: "Your account has been created.",
        });
        console.log("Signup successful!");
        navigate("/");
      })
      .catch((error) => {
        console.log("Signup failed:", error);
      })
      .finally(() => {
        setSubmitting(false);
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
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            option: "",
            category: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className=" mb-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <Field
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  autoComplete="name"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" mb-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <Field
                  id="email"
                  name="email"
                  placeholder="email"
                  type="email"
                  autoComplete="email"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className=" mb-2 block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  className=" px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div>
                <label>Choose an option:</label>
                <div>
                  <label>
                    <Field type="radio" name="option" value="Company" />
                    Company
                  </label>
                  <label>
                    <Field type="radio" name="option" value="Student" />
                    Student
                  </label>
                  <ErrorMessage
                    name="option"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>
              <div>
                {formikProps.values.option === "Student" && (
                  <div>
                    <label>Select Category:</label>
                    <div>
                      <Field
                        as="select"
                        name="category"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Experience</option>
                        <option value="Senior">Senior</option>
                        <option value="Junior">Junior</option>
                        <option value="Freshman">Fresher</option>
                      </Field>
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>
                )}
              </div>
              
              <div>
                <Button
                type={"submit"}
                disabled={formikProps.isSubmitting}
                className={"flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"}
                value={formikProps.isSubmitting ? "Signing Up..." : "Sign Up"}
                />

                
               
              </div>
            </Form>
          )}
        </Formik>
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
