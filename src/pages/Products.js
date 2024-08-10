import React, { useState, useEffect, useRef } from "react";
import { products } from "../data/ProductData";
import imgHeartBtn from "../img/heart-icon.png";
import imgCartBtn from "../img/cart-icon.png";
import imgArrowBtn from "../img/arrow-down.png";
import ToggleBtn from "../components/ToggleBtn";

const Products = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  // Cart
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    } else {
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, product]);
    }
  };

  // Hover effect of product imgs
  const [hoveredProductId, setHoveredProductId] = useState(null);
  const handleMouseEnter = (id) => setHoveredProductId(id);
  const handleMouseLeave = () => setHoveredProductId(null);

  // Dropdown options
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [filterByPrice, setFilterByPrice] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) => {
    const matchType =
      selectedType === "all" || product.typeOfProduct === selectedType;
    const matchPrice = !filterByPrice || product.price > 60;
    return matchType && matchPrice;
  });

  // Handle dropdown item click
  const handleDropdownClick = (type) => {
    setSelectedType(type);
    setIsOpen(false);
  };

  // Handle filter by price toggle
  const handleFilterByPriceClick = () => {
    setFilterByPrice((prev) => !prev);
  };

  return (
    <main className="Products">
      <h2>Products</h2>
      <div className="main-container">
        <section className="options-container">
          <div className="dropdown" ref={dropdownRef}>
            <button
              className="dropdown-toggle-btn"
              type="button"
              onClick={handleToggle}
              aria-expanded={isOpen}
            >
              {selectedType === "all" ? "All products" : selectedType}
              <img
                className="img-btn"
                src={imgArrowBtn}
                alt="Arrow down icon"
              />
            </button>
            {isOpen && (
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownClick("t-shirts")}
                >
                  <li>T-shirts</li>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownClick("sneakers")}
                >
                  <li>Sneakers</li>
                </a>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownClick("all")}
                >
                  <li>All Products</li>
                </a>
              </ul>
            )}
          </div>

          <div className="filter-by-price">
            <p>Free shipping</p>
            <ToggleBtn
              toggled={filterByPrice}
              onClick={handleFilterByPriceClick}
              arial-label="Show products with free shipping"
            />
          </div>
        </section>

        <section className="products-container">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map((product) => (
              <article
                key={product.id}
                className="card"
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
                <div className="info-card">
                  {product.bestSeller && (
                    <p className="best-seller">Best Seller</p>
                  )}
                  <p className="shipping">
                    {product.price > 60 ? "Free shipping" : "Shipping from $10"}
                  </p>
                  <h3>{product.nameProduct}</h3>
                  <p className="price">${product.price}</p>
                  <button
                    className="btn-action"
                    aria-label="Add to cart"
                    onClick={() => onAddProduct(product)}
                  >
                    Add to Cart
                    <img className="img-btn" src={imgCartBtn} alt="Cart icon" />
                  </button>
                  <button title="Add to wishlist">
                    <img
                      className="img-btn"
                      src={imgHeartBtn}
                      alt="Favorite icon"
                    />
                  </button>
                </div>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  );
};

export default Products;
