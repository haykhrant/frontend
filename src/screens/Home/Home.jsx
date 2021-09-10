import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Categories from "../../components/Categories";

import { getCategoryThunk } from "../../thunks/category.thunk";
import {
  getProductByCategoryThunk,
  getProductThunk,
} from "../../thunks/product.thunk";

import { formatCategories, formatProducts } from "../../utils";
import ProductList from "../../components/ProductList";

import "../screen.style.scss";

const Home = (props) => {
  const { getCategories, getProducts, getProductByCategory } = props;
  const { categories: categoriesFromProps, loading: categoryLoading } =
    props.category;
  const { products: productsFromProps, loading: productLoading } =
    props.product;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const getProductByCategoryLoading = (id) => {
    getProductByCategory(id);
  };

  useEffect(() => {
    Promise.allSettled([getCategories(), getProducts()]);
  }, [getCategories, getProducts]);

  useEffect(() => {
    setCategories(formatCategories(categoriesFromProps));
  }, [categoriesFromProps, setCategories]);

  useEffect(() => {
    setProducts(formatProducts(productsFromProps));
  }, [productsFromProps, setProducts]);

  return (
    <div className={"screen"}>
      <div className={"left_side"}>
        <Categories
          categories={categories}
          onCategory={getProductByCategoryLoading}
          loading={categoryLoading}
        />
      </div>
      <div className={"main_side"}>
        <ProductList
          products={products}
          loading={productLoading}
          onCategory={getProductByCategoryLoading}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { category, product } = state;
  return { category, product };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: async () => await dispatch(getCategoryThunk()),
    getProductByCategory: async (id) =>
      await dispatch(getProductByCategoryThunk(id)),
    getProducts: async () => await dispatch(getProductThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
