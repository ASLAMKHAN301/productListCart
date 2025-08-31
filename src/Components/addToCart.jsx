import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

export function AddToCart() {
  const items = useSelector((state) => state.cart.items); // ✅ Corrected to `state.cart.items`
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col">
      <div>
        {items.length === 0 ? (
          <div className="emptyCart-cont flex flex-col items-center mt-12">
            <img src="assets/images/illustration-empty-cart.svg" alt="" />
            <p className="text-sm font-medium text-rose-400 text-center mt-3 mb-2">
              Your added items will appear here
            </p>
          </div>
        ) : (
          items.map((product) => (
            <div
              key={product.id}
              className={`flex flex-col adding-items-${product.id}`}
            >
              <div className="flex justify-between mt-5">
                <div className="max-w-xl">
                  <p className="text-xl font-medium text-rose-900">
                    {product.name}
                  </p>
                  <div className="flex space-x-4">
                    <p className="text-xl font-medium text-red-500">
                      <span className={`items-selected-${product.id}`}>
                        {product.quantity}
                      </span>{" "}
                      x
                    </p>
                    <p className="text-lg font-medium text-rose-300">
                      @ ${product.price?.toFixed(2)}
                    </p>
                    <p className="text-lg font-medium text-rose-400">
                      $
                      <span className={`total-cal-${product.id}`}>
                        {(product.price * product.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="rounded-full w-5 h-5 border-[2px] border-rose-300 p-[2px] cursor-pointer">
                    <img
                      src="/assets/images/icon-remove-item.svg"
                      onClick={() => dispatch(removeFromCart(product.id))}
                      alt="Remove Item"
                      className={`w-4 close-${product.id}`}
                    />
                  </div>
                </div>
              </div>
              <div className="border-b-2 border-rose-100 mt-2"></div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
