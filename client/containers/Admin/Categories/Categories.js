import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategories,
  getCategories,
} from "../../../action/categoriesAction";
import Category from "../../../component/Admin/Category/Category";
import ModalWindow from "../../../component/common/Modal/ModalWindow";
import FormAddCategory from "./Form/FormAddCategory";
import HeaderComponent from "../../../component/Admin/HeaderContainer/HeaderComponent";
import FormUpdateCategory from "./Form/FormUpdateCategory";
import s from "../Container.module.css";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [isModal, setIsModal] = useState(false);
  const [method, setMethod] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  const openCloseModal = () => {
    setIsModal(!isModal);
  };

  const createCategory = (value) => {
    setIsModal(!isModal);
    setMethod("create");
  };
  const removeCategory = (id) => {
    dispatch(deleteCategories(id));
  };

  const updateCategory = (category) => {
    setIsModal(!isModal);
    setMethod("update");
    setCategory(category);
  };

  return (
    <div className={s.container}>
      <HeaderComponent
        create={createCategory}
        value={"Add Categories"}
        title={"Categories"}
      />
      <div className={s.wrap}>
        {categories.map((item) => {
          return (
            <Category
              key={item._id}
              category={item}
              removeCategory={removeCategory}
              updateCategory={updateCategory}
            />
          );
        })}
      </div>
      {isModal ? (
        method === "create" ? (
          <ModalWindow
            Component={FormAddCategory}
            openCloseModal={openCloseModal}
          />
        ) : (
          <ModalWindow
            Component={FormUpdateCategory}
            item={category}
            openCloseModal={openCloseModal}
          />
        )
      ) : null}
    </div>
  );
};

export default Categories;
