import products from "./products.json";
import { Product } from "./Components/product";
import "./App.css";
import { Cart } from "./Components/cart";

function App() {
  return (
    <>
      <div>
        <div className="md:max-w-[66.6%]">
          <h1 className="font-bold text-3xl">Desserts</h1>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-3 mt-8">
            {products.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Add to cart --> */}
      <div className="container md:absolute top-20 right-20 md:max-w-[28%] rounded-md bg-white h-auto p-6">
        <Cart />
      </div>
    </>
  );
}

export default App;
