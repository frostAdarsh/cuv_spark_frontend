import { createContext, useContext, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  
  const getUserById = async () => {
    try {
      setLoading(true);
  
      
      const res = await axios.get(`${server}/api/auth/me`, { withCredentials: true });
  
      setLoading(false);
  
      if (res.data.success) {
        setUser(res.data.user);
        return res.data.user;
      } else {
        toast.error(res.data.message || "User not found!");
        return null;
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Failed to fetch user!");
      return null;
    }
  };

  const register = async (formData, navigate) => {
    try {
      const res = await axios.post(`${server}/api/auth/signup`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        setUser(res.data.user);
        toast.success("Registration successful!");
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed!");
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  const login = async (formData, navigate) => {
    try {
      const res = await axios.post(`${server}/api/auth/login`, formData, {
        withCredentials: true,
      });

      if (res.data.success) {
        setUser(res.data.user);
        toast.success("Login successful!");
        navigate("/intro");
      } else {
        toast.error(res.data.message);
      }
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed!");
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  const logout = async () => {
    try {
      await axios.post(`${server}/api/auth/logout`, {}, { withCredentials: true });
      setUser(null);
      toast.success("Logged out successfully!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Error logging out!");
      console.log("Error logging out:", error);
    }
  };

  const updateUser = async (updatedData) => {
    try {
      
      const res = await axios.put(`${server}/api/auth/update`, updatedData, {
        withCredentials: true,
      });
  
      if (res.data.success) {
        
        setUser((prevUser) => ({ ...prevUser, ...updatedData }));
        toast.success("Profile updated successfully!");
      } else {
        toast.error(res.data.message);
      }
  
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update profile!");
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };
  

  return (
    <UserContext.Provider value={{ user, loading, register, login, logout, updateUser, getUserById }}>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);
