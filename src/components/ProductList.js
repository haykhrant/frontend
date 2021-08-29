import React from "react";
import Product from "./Product";
const ProductList = (props) => {
  const { products, loading } = props;
  const arr = [...products];

  return (
    <div className="card_list">
      {arr.length ? (
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
            />
          ))
      ) : (
        <span className="todo_list large">No Products</span>
      )}
    </div>
  );
};

export default ProductList;
