import React from "react";
import Slider from "react-slick";
import { products } from "../data/ProductData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const SelectedProducts = () => {
  const bestSellers = products.filter((product) => product.bestSeller);
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <section className="SelectedProducts">
      <h2>Popular Products</h2>
      <div className="cards-container">
        <Slider {...settings}>
          {bestSellers.map((product) => (
            <article key={product.id} className="card">
              <figure>
                <img src={product.urlImg} alt={product.nameProduct} />
              </figure>
              <div className="info-card">
                <p className="shipping">Free shipping</p>
                <h3>{product.nameProduct}</h3>
                <p className="price">${product.price}</p>
                <button onClick={() => handleProductClick(product.id)}>
                  View
                </button>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SelectedProducts;
