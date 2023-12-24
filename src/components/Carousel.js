import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide mt-3">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="..." className="d-block w-100" alt="1" style={{ backgroundColor: "black", height: "500px" }} />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="2" style={{ backgroundColor: "red", height: "500px" }} />
          </div>
          <div className="carousel-item">
            <img src="..." className="d-block w-100" alt="3" style={{ backgroundColor: "blue", height: "500px" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
