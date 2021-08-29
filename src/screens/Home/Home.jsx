import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import Categories from "../../components/Categories";
import Loading from "../../components/Loading";

import { getCategoryThunk } from "../../thunks/category.thunk";
import { getProductThunk } from "../../thunks/product.thunk";

import { formatCategories, formatProducts } from "../../utils";
import "./Home.style.scss";
import ProductList from "../../components/ProductList";

const Home = (props) => {
  const { getCategories, getProducts } = props;
  const { categories: categoriesFromProps } = props.category;
  const { products: productsFromProps } = props.product;

  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //setLoading(true);
    getCategories();
    getProducts();
  }, [getCategories, getProducts]);

  useEffect(() => {
    if (categoriesFromProps.length) {
      setCategories(formatCategories(categoriesFromProps));
    }
  }, [categoriesFromProps, setCategories]);

  useEffect(() => {
    if (productsFromProps.length) {
      setProducts(formatProducts(productsFromProps));
    }
  }, [productsFromProps, setProducts]);

  return (
    <div className={"main"}>
      <div className={"left_side"}>
        {!loading ? <Categories categories={categories} /> : <Loading />}
      </div>
      <div className={"main_side"}>
        <ProductList products={products} />
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
    getProducts: async () => await dispatch(getProductThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
