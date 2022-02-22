import React, { useEffect } from "react";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";

import { ServiceBox } from "../../../components/ServiceBox/ServiceBox";
import "./ServiceHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "@inertiajs/inertia-react";

const ServiceHome = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const serviceBoxData = [
        {
            icon: "/img/icons/service/1.png",
            title: "ამბოლატორიული მომსახურება      ",
            para: "●	ქალთა კონსულტაცია	                           ●	სამეანო განყოფილება	  ●	გინეკოლოგიური განყოფილება	  ●	პოლიკლინიკა	 ",
            background: "#e4feff7d",
        },
        {
            icon: "/img/icons/service/2.png",
            title: "სტაციონალური მომსახურება ",
            para: "●	სამი ინდივიდუალური სამშობიარო ბლოკი  ●	საკეისრო კვეთისთვის განკუთვნილი საოპერაციო.  ",
            background: "#efefef7b",
        },
    ];
    return (
        <div className="serviceHome">
            <div className="wrapper flex content">
                <div className="left">
                    <p>ჩვენ შესახებ</p>
                    <h2>ვინ ვართ ჩვენ</h2>
                    <p>
                        სამშობიარო დაკომპლექტებულია მაღალკვალიფიციური
                        ექიმ-სპეციალისტებით, რომელთა უმრავლესობას წარმოადგენენ
                        მრავალწლიანი გამოცდილების მქონდე მეან-გინეკოლოგები და
                        ნეონატოლოგები.
                    </p>
                    <Link href={route("client.about.index")}>
                        <MainBtn text="გაიგე მეტი" />
                    </Link>
                </div>
                <div className="right">
                    <div className="flex title">
                        <Title1
                            largeText="სერვისები"
                            subtitle="ჩვენ გთავაზობთ"
                        />
                        <MainBtn text="ნახე სრულად" link="/services" />
                    </div>
                    <p className="p">
                        ახალი #2 სამშობიარო გთავაზობთ სრული სპექტრის სტაციონალურ
                        და ამბულატორიულ მომსახურებას.
                    </p>
                    <div className="service_grid" data-aos="fade-left">
                        {serviceBoxData.map((box, index) => {
                            return (
                                <ServiceBox
                                    index={index}
                                    icon={box.icon}
                                    title={box.title}
                                    paragraph={box.para}
                                    background={box.background}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceHome;
