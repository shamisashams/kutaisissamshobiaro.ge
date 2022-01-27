import React from "react";
import "./NewsItem.css";
// import { Link } from "react-router-dom";
import {Link} from '@inertiajs/inertia-react';

const NewsItem = (props) => {
  return (
    <div className="news_item">
      <div className="img">
        <img src={props.imgSrc} alt="" />
      </div>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <div className="flex">
        <div className="date">
          <img src="/img/icons/news/calendar.svg" alt="" />
          {props.date}
        </div>
        <Link href={route('client.news.show', props.slug)} className="more">
          სრულად ნახვა <div className="plus">+</div>
        </Link>
      </div>
    </div>
  );
};

export default NewsItem;
