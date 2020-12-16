import React, { useEffect, useState } from "react";
import HeaderHomePage from "../component/HeaderHomePage";
import "../style/HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategory } from "../action/categoriesAction";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  useEffect(() => {
    dispatch(getCategories());
    if (!!categories.length) {
    }
  }, [dispatch]);

  const handleClick = (index, id) => {
    setActiveIndex(index);
    dispatch(getCategory(id));
  };

  return (
    <div className="home_wrap">
      <HeaderHomePage />
      <div className="home_container">
        <div className="home_list-categories">
          <div>
            <div className="home_list-categories_title">
              <span>categories</span>
            </div>
            <div className="home_list-categories_items">
              {categories.map((item, index) => {
                const cn =
                  activeIndex === index
                    ? "active_item"
                    : "home_list-categories_item";
                return (
                  <span
                    className={cn}
                    key={index}
                    onClick={() => handleClick(index, item._id)}
                  >
                    {item.name}
                  </span>
                );
              })}
            </div>
          </div>
          <div className="home_list-categories_link">
            <Link to="#">Login</Link>
          </div>
        </div>

        <div className="home_list-products">
          <div className="home_list-products_title">
            <span>
              {!!categories.length ? categories[activeIndex].name : null}
            </span>
          </div>
          <div className="home_list-products_items">
            <div className="item_product">
              <div className="item_product_img">
                <img
                  src="https://www.pizzatempo.by/i/photo/catalog/products/t/r_99_280x280.jpg?v=1605510590"
                  alt=""
                />
                <div className="item_product_btn_Add">
                  <button className="icon-btn add-btn">+</button>
                </div>
              </div>
              <div className="item_product_price">
                <span>
                  <span>price</span>
                </span>
              </div>
              <div className="item_product_name">
                <span>Name</span>
              </div>
              <div className="item_product_description">
                <span>Description</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
