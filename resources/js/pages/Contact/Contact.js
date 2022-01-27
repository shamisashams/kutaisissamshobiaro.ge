import React, {useState} from "react";
import { Inertia } from '@inertiajs/inertia'

import {
  Call,
  Mail,
  Location,
} from "/img/icons/contact/contactIcons";
import { Map } from "../../components/Map/Map.js";
import { MainBtn } from "../../components/MainBtn/MainBtn";
import { PageHead } from "../../components/PageHead/PageHead";
import { Title2 } from "../../components/Titles/Titles";
import "./Contact.css";
import Layout from "../../Layouts/Layout";
import {usePage} from "@inertiajs/inertia-react";

const Contact = () => {
    const { errors } = usePage().props
  const contactInfo = [
    {
      icon: <Call color="#1DBFCC" />,
      text: "ტელეფონის ნომერი",
      info: "+995 032 2 111 111",
    },
    {
      icon: <Mail color="#1DBFCC" />,
      text: "ელექტრონული ფოსტა",
      info: "2_samshobiaro@mail.ru",
    },
    {
      icon: <Location color="#1DBFCC" />,
      text: "მისამართი",
      info: "ქუთაისი, ლორთქიფანიძის ქუჩა №13",
    },
  ];

    const [values, setValues] = useState({
        name: "",
        phone: "",
        mail: "",
        message: "",
    })

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(values);
        Inertia.post(route('client.contact.mail'), values)
    }
  return (
      <Layout>
          <div className="contactPage">
              <PageHead title="კონტაქტი" prev="მთავარი" active="კონტაქტი" />
              <div className="wrapper main">
                  <div className="map">
                      <Map />
                  </div>
                  <div className="flex content">
                      <form onSubmit={handleSubmit} className="left">
                          <Title2 text="თუ გაქვთ კითხვები მოგვწერეთ" />
                          <p>
                              დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                              ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
                          </p>
                          {errors.name && <div>{errors.name}</div>}
                          <input type="text" id="name" value={values.name} onChange={handleChange} placeholder="სახელი და გვარი" />
                          {errors.phone && <div>{errors.phone}</div>}
                          <input type="text" id="phone" value={values.phone} onChange={handleChange} placeholder="ტელეფონის ნომერი" />
                          {errors.mail && <div>{errors.mail}</div>}
                          <input type="text" id="mail" value={values.mail} onChange={handleChange} placeholder="ელექტრონული ფოსტა" />
                          {errors.message && <div>{errors.message}</div>}
                          <textarea id="message" value={values.message} onChange={handleChange} placeholder="შეტყობინება"></textarea>
                          <MainBtn text="გაგზავნა" />
                      </form>
                      <div className="right">
                          <Title2 text="საკონტაქტო ინფორმაცია" />
                          <p>
                              დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის
                              ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
                          </p>
                          {contactInfo.map((info) => {
                              return (
                                  <div className="flex contact_info">
                                      <div className="icon flex centered">{info.icon}</div>
                                      <div>
                                          <div className="txt">{info.text}</div>
                                          <h5>{info.info}</h5>
                                      </div>
                                  </div>
                              );
                          })}
                      </div>
                  </div>
              </div>
          </div>

      </Layout>
  );
};

export default Contact;
