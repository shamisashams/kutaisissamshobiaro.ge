import React, { useState, useEffect } from "react";
import SliderImg1 from "/img/hero/1.png";
import SliderImg2 from "/img/hero/2.png";
import SliderImg3 from "/img/hero/3.png";
import { ArrowDown } from "/img/icons/contact/contactIcons";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import "./HeroSlider.css";

const HeroSlider = () => {
    const images = ["/img/hero/1.png", "/img/hero/2.png", "/img/hero/3.png"];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const lastIndex = SliderData.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);

        return () => {
            clearInterval(slider);
        };
    }, [index]);

    const moveDot = (i) => {
        setIndex(i);
    };
    const SliderData = [
        {
            title: "მაღალკვალიფიციურ ექიმთა გუნდი",
            paragraph:
                "კლინიკის მთავარ სამედიცინო ბირთვს წარმოადგენს მრავალწლიანი გამოცდილების მქონე მეან-გინეკოლოგთა და ნეონატოლოგთა გუნდი.",
        },
        {
            title: "ექოსკოპიის 4D ფერადი აპარატი",
            paragraph:
                "კლინიკაში ფუნქციონირებს ექოსკოპიის 4D ფერადი აპარატი, რაც საშუალებას გვაძლევს მივიღოთ მუცლად  მყოფი ბავშვის სრულად აღქმადი გამოსახულება.",
        },
        {
            title: "დედის საჭიროებაზე მორგებული სტაციონარი",
            paragraph:
                "კლინიკაში მოქმედებს კომფორტული სტაციონარი ორსაწოლიანი ლოგინებითა და ინდივისუალური სველი წერტილებით",
        },
    ];
    return (
        <div className="heroSlider ">
            {SliderData.map((data, indexData) => {
                let position = "nextSlide";
                if (indexData === index) {
                    position = "activeSlide";
                }
                if (
                    indexData === index - 1 ||
                    (index === 0 && indexData === data.length - 1)
                ) {
                    position = "lastSlide";
                }
                return (
                    <article className={position} key={indexData}>
                        <img
                            className="bg"
                            src={images[indexData]}
                            alt="hero img"
                        />
                        <div className="content wrapper">
                            <h3>{data.title}</h3>
                            <p>{data.paragraph}</p>
                            <MainBtn text="გაიგე მეტი" />
                        </div>
                    </article>
                );
            })}
            <button onClick={() => setIndex(index - 1)} className="arrow prev">
                <ArrowDown color="#1dbfcc" />
            </button>
            <button onClick={() => setIndex(index + 1)} className="arrow next">
                <ArrowDown color="#1dbfcc" />
            </button>
            <div className="pagination">
                {Array.from({ length: SliderData.length }).map((item, i) => {
                    return (
                        <button
                            key={i}
                            onClick={() => moveDot(i)}
                            className={index === i ? "active" : ""}
                        ></button>
                    );
                })}
            </div>
        </div>
    );
};

export default HeroSlider;
