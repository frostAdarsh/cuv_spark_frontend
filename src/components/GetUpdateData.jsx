import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";

const GetUpdateData = () => {
  const { getDataById, updateData } = useData();
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    links: [],
    avatar: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataById(id);
      if (data) {
        setFormData({
          name: data.name || "",
          bio: data.bio || "",
          links: data.links || [],
          avatar: data.avatar || null,
        });
      }
    };
    fetchData();
  }, [id, getDataById]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, avatar: e.target.files[0] });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const updated = await updateData(id, formData);
    if (updated.success) {
      toast.success("Data updated successfully!");
    } else {
      toast.error("Failed to update data");
    }
  };

  return (
    <div>
      <h2>Edit Data</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
        />
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          placeholder="Enter bio"
        />
        <input type="file" name="avatar" onChange={handleFileChange} />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default GetUpdateData;
