import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import NavBar from "./NavBar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

const root = document.getElementById("root");
createRoot(root).render(<App></App>);
