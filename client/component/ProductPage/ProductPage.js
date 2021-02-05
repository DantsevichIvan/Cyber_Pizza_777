import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import OrderStatus from "../common/OrderStatus/OrderStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import s from "./ProductPage.module.css";
import OrderStatusPage from "../OrderStatusPage/OrderStatusPage";
import { getProduct } from "../../action/productsAction";
import { useDispatch, useSelector } from "react-redux";
import not_image from "../../images/not-img.png";
import ButtonBack from "../common/ButtonBack/ButtonBack";
import { addProductForCarts } from "../../action/cartsAction";

const toppings = [
  "Roast Beef",
  "Bell Peppers",
  "Mushrooms",
  "Onions",
  "Tomatoes",
  "Marinara",
];

const ProductPage = () => {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [isOrderStatus, setIsOrderStatus] = useState(false);
  const cart = useSelector((state) => state.carts.cart);
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch]);

  const handleSubmit = () => {
    let newProd = {
      name: product.name,
      subtotal: Number((product.price * quantity).toFixed(1) + cart.subtotal),
      discount: cart.discount,
      count: quantity,
    };
    const id = cart.id;
    dispatch(addProductForCarts(newProd, id));
    setIsOrderStatus(!isOrderStatus);
  };
  const goBack = () => history.goBack();
  return (
    <div className={s.wrap}>
      <div className={s.header}>
        <ButtonBack title={"Back to Menu"} goBack={goBack} />
        <OrderStatus
          cartsProducts={cart.products}
          setIsOrderStatus={setIsOrderStatus}
        />
      </div>
      <div className={s.container}>
        <div className={s.img}>
          <img src={product.image ? product.image : not_image} alt="" />
        </div>
        <div className={s.infoProduct}>
          <div className={s.name}>
            <span>{product.name}</span>
          </div>
          <div className={s.description}>
            <p>{product.description}</p>
          </div>
          <div className={s.size}>
            <span className={s.title}>Size</span>
            <div className={s["form_radio_group"]}>
              <div className={s["form_radio_group-item"]}>
                <input id="radio-1" type="radio" name="radio" value="1" />
                <label htmlFor="radio-1">
                  Small <span>320g</span>
                </label>
              </div>
              <div className={s["form_radio_group-item"]}>
                <input id="radio-2" type="radio" name="radio" value="2" />
                <label htmlFor="radio-2">
                  Medium <span>530g</span>
                </label>
              </div>
              <div className={s["form_radio_group-item"]}>
                <input id="radio-3" type="radio" name="radio" value="3" />
                <label htmlFor="radio-3">
                  Large <span>860g</span>
                </label>
              </div>
            </div>
          </div>
          <div className={s.toppings}>
            <span className={s.title}>Toppings</span>
            <div className={s.toppingsWrap}>
              {toppings.map((el, index) => {
                return (
                  <div className={s.topping} key={index}>
                    <span>{el}</span>
                  </div>
                );
              })}
            </div>
            <div className={s.addTopping}>
              <span>+ More Toppings</span>
            </div>
          </div>
          <div className={s.price}>
            <span className={s.priceValue}>
              ${(product.price * quantity).toFixed(1)}
            </span>
            <div className={s.priceWrap}>
              <div className={s.priceCount}>
                <button
                  disabled={quantity === 1}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={quantity === 10}
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
          <button className={s.btn} onClick={handleSubmit}>
            Place Order
          </button>
        </div>
      </div>
      {isOrderStatus ? (
        <OrderStatusPage setIsOrderStatus={setIsOrderStatus} />
      ) : null}
    </div>
  );
};

export default ProductPage;
