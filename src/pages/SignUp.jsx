import styles from "./SignUp.module.css";
import { useState } from "react";
import { useUser } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToPolicy: false,
  });

  const [errors, setErrors] = useState({});
  const { register } = useUser();
  const navigate = useNavigate();

  const validateForm = () => {
    let newErrors = {};

    const isValidEmail = (email) => /^\S+@\S+\.\S+$/.test(email);
    const isValidPassword = (password) => {
      const symbolRegex = /[!@#$%^&*(),.?":{}|<>]/;
      const numberRegex = /[0-9]/;
      const upperCaseRegex = /[A-Z]/;
      const lowerCaseRegex = /[a-z]/;
      return (
        password.length >= 8 &&
        symbolRegex.test(password) &&
        numberRegex.test(password) &&
        upperCaseRegex.test(password) &&
        lowerCaseRegex.test(password)
      );
    };

    if (!formData.firstName) newErrors.firstName = "First name is required";
    if (!formData.lastName) newErrors.lastName = "Last name is required";

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!isValidPassword(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long.\n" +
        "It should include at least one lowercase and\n" +
        "uppercase letter, a number, and a special\n" +
        "character (!@#$%^&*).";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords must match";
    }

    if (!formData.agreeToPolicy) {
      newErrors.agreeToPolicy = "You must agree to the privacy policy";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await register(formData, navigate);
    } catch (error) {
      console.error("Registration failed:", error);
      setErrors((prev) => ({
        ...prev,
        server: "Registration failed. Please try again.",
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className={styles.container}>
      <div className={styles.formbox}>
        <div>
          <img src="Group logo.png" alt="Spark Group Logo" />
        </div>
        <div className={styles.formboxone}>
          <div className={styles.formboxdes}>Sign up to your Spark</div>
          <form onSubmit={handleSubmit} className={styles.formboxbody}>
            <div className={styles.formboxdata}>
              <div className={styles.formboxdatades}>Create an account</div>
              <Link to="/login" className={styles.formboxdatalink}>
                Sign in instead
              </Link>
            </div>
            {errors.server && (
              <p style={{ color: "#EE1D52" }}>{errors.server}</p>
            )}

            <div className={styles.mdata}>
              <label>First name</label>
              <input
                type="text"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p style={{ color: "#EE1D52" }}>{errors.firstName}</p>
              )}
            </div>

            <div className={styles.mdata}>
              <label>Last name</label>
              <input
                type="text"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p style={{ color: "#EE1D52" }}>{errors.lastName}</p>
              )}
            </div>

            <div className={styles.mdata}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p style={{ color: "#EE1D52" }}>{errors.email}</p>
              )}
            </div>

            <div className={styles.mdata}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && (
                <p style={{ color: "#EE1D52", whiteSpace: "pre-line" }}>
                  {errors.password}
                </p>
              )}
            </div>

            <div className={styles.mdata}>
              <label>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                autoComplete="new-password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && (
                <p style={{ color: "#EE1D52" }}>{errors.confirmPassword}</p>
              )}
            </div>

            <div className={styles.ck}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="agreeToPolicy"
                  checked={formData.agreeToPolicy}
                  onChange={handleChange}
                  className={styles.checkbox}
                />
                By creating an account, I agree to our <span>Terms of use</span>
                <br />
                and <span>Privacy Policy</span>
              </label>
              {errors.agreeToPolicy && (
                <p style={{ color: "#EE1D52" }}>{errors.agreeToPolicy}</p>
              )}
            </div>

            <button
              type="submit"
              className={styles.signupbtn}
              disabled={!formData.agreeToPolicy}
            >
              Create an account
            </button>
          </form>

          <div className={styles.goggle}>
            This site is protected by reCAPTCHA and the{" "}
            <span>Google Privacy Policy</span>
            and <span>Terms of Service apply.</span>
          </div>
        </div>
      </div>
      <img src="photo.png" alt="Illustration" />
    </div>
  );
};

export default SignUp;
