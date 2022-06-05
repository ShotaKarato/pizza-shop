import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";
import "./styles.css";

const app = document.getElementById("root")!;
const root = ReactDOM.createRoot(app);

root.render(<App />);