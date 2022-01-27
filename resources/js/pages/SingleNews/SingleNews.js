import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";

import { Title3 } from "../../components/Titles/Titles";
import {Link} from '@inertiajs/inertia-react';
import { ConsultBox } from "../../components/ConsultBox/ConsultBox";
import "./SingleNews.css";
import Layout from "../../Layouts/Layout";


const SingleNews = ({news}) => {
    console.log(news)
    const otherNews = [
        {
            img: "/img/news/5.png",
            para: "დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, ",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: "/img/news/4.png",
            para: "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება, ის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე საჭ",
            date: "12 ოქტომბერი, 2021",
        },
        {
            img: "/img/news/1.png",
            para: "დეველოპერის ან დიზაინერირო ისეთი ამოცანების მარტივად შესრღიურ საქმიანობაში ლება, ყოველდღიურ საქმიანობაში  ",
            date: "12 ოქტომბერი, 2021",
        },
    ];
    return (
        <Layout>
            <div className="newsPage singleNewsPage">
                <PageHead
                    title="ახალი N2 სამშობიარო სახლი"
                    prev="სიახლეები"
                    active="ახალი N2 "
                />
                <div className="wrapper2 flex main">
                    <div className="news_list">
                        <img className="main_img" src={news.file ? "/"+news.file.path + "/" +news.file.title : ""} alt="" />
                        <p dangerouslySetInnerHTML={{__html: news.description}}>
                        </p>

                        <div className="flex">
                            <div className="date">
                                <img src="/img/icons/news/calendar.svg" alt="" />
                                {news.date}
                            </div>
                            <Link to="/news" className="return">
                                <img
                                    style={{ transform: "rotate(180deg)", marginRight: "10px" }}
                                    src="/img/icons/news/double-arrow.svg"
                                    alt=""
                                />
                                უკან დაბრუნება
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <Title3 text="ბოლოს დამატებული" />
                        {otherNews.map((item) => {
                            return (
                                <div className="flex other_news">
                                    <div className="img">
                                        <img src={item.img} alt="" />
                                    </div>
                                    <div>
                                        <div className="para" style={{ marginBottom: "13px" }}>
                                            {item.para}
                                        </div>
                                        <div className="date">
                                            <img src="/img/icons/news/calendar.svg" alt="" /> {item.date}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <ConsultBox
                            content="კონსულტაციაზე ჩასაწერად დაგვიკავშირდით"
                            number="+995 032 2 111 111"
                        />
                    </div>
                </div>
            </div>

        </Layout>
    );
};

export default SingleNews;
