import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../styles/Login.module.css";
import mailimg from "../assets/v1_17.png";
import passimg from "../assets/v1_16.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        email,
        password,
      });
  
      console.log("API Response:", response.data); // Debugging step
  
      const { access, user_type } = response.data;
  
      if (!user_type) {
        alert("Error: user_type is missing from API response.");
        return;
      }
  
      localStorage.setItem("access_token", access);
      localStorage.setItem("user_type", user_type);
  
      // Redirect based on user_type
      if (user_type.toLowerCase() === "company") {
        navigate("/companyhomepage");
      } else if (user_type.toLowerCase() === "investor") {
        navigate("/investorhomepage");
      } else {
        alert(`Unknown user type: ${user_type}`);
      }
    } catch (error) {
      console.error("Login Failed", error);
      alert("Invalid email or password");
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>WELCOME!</h1>
        <form className={styles.form} onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.icon}>
              <img src={mailimg} alt="mail" className={styles.iconImg} />
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.icon}>
              <img src={passimg} alt="pass" className={styles.iconImg} />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.forgotPassword}>
            <Link to="/forgot-password" className={styles.link}>
              Forgot Password?
            </Link>
          </div>
          {/* Use type="submit" to trigger form submission */}
          <button type="submit" className={styles.button}>LOGIN</button>
          <p className={styles.footerText}>
            Don't have an account?{" "}
            <Link to="/signup" className={styles.link}>Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
