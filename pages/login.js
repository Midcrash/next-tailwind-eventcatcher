import React, { useState } from "react";

function Login() {
  const [name, setName] = useState("");
  return (
    <div className="container px-4 pt-12 mx-auto" style={{ minHeight: "50vh" }}>
      <form className="text-3xl">
        <label>Username:</label>
        <input placeholder="Username" type={"text"}></input>
        <label>Password:</label>
        <input placeholder="Password" type={"password"}></input>
      </form>
    </div>
  );
}

export default Login;
