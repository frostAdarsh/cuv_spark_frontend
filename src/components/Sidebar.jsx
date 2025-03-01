import { SidebarData } from "./SidebarData";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";

import EmaliIduser from "./EmaliIduser";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <div className={styles.container}>
      <img src="Group logo.png" alt="Logo" />
      <ul className={styles.boxone}>
        {SidebarData.map((val, key) => (
          <li
            key={key}
            onClick={() => {
              if (val.navigate) {
                navigate(val.navigate);
                setActive(val.navigate);
              }
            }}
            className={`${styles.boxtwo} ${
              active === val.navigate ? styles.active : ""
            }`}
          >
            <div>{val.icon}</div>
            <div>{val.title}</div>
          </li>
        ))}
      </ul>
      <div className={styles.bntemailuse}>
        <EmaliIduser />
      </div>
    </div>
  );
};

export default Sidebar;
