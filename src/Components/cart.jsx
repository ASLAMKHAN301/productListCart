import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddToCart } from "./addToCart";
import { OrderConfirmed } from "./orderConformed";
import { confirmOrder } from "../redux/cartSlice";

export function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const orderConfirmed = useSelector((state) => state.cart.orderConfirmed);

  return (
    <>
      {/* Blur effect when order is confirmed */}
      <div className={`w-full ${orderConfirmed ? "blur-md" : ""}`}>
        <p className="text-2xl font-bold text-red">
          Your Cart ({items.length})
        </p>

        {/* <!-- Cart Display --> */}
        <div className="w-full cart-display">
          {/* <!-- Items --> */}
          <div className="display-desserts overflow-y-auto max-h-64">
            <AddToCart />
          </div>

          {/* <!-- Order Total --> */}
          {items.length > 0 && (
            <div>
              <div className="flex justify-between mt-5">
                <p className="text-lg font-medium text-rose-500">Order Total</p>
                <p className="text-2xl font-medium text-rose-900">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center justify-center mt-5 py-2 bg-rose-50 space-x-2 rounded-sm">
                <img src="/images/icon-carbon-neutral.svg" alt="" />
                <p className="text-sm font-medium text-rose-500">
                  This is a{" "}
                  <span className="text-rose-900">carbon-neutral</span> delivery
                </p>
              </div>

              <button
                className="confirm-order-btn w-full bg-red rounded-full text-white py-2 mt-5"
                onClick={() => dispatch(confirmOrder())} // ✅ Dispatch confirmOrder
              >
                Confirm Order
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Confirmed Modal */}
      {orderConfirmed && <OrderConfirmed />}
    </>
  );
}
