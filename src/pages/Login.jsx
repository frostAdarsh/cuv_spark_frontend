import styles from "./Login.module.css";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(formData, navigate);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formbox}>
        <div>
          <img src="Group logo.png" alt="Spark Group Logo" />
        </div>
        <div className={styles.formboxone}>
          <h2 className={styles.formboxdes}>Sign in to your Spark</h2>
          <form onSubmit={handleSubmit} className={styles.formboxbody}>
            
            <div className={styles.ldata}>
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="spark/Username"
                autoComplete="username"
              />
            </div>

            
            <div className={styles.ldata}>
              <label htmlFor="password"></label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.togglePassword}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
              </button>
            </div>

            
            <button type="submit" className={styles.loginbtn}>
              Log in
            </button>
          </form>

         
          <Link to="/signup" className={styles.singuplink}>
            Don't have an account? <span>Sign up</span>
          </Link>

          
          <div className={styles.goggle}>
            This site is protected by reCAPTCHA and the{" "}
            <span>Google Privacy Policy</span> and <span>Terms of Service apply.</span>
          </div>
        </div>
      </div>
      <img src="photo.png" alt="Illustration" />
    </div>
  );
};

export default Login;
