import React, { useState } from "react";
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

  const [selectedSize, setSelectedSize] = useState(""); // State to track selected size

  const onAddProduct = (product) => {
    if (!selectedSize) {
      alert("Please select a size before adding to the cart.");
      return;
    }

    const updatedProduct = { ...product, size: selectedSize };

    if (
      allProducts.find(
        (item) => item.id === updatedProduct.id && item.size === selectedSize
      )
    ) {
      const products = allProducts.map((item) =>
        item.id === updatedProduct.id && item.size === selectedSize
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...products]);
    } else {
      setTotal(total + product.price);
      setCountProducts(countProducts + 1);
      setAllProducts([...allProducts, { ...updatedProduct, quantity: 1 }]);
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
        </div>

        <figure className="product-page-img">
          <img src={product.urlImg} alt={product.nameProduct} />
        </figure>

        <div className="product-page-actions">
          <div className="product-sizes">
            <h2>Sizes</h2>
            <div className="sizes-list">
              {product.availableSizes.map((size, index) => (
                <button
                  key={index}
                  type="button"
                  className={`size-item ${
                    size === selectedSize ? "selected-size" : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button
            className="btn-action cart-btn"
            aria-label="Add to cart"
            onClick={() => onAddProduct(product)}
          >
            Add to Cart
            <img className="img-btn" src={imgCartBtn} alt="Cart icon" />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
