import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

export function Product({ product = {} }) {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const isInCart = cart.some((item) => item.id === product.id);
  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="relative">
      <img
        src={product.image.desktop}
        alt=""
        className={`hidden md:block rounded-lg dimg-${product.id}`}
      />
      <img
        src={product.image.mobile}
        alt=""
        className={`block md:hidden rounded-lg mimg-${product.id}`}
      />

      {/* Buttons */}
      {!isInCart ? (
        <button
          className={`absolute bottom-24 left-12 md:left-5 bg-white rounded-full px-10 py-2 border-2 addtocart-btn-${product.id}`}
          onClick={() => dispatch(addToCart(product))}
        >
          <div className="flex space-x-3">
            <img src="/images/icon-add-to-cart.svg" alt="" />
            <p className="text-lg font-medium text-rose-900">Add to Cart</p>
          </div>
        </button>
      ) : (
        <button
          className={`absolute bottom-24 left-12 md:left-5 bg-red rounded-full px-3 py-2 border-2 border-red border-opacity-50 additems-btn-${product.id}`}
        >
          <div className="flex space-x-16">
            <img
              src="/images/icon-decrement-quantity.svg"
              onClick={() => dispatch(decrementQuantity(product.id))}
              className={`border opacity-80 rounded-full w-6 h-6 p-1 minus-icon-${product.id}`}
              alt=""
            />
            <span className="text-white font-semibold text-lg">
              {cartItem.quantity}
            </span>
            <img
              src="/images/icon-increment-quantity.svg"
              onClick={() => dispatch(incrementQuantity(product.id))}
              className={`border opacity-80 rounded-full w-6 h-6 p-1 plus-icon-${product.id}`}
              alt=""
            />
          </div>
        </button>
      )}

      {/* Product Info */}
      <p className="text-lg text-rose-400 mt-10">{product.category}</p>
      <p className="text-xl font-medium text-rose-900">{product.name}</p>
      <p className="text-xl font-medium text-red">
        ${product.price.toFixed(2)}
      </p>
    </div>
  );
}
