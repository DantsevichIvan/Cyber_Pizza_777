import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAddProduct from "./Form/FormAddProduct";
import Product from "../../../component/Admin/Product/Product";
import ModalWindow from "../../../component/common/Modal/ModalWindow";
import HeaderComponent from "../../../component/Admin/HeaderContainer/HeaderComponent";
import FormUpdateProduct from "./Form/FormUpdateProduct";
import { deleteProduct, getProducts } from "../../../action/productsAction";
import s from "../Container.module.css";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const [isModal, setModal] = useState(false);
  const [isMethod, setMethod] = useState("");
  const [product, setProduct] = useState({});
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  const openCloseModal = () => {
    setModal(!isModal);
  };
  const createProduct = () => {
    setModal(!isModal);
    setMethod("create");
  };
  const removeProduct = (id) => {
    dispatch(deleteProduct(id));
  };
  const updateProduct = (product) => {
    setModal(!isModal);
    setMethod("update");
    setProduct(product);
  };

  return (
    <div className={s.container}>
      <HeaderComponent
        create={createProduct}
        value={"Add"}
        title={"Products"}
      />
      <div className={s.wrap}>
        {products.map((item) => {
          return (
            <Product
              key={item._id}
              updateProduct={updateProduct}
              removeProduct={removeProduct}
              product={item}
            />
          );
        })}
      </div>
      {isModal ? (
        isMethod === "create" ? (
          <ModalWindow
            Component={FormAddProduct}
            openCloseModal={openCloseModal}
          />
        ) : (
          <ModalWindow
            Component={FormUpdateProduct}
            openCloseModal={openCloseModal}
            item={product}
          />
        )
      ) : null}
    </div>
  );
};

export default Products;
