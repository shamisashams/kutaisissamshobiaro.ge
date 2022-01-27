import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import { Title3 } from "../../components/Titles/Titles";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const OurDoctors = () => {
  const doctors = [
    {
      img: "/img/doctors/3.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/4.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/5.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/6.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/7.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/1.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/2.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
    {
      img: "/img/doctors/5.png",
      name: "სახელი გვარი",
      position: "პროფესია",
      experience: "გამოცდილება 15 წელი",
      description:
        "დეველოპერის ანობაში ხშირად არის ხოლმე საჭირო ისეთი ამოცანების მარტივაან დიზაინერის ყოველდღიურ საქმიდ ",
    },
  ];
  return (
      <Layout>
          <div className="ourDoctorsPage">
              <PageHead title="ჩვენი ექიმები" prev="მთავარი" active="ჩვენი ექიმები" />
              <div className="wrapper2">
                  <div className="heading">
                      <Title3 text="გაიცანით ჩვენი ექიმები" />
                      <p>
                          დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად არის ხოლმე
                          საჭირო ისეთი ამოცანების მარტივად შესრულება, რომელსაც სპეციფიური
                          ინსტრუმენტი ჭირდება. ასეთი
                      </p>
                  </div>
                  <div className="grid">
                      {doctors.map((doctor) => {
                          return (
                              <div className="item">
                                  <div className="img">
                                      <img src={doctor.img} alt="" />
                                  </div>
                                  <div className="name">{doctor.name}</div>
                                  <div className="pos">{doctor.position}</div>
                                  <div className="exp" style={{ color: "#778197" }}>
                                      {doctor.experience}
                                  </div>
                                  <p>{doctor.description}</p>
                              </div>
                          );
                      })}
                  </div>
              </div>
          </div>

      </Layout>
  );
};

export default OurDoctors;
