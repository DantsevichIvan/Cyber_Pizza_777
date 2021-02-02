import React, { useEffect, useState } from "react";
import s from "../../../containers/HomeContainers/HomePage.module.css";
import Product from "../Product/Product";
import { getCategory } from "../../../action/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { addProductForCarts } from "../../../action/cartsAction";

const HomeListProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.carts.cart);

  useEffect(() => {
    if (categories.length) {
      setActiveIndex(0);
      dispatch(getCategory(categories[0]._id));
    }
  }, [categories]);

  const addProduct = (product) => {
    let newProd = {
      name: product.name,
      subtotal: product.price + cart.subtotal,
      discount: cart.discount,
    };
    const id = cart.id;
    dispatch(addProductForCarts(newProd, id));
  };

  return (
    <div className={s.home_list_products}>
      <div className={s.home_list_products_title}>
        <span>{!!categories.length ? categories[activeIndex].name : null}</span>
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
  );
};

export default HomeListProducts;
