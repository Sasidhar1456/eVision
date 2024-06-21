import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import navigate

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [forgetPasswordMode, setForgetPasswordMode] = useState(false);
  const [forgetPasswordEmail, setForgetPasswordEmail] = useState("");
  const [forgetPasswordSubmitted, setForgetPasswordSubmitted] = useState(false);
  const [createAccountMode, setCreateAccountMode] = useState(false);
  const [createAccountEmail, setCreateAccountEmail] = useState("");
  const [createAccountPassword, setCreateAccountPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login logic here
    console.log("Logging in with:", email, password);
  };

  const handleForgetPassword = () => {
    // Switch to forget password mode
    setForgetPasswordMode(true);
  };

  const handleBackToLogin = () => {
    // Switch back to login mode
    setForgetPasswordMode(false);
  };

  const handleForgetPasswordSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const newErrors = {};
    if (forgetPasswordEmail.trim() === "") {
      newErrors.forgetPasswordEmail = "Email is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle forget password submission here
    console.log("Forget password submitted with email:", forgetPasswordEmail);
    setForgetPasswordSubmitted(true);
    setForgetPasswordEmail("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  };

  const handleForgetPasswordEmailChange = (e) => {
    setForgetPasswordEmail(e.target.value);
    // Clear error when user starts typing in the forget password email input field
    setErrors((prevErrors) => ({ ...prevErrors, forgetPasswordEmail: "" }));
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
    console.log("Creating account with:", createAccountEmail, createAccountPassword, confirmPassword);
  };

  const handleCreateAccountSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const newErrors = {};
    if (createAccountEmail.trim() === "") {
      newErrors.createAccountEmail = "Email is required";
    }
    if (createAccountPassword.trim() === "") {
      newErrors.createAccountPassword = "Password is required";
    }
    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm Password is required";
    }
    if (createAccountPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle create account submission
    handleCreateAccount();
  };

  const handleCreateAccountEmailChange = (e) => {
    setCreateAccountEmail(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, createAccountEmail: "" }));
  };

  const handleCreateAccountPasswordChange = (e) => {
    setCreateAccountPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, createAccountPassword: "" }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
  };

  const handleCreateAccountMode = () => {
    setCreateAccountMode(true);
  };

  const handleBackToLoginFromCreateAccount = () => {
    setCreateAccountMode(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Form validation for login
    const newErrors = {};
    if (email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (password.trim() === "") {
      newErrors.password = "Password is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Check if email and password match the predefined values
    if (email === "sasidharpinjala@gmail.com" || email === "Sasidharpinjala@gmail.com" && password === "sasi") {
      // Navigate to admin route
      navigate("/admin");
    } else {
      // Display error if email or password is incorrect
      setErrors({ email: "Invalid email or password", password: "Invalid email or password" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-5 md:p-8 rounded-lg w-80 md:w-97 relative">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">
            {forgetPasswordMode ? "Forget Password" : createAccountMode ? "Create Account" : "Log in"}
          </h2>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700 transition duration-300 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {forgetPasswordMode ? (
          <form onSubmit={handleForgetPasswordSubmit}>
            <div className="flex flex-col items-center">
              <div className="my-7">
                <input
                  type="email"
                  id="forgetPasswordEmail"
                  placeholder="Email"
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  value={forgetPasswordEmail}
                  onChange={handleForgetPasswordEmailChange}
                />
                {errors.forgetPasswordEmail && (
                  <p className="text-red-500 text-xs italic">{errors.forgetPasswordEmail}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary text-white w-72 md:w-96 h-12 rounded-md"
              >
                Submit
              </button>
              <div className="text-center text-primary cursor-pointer mt-4" onClick={handleBackToLogin}>
                Back to Login
              </div>
            </div>
          </form>
        ) : createAccountMode ? (
          <form onSubmit={handleCreateAccountSubmit}>
            <div className="flex flex-col items-center">
              <div className="my-7">
                <input
                  type="email"
                  id="createAccountEmail"
                  placeholder="Email"
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  value={createAccountEmail}
                  onChange={handleCreateAccountEmailChange}
                />
                {errors.createAccountEmail && (
                  <p className="text-red-500 text-xs italic">{errors.createAccountEmail}</p>
                )}
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  id="createAccountPassword"
                  placeholder="Password"
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  value={createAccountPassword}
                  onChange={handleCreateAccountPasswordChange}
                />
                {errors.createAccountPassword && (
                  <p className="text-red-500 text-xs italic">{errors.createAccountPassword}</p>
                )}
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs italic">{errors.confirmPassword}</p>
                )}
              </div>
              <button
                type="submit"
                className="bg-primary text-white w-72 md:w-96 h-12 rounded-md"
              >
                Create Account
              </button>
              <div className="text-center  text-primary cursor-pointer mt-4" onClick={handleBackToLoginFromCreateAccount}>
                Already have an account? Click here to Log in
              </div>
            </div>
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit}>
            <div className="flex flex-col items-center">
              <div className="my-7">
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  value={email}
                  onChange={handleEmailChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs italic">{errors.email}</p>
                )}
              </div>
              <div className="mb-7">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md pl-2 text-lg text-primary"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs italic">{errors.password}</p>
                )}
                <div className="text-right text-primary cursor-pointer mt-4" onClick={handleForgetPassword}>
                Forgot Password?
              </div>
              </div>
              <button
                type="submit"
                className="bg-primary text-white w-72 md:w-96 h-12 rounded-md"
              >
                Log In
              </button>
              
              <div className="text-center text-primary cursor-pointer mt-4" onClick={handleCreateAccountMode}>
                Don't have an account? Click here to Create Account
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
