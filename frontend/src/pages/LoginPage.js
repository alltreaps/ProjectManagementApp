import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css";


const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "1" && password === "1") {
      navigate("/dashboard");
    } else {
      setError("اسم المستخدم أو كلمة المرور غير صحيحة");
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-header">
          <span className="login-title">تسجيل الدخول</span>
        </div>
        <div className="login-logo">الشعار</div>
        <div className="login-subtitle">نظام إدارة المشاريع</div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="login-label" htmlFor="username">اسم المستخدم</label>
          <input
            type="text"
            id="username"
            className="login-input"
            placeholder="ادخل اسم المستخدم"
            dir="rtl"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label className="login-label" htmlFor="password">كلمة المرور</label>
          <input
            type="password"
            id="password"
            className="login-input"
            placeholder="ادخل كلمة المرور"
            dir="rtl"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit" className="login-btn">تسجيل الدخول</button>
          {error && <div style={{ color: "red", marginTop: "10px" }}>{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
