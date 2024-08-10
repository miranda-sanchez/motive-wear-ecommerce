import React, { useState, useEffect, useRef } from "react";
import logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import underlined from "../img/Underlined-double.PNG";
import burgerIcon from "../img/Burger-icon.PNG";
import crossIcon from "../img/Cross-icon.PNG";
import imgCartIcon from "../img/cart-icon.png";
import imgHeartIcon from "../img/heart-icon.png";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  // Toggle navbar
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Dropdown
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggleCartDropdown = () => {
    setIsCartDropdownOpen(!isCartDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsCartDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Cart: Delete products

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };

  return (
    <header className="Header">
      <Link to="/">
        <img id="logo" src={logo} alt="" />
      </Link>

      <nav>
        <ul
          id="primary-navigation"
          className={`primary-navigation ${isNavOpen ? "open" : ""}`}
        >
          <Link exact to="/">
            <li className="active">
              Home
              <img
                src={underlined}
                alt="Underline doodle"
                className="img-hover-underlined"
              />
            </li>
          </Link>
          <Link to="/products">
            <li className="active">
              Products
              <img
                src={underlined}
                alt="Underline doodle"
                className="img-hover-underlined"
              />
            </li>
          </Link>
        </ul>

        <div className="dropdown" title="Cart" ref={dropdownRef}>
          <button
            className="dropdown-toggle-btn icon-navbar-btn cart-btn"
            onClick={handleToggleCartDropdown}
          >
            <img src={imgCartIcon} alt="Cart icon" />
            <div className="cart-count-container">
              <span className="cart-count">{countProducts}</span>
            </div>
          </button>
          {isCartDropdownOpen && (
            <div className="dropdown-menu container-cart-products">
              {allProducts.length ? (
                <>
                  <ul>
                    {allProducts.map((product) => (
                      <li className="cart-product-item" key={product.id}>
                        <div className="cart-product-info">
                          <figure className="cart-product-img">
                            <img
                              src={product.urlImg}
                              alt={product.nameProduct}
                            />
                          </figure>
                          <span className="cart-product-quantity">
                            {product.quantity}
                          </span>
                          <p className="cart-product-name">
                            {product.nameProduct}
                          </p>
                          <span className="cart-product-price">
                            ${product.price}
                          </span>
                        </div>

                        <button className="delete-product-btn">
                          <img
                            src={crossIcon}
                            alt="Cross"
                            onClick={() => onDeleteProduct(product)}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                  <p className="cart-total">Total: ${total}</p>
                  <button
                    className="btn-clear-all"
                    aria-label="Empty cart"
                    onClick={onCleanCart}
                  >
                    Empty cart
                  </button>
                </>
              ) : (
                <p className="cart-empty">Your cart is empty.</p>
              )}
            </div>
          )}
        </div>

        <div className="icon-navbar-btn" title="Wishlist">
          <img src={imgHeartIcon} alt="Heart icon" />
        </div>

        <button
          className="mobile-nav-toggle-btn"
          aria-controls="primary-navigation"
          aria-expanded={isNavOpen}
          onClick={handleToggleNav}
          style={{
            backgroundImage: `url(${isNavOpen ? crossIcon : burgerIcon})`,
          }}
        >
          <span className="sr-only">Menu</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
