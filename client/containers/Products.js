import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormAddProduct from "../component/FormAddProduct";
import Product from "../component/Product";
import ModalWindow from "../component/ModalWindow";
import HeaderContainer from "../component/HeaderContainer";
import FormUpdateProduct from "../component/FormUpdateProduct";
import { deleteProduct, getProducts } from "../action/productsAction";
import "../style/Products.css";
import "../style/Modal.css";

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
    <div className="container">
      <HeaderContainer
        create={createProduct}
        value={"Add Products"}
        title={"Products"}
      />
      <div className="products">
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
