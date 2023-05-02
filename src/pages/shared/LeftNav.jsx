import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("http://localhost:2500/category")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div>
      <h2>All category</h2>
      <div className="ps-4">
        {category.map((category) => (
          <p key={category.id}>
            <Link
              to={`/category/${category.id}`}
              className="text-secondary text-decoration-none"
            >
              {category.name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
