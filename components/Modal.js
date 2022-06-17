import React from "react";

const Modal = () => {
  return (
    <div className="login-modal">
      <div className="flex flex-col login-container">
        <p>Login</p>
        <label>
          Email
          <input placeholder="Email" type="email" />
        </label>
        <label>
          Password
          <input placeholder="Password" type="password" />
        </label>
        <a className="text-black">Submit</a>
      </div>
    </div>
  );
};

export default Modal;
