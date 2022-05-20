import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import "./Gallery.css";

import { Pagination } from "../../components/Pagination/Pagination";
import Layout from "../../Layouts/Layout";

const Gallery = ({ seo }) => {
    const photos = [
        {
            img: "/img/gallery/1.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/2.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/3.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/4.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/5.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/6.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/7.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/8.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/9.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/10.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/11.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/12.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/13.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/14.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/15.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/16.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/17.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/18.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/19.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/20.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/21.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/22.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/23.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/24.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/25.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/26.jpeg",
            span: 2,
        },
        {
            img: "/img/gallery/27.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/28.jpeg",
            span: 1,
        },
        {
            img: "/img/gallery/29.jpeg",
            span: 1,
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="galleryPage">
                <PageHead title="გალერეა" prev="მთავარი" active="გალერეა" />
                <div className="wrapper main ">
                    <div className="grid">
                        {photos.map((photo, index) => {
                            return (
                                <div
                                    ata-aos="zoom-in"
                                    key={index}
                                    className="img"
                                    style={{ gridColumn: `span ${photo.span}` }}
                                >
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
