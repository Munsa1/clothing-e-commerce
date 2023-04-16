import React, { useState, useEffect } from "react";

function Products() {
  const [state, setData] = useState(initialState);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, [third]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Latest Products</h1>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;
