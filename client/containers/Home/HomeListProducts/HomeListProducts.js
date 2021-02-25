import React, { useEffect } from "react";
import s from "../HomePage.module.css";
import Product from "../../../component/Home/Product/Product";
import { getCategory } from "../../../action/categoriesAction";
import { useDispatch, useSelector } from "react-redux";
import { addProductForCarts } from "../../../action/cartsAction";
import { getAllProduct } from "../../../action/productsAction";

const HomeListProducts = ({ category }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.carts.cart);
  useEffect(() => {
    if (category) {
      dispatch(getCategory(category));
    } else dispatch(getAllProduct());
  }, [categories, category]);

  const addProduct = (product) => {
    let newProd = {
      name: product.name,
      count: 1,
      price: product.price,
      image: product.image
    };
    const id = cart.id;
    dispatch(addProductForCarts(newProd, id));
  };

  return (
    <div className={s.home_list_products}>
      <div className={s.home_list_products_title}>
        <span>{categories.name}</span>
      </div>
      <div className={s.home_list_products_items}>
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            addProductForCarts={addProduct}
            name={name}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeListProducts;
