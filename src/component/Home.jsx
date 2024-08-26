import React from "react";
import p1 from "../assest/p1.jpg";
import p2 from "../assest/p2.jpg";
import p3 from "../assest/p3.jpg";
import p4 from "../assest/p4.jpg";
import pic1 from "../assest/pic1.jpg";
import pic2 from "../assest/pic2.jpg";
import pic3 from "../assest/pic3.jpg";
import pic4 from "../assest/pic4.jpg";
const Home = () => {
  return (
    <div className="row">
      <h2 className=" fw-bolder text-center fs-1 text-danger py-2">
        My Love Fayaz This For You
      </h2>

      <div className="col-12">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={pic1} className="d-block w-100" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img src={p1} className="d-block w-100" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img src={pic2} className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={p2} className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={pic3} className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={p3} className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={pic4} className="d-block w-100" alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img src={p4} className="d-block w-100" alt="Third slide" />
            </div>
          </div>
        </div>
      </div>
      <p className=" text-center p-3">
        "Fayaz, every moment with you is a treasure I hold close to my heart. 🌙
        I am your Asma, deeply in love with you, and I always will be. ❤️ You
        bring light into my life and make everything feel more beautiful. 🌹
        Please, don’t ever let me go. Our love is something special, something I
        cherish more than words can express. No matter what, I promise to stand
        by you, to love you unconditionally, and to be yours forever. 💞 I love
        you, Fayaz. Always and forever. 💖"
      </p>
    </div>
  );
};
export default Home;
