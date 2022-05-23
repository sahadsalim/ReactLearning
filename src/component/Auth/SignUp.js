import React, { useState } from "react";
import { signup } from "../../redux/actions";
import { useDispatch } from 'react-redux';
import {
  Link,
  useNavigate
} from "react-router-dom";
const SignUp = () => {
  const dispatch = useDispatch();
  const pattern = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/;
  let navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
  });

  const firstNameChange = (event) => {
    setData({ ...data, firstName: event.target.value });
    console.log(event.target.value);
  };

  const lastNameChange = (event) => {
    setData({ ...data, lastName: event.target.value });
  };
  const emailChange = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const passwordChange = (event) => {
    setData({ ...data, password: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (pattern.test(data.password)) {
      setData({ ...data, error: "" });
      dispatch(
        signup(data),
      );
      navigate("/login");
    } else {
      setData({ ...data, error: "8-20 Letters and digits" });
    }
  };
  return (
    <div className="w-full max-w-xs mar">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            FirstName
          </label>
          <input
            type="text"
            value={data.firstName}
            onChange={firstNameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            LastName
          </label>
          <input
            type="text"
            value={data.lastName}
            onChange={lastNameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            type="text"
            value={data.email}
            onChange={emailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            value={data.password}
            onChange={passwordChange}
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
          />
          {data.submitted && data.error ? (
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          ) : null}
        </div>
        <p>{data.error}</p>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
          <Link to="/login" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
