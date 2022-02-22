import React from "react";
import {PageHead} from "../../components/PageHead/PageHead";

import NewsItem from "./NewsItem/NewsItem";
import {Title3} from "../../components/Titles/Titles";
import {ConsultBox} from "../../components/ConsultBox/ConsultBox";
import "./News.css";
import {Pagination} from "../../components/Pagination/Pagination";
import Layout from "../../Layouts/Layout";

const News = ({news}) => {
    const newsData = news.data;
    const imgGrid = ["/img/news/6.png", "/img/news/5.png", "/img/news/4.png", "/img/news/1.png", "/img/news/3.png", "/img/news/6.png"];
    return (
        <Layout>
            <div className="newsPage">
                <PageHead title="სიახლეები" prev="მთავარი" active="სიახლეები"/>
                <div className="wrapper2 flex main">
                    <div className="news_list">
                        {newsData.map((item, index) => {
                            return (
                                <NewsItem
                                    key={index}
                                    imgSrc={item.file ? "/" + item.file.path + "/" + item.file.title : ""}
                                    title={item.title}
                                    paragraph={item.short_description}
                                    date={item.date}
                                    slug={item.slug}
                                />
                            );
                        })}
                        <Pagination prev_page_url={news.prev_page_url}
                                    next_page_url={news.next_page_url} links={news.links}/>
                    </div>
                    <div className="right">
                        <Title3 text="გალერეა"/>
                        <div className="img_grid">
                            {imgGrid.map((img) => {
                                return <img src={img} alt=""/>;
                            })}
                        </div>
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

export default News;
