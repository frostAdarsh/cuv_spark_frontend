import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Intro.module.css";
import toast from "react-hot-toast";
import { useData } from "../context/DataContext";

const Intro = () => {
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    localStorage.getItem("selectedCategory") || null
  );
  const navigate = useNavigate();
  const { createData, updateData, data } = useData();

  useEffect(() => {
    if (data && data.name) {
      setName(data.name);
    }
  }, [data]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    localStorage.setItem("selectedCategory", category);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !selectedCategory) {
      toast.error("Please enter a username and select a category.");
      return;
    }

    if (data) {
      await updateData({ id: data._id, name });
      toast.success("Name updated successfully!");
    } else {
      await createData({ name });
      toast.success("Profile created successfully!");
    }

    navigate("/links");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formbox}>
        <img src="Group logo.png" alt="" />
        <div className={styles.boxone}>
          <h1 className={styles.boxoneheading}>Tell us about yourself</h1>
          <h1 className={styles.boxoneheading1}>
            For a personalized Spark experience
          </h1>
          <form onSubmit={handleSubmit} className={styles.formstyle}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tell us your username"
            />
            <div className={styles.boxtwo}>
              <div className={styles.boxtwoheadind}>
                Select one category that best describes your Linktree:
              </div>
              <div className={styles.boxtwoca}>
                {[
                  { img: "bil.png", label: "Business" },
                  { img: "pa.png", label: "Creative" },
                  { img: "book.png", label: "Education" },
                  { img: "mu.png", label: "Entertainment" },
                  { img: "dre.png", label: "Fashion & Beauty" },
                  { img: "pi.png", label: "Food & Beverage" },
                  { img: "tra.png", label: "Government & Politics" },
                  { img: "apple.png", label: "Health & Wellness" },
                  { img: "heart.png", label: "Non-Profit" },
                  { img: "heart.png", label: "Other" },
                  { img: "compu.png", label: "Tech" },
                  { img: "airpl.png", label: "Travel & Tourism" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`${styles.boxtwocasty} ${
                      selectedCategory === item.label ? styles.active : ""
                    }`}
                    onClick={() => handleCategoryClick(item.label)}
                  >
                    <img src={item.img} alt="" />
                    <h1 className={styles.boxtwocapa}>{item.label}</h1>
                  </div>
                ))}
              </div>
            </div>
            <button type="submit">Continue</button>
          </form>
        </div>
      </div>
      <img src="photo.png" alt="" />
    </div>
  );
};

export default Intro;
