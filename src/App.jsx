import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "./components/shares/Product";
import { add, remove } from "./redux/actions";
function App() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let response = await fetch("https://fakestoreapi.com/products");
  //       let pds = await response.json();
  //       dispatch(add(pds));
  //     } catch (error) {
  //       console.error("Error ", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <div className="container">
      <div className="row m-3">
        {products.map((item) => (
          <div key={item.id} className="col-3 my-1">
            <Product product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
