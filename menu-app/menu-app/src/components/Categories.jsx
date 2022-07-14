import React from "react";

const Categories = ({ filteri, categ }) => {
  return (
    <div className="btn-container">
      {categ.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filteri(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
