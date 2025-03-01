
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import styles from "./Logout.module.css";
import { PiSignOutThin } from "react-icons/pi";
const Logout = () => {
  const { logout, loading } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout(); 
    navigate("/login"); 
  };

  return (
    <button onClick={handleLogout} disabled={loading} className={styles.container}>
      <PiSignOutThin />

      {loading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default Logout;
