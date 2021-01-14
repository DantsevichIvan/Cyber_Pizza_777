import React, { useEffect, useState } from "react";
import HeaderHomePage from "../../component/Home/HomeHeader/HeaderHomePage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategory } from "../../action/categoriesAction";
import { createCarts } from "../../action/cartsAction";
import HomeSideBar from "../../component/Home/HomeSideBar/HomeSideBar";
import s from "./HomePage.module.css";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const cartsProducts = useSelector((state) => state.carts.products);
  console.log(cartsProducts);
  useEffect(() => {
    dispatch(getCategories());
    dispatch(createCarts());
  }, [dispatch]);

  const handleClick = (index, id) => {
    setActiveIndex(index);
    dispatch(getCategory(id));
  };

  return (
    <div className={s.home_wrap}>
      <HeaderHomePage cartsProducts={cartsProducts} />
      <div className={s.home_container}>
        <HomeSideBar
          categories={categories}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />
        <div className={s.home_list_products}>
          <div className={s.home_list_products_title}>
            <span>
              {!!categories.length ? categories[activeIndex].name : null}
            </span>
          </div>
          <div className={s.home_list_products_items}>
            <div className={s.item_product}>
              <div className={s.item_product_img}>
                <img
                  src="https://www.pizzatempo.by/i/photo/catalog/products/t/r_99_280x280.jpg?v=1605510590"
                  alt=""
                />
                <div className={s.item_product_btn_Add}>
                  <button className="icon-btn add-btn">+</button>
                </div>
              </div>
              <div className={s.item_product_price}>
                <span>
                  <span>price</span>
                </span>
              </div>
              <div className={s.item_product_name}>
                <span>Name</span>
              </div>
              <div className={s.item_product_description}>
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
