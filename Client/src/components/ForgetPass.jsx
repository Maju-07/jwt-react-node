import axios from "axios";
import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // const Navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      await axios.post("http://localhost:5000/forgot-password", { email });
      setMessage("Password reset email sent successfully");
      // Navigate("/");
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  return (
    <div className="App">
      <h2>Forgot Password</h2>
      <p>Enter your email address to receive a password reset link.</p>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={handleForgotPassword}>Send Reset Email</button>
      <p>{message}</p>
    </div>
  );
};

export default ForgotPassword;
