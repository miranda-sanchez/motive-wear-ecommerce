import React from "react";
import { products } from "../data/ProductData";

const SelectedProducts = () => {
  return (
    <section>
      <article>
        <figure>
          <img src={products[0].urlImg} alt={products[0].nameProduct} />
        </figure>
      </article>
    </section>
  );
};

export default SelectedProducts;
