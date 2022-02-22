import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
import {
    ArrowDown,
    Call,
    Location,
    Mail,
} from "/img/icons/contact/contactIcons";
import { SocialMedia } from "../SocialMedia/SocialMedia";
import "./Header.css";
import { Link, usePage } from "@inertiajs/inertia-react";

const Header = () => {
    const { gphone, gemail, gaddress, pathname } = usePage().props;

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    // const { pathname } = useLocation();
    //
    let transparent = false;

    if (pathname === route("client.home.index")) {
        transparent = true;
    }
    const navbar = [
        {
            nav: "მთავარი",
            link: route("client.home.index"),
        },
        {
            nav: "ჩვენ შესახებ",
            link: route("client.about.index"),
        },
        {
            nav: "სერვისი",
            link: route("client.services.index"),
        },
        {
            nav: "სიახლეები",
            link: route("client.news.index"),
        },
        {
            nav: "ჩვენი ექიმები",
            link: route("client.doctors.index"),
        },
        {
            nav: "გალერეა",
            link: route("client.gallery.index"),
        },
        {
            nav: "კონტაქტი",
            link: route("client.contact.index"),
        },
    ];
    return (
        <div className="header">
            <div className="header_top">
                <div className="wrapper flex">
                    <a href="/" className="logo">
                        <img src="/img/header/logo.png" alt="" />
                        ახალი N2 სამშობიარო სახლი
                    </a>
                    <div className="flex" style={{ height: "100%" }}>
                        <SocialMedia color="#1DBFCC" />
                        <div className="contact_info">
                            <Link href="/contact">
                                <Call color="#fff" />
                                {gphone.value}
                            </Link>
                            <Link href="/contact">
                                <Mail color="#fff" />
                                {gemail.value}
                            </Link>
                            <Link href="/contact">
                                <Location color="#fff" />
                                {gaddress.value}
                            </Link>
                        </div>
                    </div>
                    <button
                        id="menu_btn"
                        className={mobileMenu ? "clicked" : ""}
                        onClick={() => toggleMobileMenu()}
                        />
                </div>
            </div>
            <div
                className={mobileMenu ? "header_bottom open" : "header_bottom"}
                style={{ background: transparent ? "transparent" : "#fff" }}
            >
                <div className="wrapper navigation flex centered">
                    {navbar.map((nav, index) => {
                        return (
                            <div key={index}>
                                <Link
                                    className={
                                        nav.link === pathname
                                            ? "nav_link active"
                                            : "nav_link"
                                    }
                                    href={nav.link}
                                >
                                    {nav.nav}
                                </Link>
                            </div>
                        );
                    })}
                    {/*<div className="languages">*/}
                    {/*    <div className="active">*/}
                    {/*        ქრთ <ArrowDown color="#171C26"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="drop">*/}
                    {/*        <a href="/">ENG</a>*/}
                    {/*        <a href="/">РУС</a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
};

export default Header;
