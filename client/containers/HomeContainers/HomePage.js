import React, { useCallback, useEffect, useState } from "react";
import HeaderHomePage from "../../component/Home/HomeHeader/HeaderHomePage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategory } from "../../action/categoriesAction";
import { addProductForCarts, createCarts } from "../../action/cartsAction";
import HomeSideBar from "../../component/Home/HomeSideBar/HomeSideBar";
import s from "./HomePage.module.css";
import Product from "../../component/Home/Product/Product";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const cart = useSelector((state) => state.carts.cart);
  const productsList = useSelector(
    (state) => state.categories.category.products
  );

  console.log(productsList);
  useEffect(async () => {
    await initialState();
    const id = categories?.[activeIndex]?._id;
    console.log(id);
  }, []);

  const initialState = useCallback(async () => {
    await dispatch(getCategories());
    await dispatch(createCarts());
  }, [dispatch]);

  const handleClick = (index, id) => {
    setActiveIndex(index);
    dispatch(getCategory(id));
  };

  const addProduct = (product) => {
    const id = cart.id;
    dispatch(addProductForCarts(product, id));
  };

  return (
    <div className={s.home_wrap}>
      <HomeSideBar
        categories={categories}
        activeIndex={activeIndex}
        handleClick={handleClick}
      />
      <div className={s.home_container}>
        <HeaderHomePage cartsProducts={cart.products} />
        <div className={s.home_list_products}>
          <div className={s.home_list_products_title}>
            <span>
              {!!categories.length ? categories[activeIndex].name : null}
            </span>
          </div>
          <div className={s.home_list_products_items}>
            {productsList.map((product) => (
              <Product
                key={product._id}
                product={product}
                addProductForCarts={addProduct}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
