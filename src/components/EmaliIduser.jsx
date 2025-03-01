import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import Logout from "../pages/Logout";
import styles from "./EmailIduser.module.css";

const UserProfile = () => {
  const { getUserById, loading } = useUser();
  const [user, setUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const fetchUser = async () => {
    const userData = await getUserById();
    setUser(userData);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <button
        disabled={loading}
        className={styles.container}
        onClick={() => {
          setOpenModal(!openModal);
        }}
      > 
        {loading
          ? "Loading..."
          : user
          ? user.firstName + "  " + user.lastName
          : "Fetch User"}
        {openModal ? <Logout /> : ""}
      </button>
    </div>
  );
};

export default UserProfile;
