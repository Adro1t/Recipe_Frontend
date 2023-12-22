import React from "react";

const Carousel = () => {
  return (
    <>
      <div id="carouselExample" class="carousel slide mt-3">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="1" style={{ backgroundColor: "black", height: "500px" }} />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="2" style={{ backgroundColor: "red", height: "500px" }} />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="3" style={{ backgroundColor: "blue", height: "500px" }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
