import React, { useRef } from "react";
import Product from "./Product";
const ProductList = ({ products, loading, onCategory }) => {
  const arr = [...products];

  const { current: EMPTY_PRODUCTS } = useRef(new Array(3).fill(null));

  return (
    <div className="card_list">
      {!loading ? (
        arr.length ? (
          arr
            .reverse()
            .map((product) => (
              <Product
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                rating={product.rating}
                userName={product.userName}
                userFullName={product.userFullName}
                tags={product.tags}
                productName={product.productName}
                productId={product.productId}
                onCategory={onCategory}
              />
            ))
        ) : (
          <span className="empty">No Products</span>
        )
      ) : (
        EMPTY_PRODUCTS.map((_, index) => (
          <div key={index} className="card loading-animation" />
        ))
      )}
    </div>
  );
};

export default ProductList;
