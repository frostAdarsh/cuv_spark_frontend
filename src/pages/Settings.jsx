import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import styles from "./Settings.module.css";

const Settings = () => {
  const { getUserById, loading, updateUser } = useUser();
  const [user, setUser] = useState(null);

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await getUserById();
        setUser(userData);
        setFormData({
          firstName: userData?.firstName || "",
          lastName: userData?.lastName || "",
          email: userData?.email || "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await updateUser(formData);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating user:", error);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className={styles.contianer}>
      <div className={styles.boxone}>
        <div className={styles.boxoneone}>
          <h1>Hi,</h1>
          {loading
            ? "Loading..."
            : user
            ? `${user.firstName} ${user.lastName}`
            : "Fetch User"}
        </div>
        <div className={styles.boxoneonetwo}>
          Congratulations! You got a great response today.
        </div>
      </div>

      <div className={styles.boxtwo}>
        <form onSubmit={handleSubmit} className={styles.formone}>
          <div className={styles.ep}>Edit Profile</div>
          <hr />
          <div className={styles.inputGroup}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
