import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./components/screens/Main";

import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Reset from "./components/auth/Reset";
import Alert from "./components/Alert";

import { AlertProvider } from "./contexts/AlertContext";

function App() {
  return (
    <AlertProvider>
      <Alert />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/reset-password" element={<Reset />} />
        </Routes>
      </BrowserRouter>
    </AlertProvider>
  );
}

export default App;
