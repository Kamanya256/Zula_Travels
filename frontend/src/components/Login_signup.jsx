import React, { useState } from "react";
import { FaUser, FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

export default function AuthForms() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [authData, setAuthData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAuthData({
      ...authData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isLogin && authData.password !== authData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log(isLogin ? "Login:" : "Signup:", authData);
    alert(isLogin ? "Login successful!" : "Account created successfully!");
    
    // Reset form
    setAuthData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="auth-forms-container">
      <div className="auth-tabs">
        <button
          className={`tab ${isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(true)}
        >
          Login
        </button>
        <button
          className={`tab ${!isLogin ? 'active' : ''}`}
          onClick={() => setIsLogin(false)}
        >
          Sign Up
        </button>
      </div>

      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <div className="name-fields">
            <div className="form-group">
              <label htmlFor="firstName">First Name *</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={authData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required={!isLogin}
                  autoComplete="given-name"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="lastName">Last Name *</label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={authData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required={!isLogin}
                  autoComplete="family-name"
                />
              </div>
            </div>
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <div className="input-wrapper">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              id="email"
              name="email"
              value={authData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              autoComplete="email"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <div className="input-wrapper">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={authData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
              autoComplete={isLogin ? "current-password" : "new-password"}
              minLength="6"
            />
            <button
              type="button"
              className="password-toggle"
              onClick={togglePasswordVisibility}
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        {!isLogin && (
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password *</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={authData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required={!isLogin}
                autoComplete="new-password"
                minLength="6"
              />
            </div>
          </div>
        )}

        <div className="form-options">
          {isLogin && (
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={authData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </div>
          )}
          
          {isLogin && (
            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          )}
        </div>

        <button type="submit" className="auth-submit-btn">
          {isLogin ? "Login" : "Create Account"}
        </button>

        <div className="auth-divider">
          <span>or continue with</span>
        </div>

        <div className="social-auth">
          <button type="button" className="social-btn google-btn">
            <img src="/google-icon.svg" alt="Google" />
            Google
          </button>
          <button type="button" className="social-btn facebook-btn">
            <FaUser className="social-icon" />
            Facebook
          </button>
        </div>

        <div className="auth-footer">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button type="button" onClick={() => setIsLogin(false)} className="auth-switch">
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <button type="button" onClick={() => setIsLogin(true)} className="auth-switch">
                Login
              </button>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}