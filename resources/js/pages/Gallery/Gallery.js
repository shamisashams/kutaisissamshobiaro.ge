import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import "./Gallery.css";

import { Pagination } from "../../components/Pagination/Pagination";
import Layout from "../../Layouts/Layout";

const Gallery = () => {
  const photos = [
    {
      img: "/img/gallery/1.png",
      span: 1,
    },
    {
      img: "/img/gallery/6.png",
      span: 1,
    },
    {
      img: "/img/gallery/2.png",
      span: 2,
    },
    {
      img: "/img/doctors/3.png",
      span: 1,
    },
    {
      img: "/img/gallery/5.png",
      span: 2,
    },
    {
      img: "/img/doctors/5.png",
      span: 1,
    },

    {
      img: "/img/gallery/4.png",
      span: 1,
    },
    {
      img: "/img/gallery/1.png",
      span: 1,
    },
    {
      img: "/img/doctors/5.png",
      span: 1,
    },
    {
      img: "/img/gallery/1.png",
      span: 1,
    },
    {
      img: "/img/doctors/6.png",
      span: 1,
    },
    {
      img: "/img/gallery/1.png",
      span: 2,
    },
  ];
  return (
      <Layout>
          <div className="galleryPage">
              <PageHead title="გალერეა" prev="მთავარი" active="გალერეა" />
              <div className="wrapper main ">
                  <div className="grid">
                      {photos.map((photo) => {
                          return (
                              <div className="img" style={{ gridColumn: `span ${photo.span}` }}>
                                  <img src={photo.img} alt="" />
                              </div>
                          );
                      })}
                  </div>
                  {/*<Pagination />*/}
              </div>
          </div>

      </Layout>
  );
};

export default Gallery;
