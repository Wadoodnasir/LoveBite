import React from "react";
import Cards from "../component/Card";
import p1 from "../assest/p1.jpg";
import p2 from "../assest/p2.jpg";
import p3 from "../assest/p3.jpg";
import p4 from "../assest/p4.jpg";
import pic1 from "../assest/pic1.jpg";
import pic2 from "../assest/pic2.jpg";
import pic3 from "../assest/pic3.jpg";
import pic4 from "../assest/pic4.jpg";

const images = [
  { src: pic1, detail: "Fayaz Love", title: "Asma" },
  { src: p1, detail: "Asma Love", title: "Fayaz" },
  { src: p2, detail: "Asma Love", title: "Fayaz" },
  { src: pic2, detail: "Fayaz Love", title: "Asma" },
  { src: pic3, detail: "Fayaz Love", title: "Asma" },
  { src: p3, detail: "Asma Love", title: "Fayaz" },
  { src: p4, detail: "Asma Love", title: "Fayaz" },
  { src: pic4, detail: "Fayaz Love", title: "Fayaz" },
];

const Picture = () => {
  return (
    <div className="container">
      <div className="row">
        {images.map((image, index) => (
          <div
            className={`col-6 ${index % 2 === 0 ? "pe-1" : "ps-1"}`}
            key={index}
          >
            <Cards src={image.src} detail={image.detail} title={image.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Picture;
