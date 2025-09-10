import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetOrder } from "../redux/cartSlice";

export function OrderConfirmed() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-md fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="rounded-lg bg-white max-w-xl p-5 md:p-10 w-full">
        <img
          src="s/images/icon-order-confirmed.svg"
          alt="Order Confirmed"
        />
        <p className="text-3xl font-bold mt-3 text-rose-900">Order Confirmed</p>
        <p className="text-xl font-normal mt-2 text-rose-300">
          We hope you enjoy your food!
        </p>

        {/* Order Items Display */}
        <div className="bg-rose-100 p-3 md:p-6 mt-5 rounded-md max-h-64 overflow-y-auto">
          {items.map((product) => (
            <div className="flex flex-col">
              <div
                key={product.id}
                className="flex justify-between w-full mt-3"
              >
                <div className="flex space-x-3">
                  <img
                    src={product.image.thumbnail}
                    alt={product.name.thumbnail}
                    className="rounded-md w-16 h-16"
                  />
                  <div>
                    <p className="text-xl font-medium text-rose-900">
                      {product.name}
                    </p>
                    <div className="flex space-x-4 mt-3">
                      <p className="text-xl font-medium text-red">
                        {product.quantity}x
                      </p>
                      <p className="text-lg font-medium text-rose-300">
                        @ ${product.price.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg font-medium text-rose-900">
                  ${(product.price * product.quantity).toFixed(2)}
                </p>
              </div>
              <div class="border-b-2 border-rose-200 mt-2"></div>
            </div>
          ))}
        </div>

        {/* Order Total */}
        <div className="flex justify-between mt-5">
          <p className="text-lg font-medium text-rose-500">Order Total</p>
          <p className="text-2xl font-medium text-rose-900">
            ${totalPrice.toFixed(2)}
          </p>
        </div>

        {/* Close Button */}
        <button
          className="w-full bg-red rounded-full text-white py-2 mt-5"
          onClick={() => dispatch(resetOrder())} // ✅ Reset Cart & Close Modal
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}
