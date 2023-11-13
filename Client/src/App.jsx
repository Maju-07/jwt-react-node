import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "../src/components/ForgetPass";
import Home from "../src/components/Home";
import Login from "../src/components/Login";
import Register from "../src/components/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Forgot" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
