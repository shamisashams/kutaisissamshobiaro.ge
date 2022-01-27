import React, { useEffect } from "react";
import { Title1 } from "../../../components/Titles/Titles";
import "./GalleryHome.css";

import { MainBtn } from "../../../components/MainBtn/MainBtn";
import Aos from "aos";
import "aos/dist/aos.css";
import  { Link } from "@inertiajs/inertia-react"

const GalleryHome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const images = [
    {
      src: "/img/gallery/1.png",
      span: 1,
    },
    {
      src: "/img/gallery/2.png",
      span: 2,
    },
    {
      src: "/img/gallery/3.png",
      span: 1,
    },
    {
      src: "/img/gallery/4.png",
      span: 1,
    },
    {
      src: "/img/gallery/5.png",
      span: 2,
    },
    {
      src: "/img/gallery/6.png",
      span: 1,
    },
    {
      src: "/img/gallery/7.png",
      span: 2,
    },
  ];
  return (
    <div className="GalleryHome wrapper">
      <Title1 largeText="ფოტო გალერეა" />
      <div className="photo_grid" data-aos="fade-up">
        {images.map((img) => {
          return (
            <div className="img" style={{ gridColumn: `span ${img.span}` }}>
              <img src={img.src} alt="" />
            </div>
          );
        })}
      </div>
        <Link href={route('client.gallery.index')}>
            <MainBtn text="ნახე სრულად" />
        </Link>
    </div>
  );
};

export default GalleryHome;
