import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter, Route, Routes } from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import Home from './components/Home'
import Login from './routes/Login'
import SignUp from './routes/SignUp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <HashRouter>
  <AuthProvider>
    <Routes>
      <Route element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
      </Route>
    </Routes>
  </AuthProvider>
  </HashRouter>
  </React.StrictMode>,
)
