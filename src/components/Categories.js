import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    console.log(activeCategories);
  }, [activeCategories]);
  return (
    <div className={"categories"}>
      {categories.map((category) => (
        <div
          key={category.id}
          className={
            activeCategories[category.id] ? "category active" : "category"
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
            {category.subCategories.map((sCategory) => (
              <div key={sCategory.id} className={"subCategory"}>
                {sCategory.name}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
