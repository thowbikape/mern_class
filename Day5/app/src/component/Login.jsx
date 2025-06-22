/*import "./style/Login.css";
function Login(){
    return(
       
        <div className="container">
          <h1 className="login">login</h1>
          <input type="text" placeholder="Enter username"/>
          <input type="password" placeholder="Password"/>
          <button type="submit">Submit</button>
          </div>
          
    )
}

export default Login;
import "./style/Login.css";
function Login() {
    return (
        <div className="login-center">
            <div className="login-box">
                <h1 className="Login">Login</h1>
                <input type="text" placeholder="Enter username" />
                <input type="password" placeholder="Enter password" />
                <button type="submit">Submit</button>
            </div>
        </div>
    );
}
export default Login;*/

import { useState } from "react";
import "./style/Login.css";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const validUsername = "thowbi";
  const validPassword = "1122";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === validUsername && password === validPassword) {
      setErrorMessage("");
      onLoginSuccess();          // show <AfterLogin />
    } else {
      setErrorMessage("Invalid username or password.");
    }
  };

  return (
    <div className="container">
      {/* logo comes from <Pages /> that sits above this component */}
      <h1 className="login-title">Login</h1>

      {/* form now stacks its children vertically */}
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {errorMessage && <p className="error">{errorMessage}</p>}
    </div>
  );
}

export default Login;