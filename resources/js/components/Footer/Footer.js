import React from "react";
// import { Link, useLocation } from "react-router-dom";
import {Map} from "../Map/Map";
import {SocialMedia} from "../SocialMedia/SocialMedia";
import {Link} from '@inertiajs/inertia-react';

// import {
//   ArrowDown,
//   Call,
//   Mail,
//   Location,
// } from "../../assets/images/icons/contact/contactIcons";
import "./Footer.css";

const Footer = () => {
    // const { pathname } = useLocation();

    let hideMap = false;

    // if (pathname === "/contact") {
    //   hideMap = true;
    // }

    const navbar = [
        {
            nav: "მთავარი",
            link: route('client.home.index'),
        },
        {
            nav: "ჩვენ შესახებ",
            link: route('client.about.index'),
        },
        {
            nav: "სიახლეები",
            link: route('client.news.index'),
        },
        {
            nav: "ჩვენი ექიმები",
            link: route('client.doctors.index'),
        },
        {
            nav: "გალერეა",
            link: route('client.gallery.index'),
        },
        {
            nav: "კონტაქტი",
            link: route('client.contact.index'),
        },
    ];
    return (
        <div className="footer">
            <div className="wrapper">
                <div className="map" style={{display: hideMap ? "none" : "block"}}>
                    <Map/>
                </div>
                <div
                    className="flex first"
                    style={{
                        borderBottom: "3px solid #1DBFCC",
                        paddingBottom: "8px",
                        paddingTop: hideMap ? "30px" : "0",
                        marginBottom: "32px",
                    }}
                >
                    <a href="/" className="logo flex center">
                        <img src="/img/header/logo2.png" alt=""/>
                        ახალი N2 სამშობიარო სახლი
                    </a>
                    <SocialMedia color="#171C26"/>
                </div>
                <div className="content flex">
                    <div className="navs">
                        {navbar.map((nav) => {
                            return (
                                <Link className="nav_link" href={nav.link}>
                                    {nav.nav}
                                </Link>
                            );
                        })}
                    </div>
                    <div className="right">
                        <h2>საკონტაქტო ინფორმაცია</h2>
                        {/*<Link to="/">*/}
                        {/*  <Call color="#171C26" />*/}
                        {/*  +995 032 2 111 111*/}
                        {/*</Link>*/}
                        {/*<Link to="/">*/}
                        {/*  <Mail color="#171C26" />*/}
                        {/*  2_samshobiaro@mail.ru*/}
                        {/*</Link>*/}
                        {/*<Link to="/">*/}
                        {/*  <Location color="#171C26" />*/}
                        {/*  ქუთაისი, ლორთქიფანიძის ქუჩა №13*/}
                        {/*</Link>*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
