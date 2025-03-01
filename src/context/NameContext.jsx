import { createContext, useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { server } from "../main";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [singleName, setSingleName] = useState(null);

  // 🔹 Create a Name
  const createName = async (name, navigate) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${server}/api/name/createname`,
        { name },
        { withCredentials: true } // Ensures cookies are sent
      );

      if (data.success) {
        toast.success("UserName added successfully");
        navigate("/super");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error creating name");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Get a Single Name by ID
  const getNameById = async (id) => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `${server}/api/name/${id}`,
        { withCredentials: true } // Ensures cookies are sent
      );

      if (data.success) {
        setSingleName(data.name);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error fetching name");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Update a Name
  const updateName = async (id, newName) => {
    try {
      setLoading(true);
      const { data } = await axios.put(
        `${server}/api/name/${id}`,
        { name: newName },
        { withCredentials: true } // Ensures cookies are sent
      );

      if (data.success) {
        toast.success("Name updated successfully");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Error updating name");
    } finally {
      setLoading(false);
    }
  };

  return (
    <NameContext.Provider value={{ 
      singleName, 
      loading, 
      createName, 
      getNameById, 
      updateName 
    }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => useContext(NameContext);
