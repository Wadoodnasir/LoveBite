import React, { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar1 from "./component/Navbar";
import LoginForm from "./component/LoginForm";
import Picture from "./component/Picture";
import Video from "./component/Video";
import Home from "./component/Home";

const App = () => {
  const [activeComponent, setActiveComponent] = useState(
    localStorage.getItem("activeComponent") || "Home"
  );

  useEffect(() => {
    localStorage.setItem("activeComponent", activeComponent);
  }, [activeComponent]);

  const handleLogin = () => {
    setActiveComponent("Home");
  };

  const handleNavigation = (component) => {
    setActiveComponent(component);
  };

  return (
    <div>
      {/* Conditionally Render Navbar Component */}
      {activeComponent !== "LoginForm" && (
        <Navbar1 handleNavigation={handleNavigation} />
      )}

      {/* Conditionally Render Components */}
      {activeComponent === "Home" && <Home />}
      {activeComponent === "Picture" && <Picture />}
      {activeComponent === "Video" && <Video />}
      {activeComponent === "LoginForm" && <LoginForm onLogin={handleLogin} />}
    </div>
  );
};

export default App;
