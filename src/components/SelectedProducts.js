import React from "react";
import { products } from "../data/ProductData";

const SelectedProducts = () => {
  return (
    <section className="SelectedProducts">
      <article className="card">
        <figure>
          <img src={products[0].urlImg} alt={products[0].nameProduct} />
        </figure>
        <div className="card-text"></div>
      </article>
    </section>
  );
};

export default SelectedProducts;
