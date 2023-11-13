import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password,
      });
      console.log(response.data);
      Navigate("/");
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/login', {
  //       username,
  //       password,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error.response.data.message);
  //   }
  // };

  // const handleForgotPassword = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/forgot-password', {
  //       email: 'user@example.com',
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error.response.data.message);
  //   }
  // };

  return (
    <div className="App">
      <h1>React JWT Auth</h1>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleRegister}>Register</button>
      {/* <button onClick={handleLogin}>Login</button>
      <button onClick={handleForgotPassword}>Forgot Password</button> */}
    </div>
  );
}

export default App;
