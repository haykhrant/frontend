import React from "react";
import Product from "./Product";
import Loading from "./Loading";
const ProductList = ({ products, loading, onCategory }) => {
  const arr = [...products];

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
          <span className="card_list empty">No Products</span>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductList;
