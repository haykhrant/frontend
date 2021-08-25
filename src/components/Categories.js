import React, { useState } from "react";
import Arrow from "../icon/up_arrow.png";

const Categories = ({ categories }) => {
  const [activeCategories, setActiveCategories] = useState({});

  const handleExpand = (id) => {
    if (activeCategories[id]) {
      setActiveCategories((prev) => ({
        ...prev,
        [id]: null,
      }));
      return;
    }

    setActiveCategories((prev) => ({
      ...prev,
      [id]: id,
    }));
  };

  return (
    <div className={"categories"}>
      {categories?.map((category) => (
        <div
          key={category.id}
          className={
            activeCategories[category.id]
              ? category.subCategories?.length
                ? "category active"
                : "category active empty"
              : "category"
          }
        >
          <div
            className={"category_text"}
            onClick={handleExpand.bind(null, category.id)}
          >
            {category.name}
            <img className={"icon small"} src={Arrow} alt={">"} />
          </div>

          <div />
          <div className={"subCategories"}>
            {category.subCategories?.length ? (
              category.subCategories?.map((sCategory) => (
                <div key={sCategory.id} className={"subCategory"}>
                  {sCategory.name}
                </div>
              ))
            ) : (
              <div className={"subCategory"}>Empty</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
