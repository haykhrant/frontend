import React, { useEffect, useState } from "react";
import ecoProductsImage from "../images/eco-products.jpg";
const Product = (props) => {
  const {
    name,
    price,
    rating,
    description,
    userName,
    userFullName,
    tags,
    productName,
    productId,
    onCategory,
  } = props;

  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    });
  }, []);

  return (
    <div className={animate ? "card animated" : "card"}>
      <div className="left_section">
        <h4
          className="card_title clickable"
          onClick={onCategory.bind(null, productId)}
        >
          {productName}
        </h4>
        <div className="_img">
          <img src={ecoProductsImage} alt="Eco-market" />
        </div>

        <h3 className="card_title">{name}</h3>
      </div>
      <div className="right_section">
        <div className="card_info">
          <p className="card_description">{description}</p>
          <p className="card_description large">{userFullName}</p>
          <div className="tags">
            {tags.map((tag) => (
              <p key={tag.id} className="tag">
                {tag.name}
              </p>
            ))}
          </div>
        </div>

        <div className="button_section">
          <div className="info">{price}</div>
          <button className="buy _button">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
