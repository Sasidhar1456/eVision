import React, { useState } from "react";

function Forget() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, newPassword: "" }));
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation
    const newErrors = {};
    if (newPassword.trim() === "") {
      newErrors.newPassword = "New password is required";
    }
    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Confirm password is required";
    }
    if (newPassword !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // Handle form submission
    console.log("New Password:", newPassword);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-5 md:p-8 rounded-lg w-80 md:w-97 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Forget Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="my-7">
            <input
              type="password"
              placeholder="New Password"
              className="mb-2 w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md  pl-2 text-lg text-primary"
              value={newPassword}
              onChange={handleNewPasswordChange}
            />
            {errors.newPassword && (
              <p className="text-red-500 text-xs italic ">{errors.newPassword}</p>
            )}
          </div>
          <div className="mb-7">
            <input
              type="password"
              placeholder="Confirm Password"
              className="mb-2 w-72 md:w-96 h-12 outline-none border-2 border-gray-500 focus:border-2 focus:border-black rounded-md  pl-2 text-lg text-primary"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs italic ">{errors.confirmPassword}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary text-white w-72 md:w-96 h-12 rounded-md"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forget;
