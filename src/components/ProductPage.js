import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/ProductData";
import imgCartBtn from "../img/cart-icon.png";
import imgArrow from "../img/arrow-down.png";

const ProductPage = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      return setAllProducts([...products]);
    } else {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    }
  };

  return (
    <main className="ProductPage">
      <Link to="/products">
        <div className="go-back">
          <img className="img-arrow-icon" src={imgArrow} alt="" />
          <p>Go back to Products</p>
        </div>
      </Link>
      <section className="product-page-content">
        <div className="product-page-info">
          <h1 className="product-page-title">{product.nameProduct}</h1>
          <p className="product-page-price">${product.price}</p>

          <button
            className="btn-action cart-btn"
            aria-label="Add to cart"
            onClick={() => onAddProduct(product)}
          >
            Add to Cart
            <img className="img-btn" src={imgCartBtn} alt="Cart icon" />
          </button>
        </div>

        <figure className="product-page-img">
          <img src={product.urlImg} alt={product.nameProduct} />
        </figure>
      </section>
    </main>
  );
};

export default ProductPage;
