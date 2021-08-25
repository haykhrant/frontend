import React, { useEffect, useState } from "react";
import Categories from "../../components/Categories";
import Loading from "../../components/Loading";
import { connect } from "react-redux";

import { getCategoryThunk } from "../../thunks/category.thunk";

import "./Home.style.scss";
import { formatCategories } from "../../utils";

const Home = (props) => {
  const { categories: categoriesFromProps, getCategories } = props;
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getCategories().then(() => setLoading(false));
  }, [getCategories]);

  useEffect(() => {
    if (categoriesFromProps.length) {
      setCategories(formatCategories(categoriesFromProps));
    }
  }, [categoriesFromProps, setCategories]);

  return (
    <div className={"main"}>
      <div className={"left_side"}>
        {!loading ? <Categories categories={categories} /> : <Loading />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { category } = state;
  return category;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCategories: async () => {
      await dispatch(getCategoryThunk());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
