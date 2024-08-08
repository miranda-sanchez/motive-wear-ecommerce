import React from "react";
import { products } from "../data/ProductData";

const SelectedProducts = () => {
  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <section className="SelectedProducts">
      <h2>Popular Products</h2>
      <div className="cards-container">
        {bestSellers.map((product) => (
          <article key={product.id} className="card">
            <figure>
              <img src={product.urlImg} alt={product.nameProduct} />
            </figure>
            <div className="info-card">
              <p className="shipping">Free shipping</p>
              <h3>{product.nameProduct}</h3>
              <p className="price">${product.price}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default SelectedProducts;
