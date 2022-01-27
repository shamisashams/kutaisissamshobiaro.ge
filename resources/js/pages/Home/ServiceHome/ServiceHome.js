import React, { useEffect } from "react";
import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";

import { ServiceBox } from "../../../components/ServiceBox/ServiceBox";
import "./ServiceHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import {Link} from "@inertiajs/inertia-react";

const ServiceHome = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const serviceBoxData = [
    {
      icon: "/img/icons/service/1.png",
      title: "მეანობა",
      para: "შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან ",
      background: "#e4feff7d",
    },
    {
      icon: "/img/icons/service/2.png",
      title: "ანტენატალური მეთვალყურეობა",
      para: " შემთხვევითად გენერ, ირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნსირებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებსრეალუ",
      background: "#efefef7b",
    },
    {
      icon: "/img/icons/service/3.png",
      title: "გინეკოლოგიური მომსახურება",
      para: "რებული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებსრე ",
      background: "#efefef7b",
    },
    {
      icon: "/img/icons/service/4.png",
      title: "სრულფასოვანი ლაბორატორიული კვლევა",
      para: " რებული ტექსტი ული ტექსტი ული ტექსტი ეხმარება დიზაინერებს და ტიპოგრაფიული ნაწარმის შემქმნელებსრე",
      background: "#e4feff7d",
    },
  ];
  return (
    <div className="serviceHome">
      <div className="wrapper flex content">
        <div className="left">
          <p>ჩვენ შესახებ</p>
          <h2>lorem ipsum dolor</h2>
          <p>
            შემთხვევითად გენერირებული ტექსტი ეხმარება დიზაინერებს და
            ტიპოგრაფიული ნაწარმის შემქმნელებს, რეალურთან მაქსიმალურად
            მიახლოებული შაბლონი წარუდგინონ
          </p>
          <p>
            შემფასებელს. ხშირადაა შემთხვევა, როდესაც დიზაინის შესრულებისას
            საჩვენებელია, თუ როგორი იქნება ტექსტის ბლოკი. სწორედ ასეთ დროს არის
            მოსახერხებელი ამ
          </p>
            <Link href={route('client.about.index')}>
                <MainBtn text="გაიგე მეტი" />

            </Link>
        </div>
        <div className="right">
          <Title1 largeText="სერვისები" subtitle="ჩვენ გთავაზობთ" />
          <p className="p">
            დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე
            საჭირო ისეთი
          </p>
          <div className="service_grid" data-aos="fade-left">
            {serviceBoxData.map((box) => {
              return (
                <ServiceBox
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
