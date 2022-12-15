import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainRouter from "./components/ReactRouter/MainRouter";
import { AuthContext } from "./components/store/AuthContext";

function App() {
  const [user, setUser] = useState("");
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <AuthContext.Provider value={{ user, setUser, isLoggedin, setIsLoggedin }}>
      <MainRouter />
    </AuthContext.Provider>
  );
}

export default App;
