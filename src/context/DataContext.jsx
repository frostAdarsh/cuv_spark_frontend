import { createContext, useContext, useState } from "react";
import axios from "axios";
import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";

const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getDataById = async (id) => {
    try {
      setLoading(true);
      const res = await axios.get(`${server}/api/data/${id}`, { withCredentials: true });
      setLoading(false);
      
      if (res.data.success) {
        setData(res.data.data);
        return res.data.data;
      } else {
        toast.error(res.data.message || "Data not found!");
        return null;
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.response?.data?.message || "Failed to fetch data!");
      return null;
    }
  };

  const createData = async (formData) => {
    try {
      const res = await axios.post(`${server}/api/data`, formData, { withCredentials: true });
      
      if (res.data.success) {
        setData(res.data.data);
        toast.success("Data created successfully!");
      } else {
        toast.error(res.data.message);
      }
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create data!");
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  const updateData = async (id, updatedData) => {
    try {
      const res = await axios.put(`${server}/api/data/${id}`, updatedData, { withCredentials: true });
      
      if (res.data.success) {
        setData((prevData) => ({ ...prevData, ...updatedData }));
        toast.success("Data updated successfully!");
      } else {
        toast.error(res.data.message);
      }
      return res.data;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update data!");
      return { success: false, message: error.response?.data?.message || error.message };
    }
  };

  return (
    <DataContext.Provider value={{ data, loading, getDataById, createData, updateData }}>
      <Toaster position="top-center" reverseOrder={false} />
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use DataContext
export const useData = () => useContext(DataContext);
