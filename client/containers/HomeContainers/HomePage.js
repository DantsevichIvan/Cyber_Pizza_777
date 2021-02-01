import React, { useCallback, useEffect, useState } from "react";
import HeaderHomePage from "../../component/Home/HomeHeader/HeaderHomePage";
import { useDispatch, useSelector } from "react-redux";
import { getCategories, getCategory } from "../../action/categoriesAction";
import { addProductForCarts, createCarts } from "../../action/cartsAction";
import HomeSideBar from "../../component/Home/HomeSideBar/HomeSideBar";
import s from "./HomePage.module.css";
import Product from "../../component/Home/Product/Product";
import OrderStatusPage from "../../component/OrderStatusPage/OrderStatusPage";

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOrderStatus, setIsOrderStatus] = useState(false);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const cart = useSelector((state) => state.carts.cart);
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getCategories());
    dispatch(createCarts());
  }, [dispatch]);
  useEffect(() => {
    if (categories.length) {
      setActiveIndex(0);
      dispatch(getCategory(categories[0]._id));
    }
  }, [categories]);

  const handleClick = (index, id) => {
    setActiveIndex(index);
    dispatch(getCategory(id));
  };

  const addProduct = (product) => {
    let newProd = { name: product.name, price: product.price };
    const id = cart.id;
    dispatch(addProductForCarts(newProd, id));
  };

  return (
    <div className={s.home_wrap}>
      <HomeSideBar
        categories={categories}
        activeIndex={activeIndex}
        handleClick={handleClick}
      />
      <div className={s.home_container}>
        <HeaderHomePage
          cartsProducts={cart.products}
          setIsOrderStatus={setIsOrderStatus}
        />
        <div className={s.home_list_products}>
          <div className={s.home_list_products_title}>
            <span>
              {!!categories.length ? categories[activeIndex].name : null}
            </span>
          </div>
          <div className={s.home_list_products_items}>
            {products.map((product) => (
              <Product
                key={product._id}
                product={product}
                addProductForCarts={addProduct}
              />
            ))}
          </div>
        </div>
      </div>
      {isOrderStatus ? (
        <OrderStatusPage setIsOrderStatus={setIsOrderStatus} />
      ) : null}
    </div>
  );
};

export default HomePage;
