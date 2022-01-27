import React, { useEffect } from "react";
import Carousel from "react-elastic-carousel";
import { ArrowDown } from "/img/icons/contact/contactIcons";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";
import "./NewsHome.css";

import Calendar from "/img/icons/news/calendar.svg";
// import { Link } from "react-router-dom";
import { Link } from "@inertiajs/inertia-react"
import Aos from "aos";
import "aos/dist/aos.css";

const NewsHome = ({news}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 600, itemsToShow: 2 },
    { width: 1000, itemsToShow: 3 },
  ];

  return (
    <div className="newsHome wrapper">
      <div className="head flex">
        <Title1 largeText="ახალი ამბები" subtitle="სიახლეები" />
        <MainBtn text="ყველა სიახლე" />
      </div>
      <div className="news_slider flex" data-aos="fade-right">
        <button className="arrow prev">
          <ArrowDown color="#1dbfcc" />
        </button>
        <Carousel breakPoints={breakPoints}>
          {news.map((item) => {
            return (
              <div className="news_box">
                <div className="img">
                  <img src={"/"+item.file.path+"/"+item.file.title} alt="" />
                </div>
                <div className="content">
                  <div className="status">{item.title}</div>
                  <div className="date">
                    <span>
                      <img src={Calendar} alt="" />
                    </span>
                    {item.date}
                  </div>
                  <div className="caption">{item.short_description}</div>
                  <Link href={route('client.news.show', item.slug)} className="link ">
                    <div>
                      სრულად ნახვა <div className="plus">+</div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </Carousel>
        <button className="arrow next">
          <ArrowDown color="#1dbfcc" />
        </button>
      </div>
    </div>
  );
};

export default NewsHome;
