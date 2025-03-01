import React, { useState, useEffect } from "react";
import { useUser } from "../context/UserContext";
import styles from "./Appearance.module.css";
const Appearance = () => {
 const { getUserById, loading } = useUser();
   const [user, setUser] = useState(null);
 
   const fetchUser = async () => {
     const userData = await getUserById();
     setUser(userData);
   };
 
   useEffect(() => {
     fetchUser();
   }, []);
   return (
     <div className={styles.contianer}>
       <div className={styles.boxone}>
         <div className={styles.boxoneone}>
           <h1>Hi,</h1>
           {loading
             ? "Loading..."
             : user
             ? user.firstName + "  " + user.lastName
             : "Fetch User"}
         </div>
         <div className={styles.boxoneonetwo}>Congratulations . You got a great response today . </div>
       </div>
     </div>
   );
}

export default Appearance