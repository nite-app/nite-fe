import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Splash from "./components/withSplash";
import Main from "./components/screens/Main";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Reset from "./components/auth/Reset";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Splash />}></Route>
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/reset" element={<Reset />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
