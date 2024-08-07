import React, { useState } from "react";
import { products } from "../data/ProductData";
import imgBtn from "../img/heart.png";

const Products = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredProductId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  return (
    <section className="Products">
      <h2>Products</h2>
      {products.map((product) => (
        <article
          key={product.id}
          className="item"
          onMouseEnter={() => handleMouseEnter(product.id)}
          onMouseLeave={handleMouseLeave}
        >
          <figure>
            <img
              src={
                hoveredProductId === product.id
                  ? product.urlImgHover
                  : product.urlImg
              }
              alt={product.nameProduct}
            />
          </figure>
          <div className="info-product">
            <h3>{product.nameProduct}</h3>
            <p>${product.price}</p>
            <button className="btn-action">Add to cart</button>
            <button>
              <img className="img-btn" src={imgBtn} alt="Favorite" />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Products;
