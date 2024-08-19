import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/ProductData";
import imgCartBtn from "../img/cart-icon.png";

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
    <div className="ProductPage">
      <h2>{product.nameProduct}</h2>
      <img src={product.urlImg} alt={product.nameProduct} />
      <p>Price: ${product.price}</p>
      <button
        className="btn-action cart-btn"
        aria-label="Add to cart"
        onClick={() => onAddProduct(product)}
      >
        Add to Cart
        <img className="img-btn" src={imgCartBtn} alt="Cart icon" />
      </button>
    </div>
  );
};

export default ProductPage;
