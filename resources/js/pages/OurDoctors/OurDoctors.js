import React from "react";
import { Link } from "@inertiajs/inertia-react";
import { PageHead } from "../../components/PageHead/PageHead";
import { Title3 } from "../../components/Titles/Titles";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const OurDoctors = ({ seo }) => {
    const doctors = [
        {
            img: "/img/doctors/el.jpeg",
            name: "ირაკლი მერკვილაძე",
        },
        {
            img: "/img/doctors/ekaterine-chinchaladze.jpg",
            name: "ეკა ჩინჩალაძე",
        },
        {
            img: "/img/doctors/irena-morchadze.jpeg",
            name: "ირენა მორჩაძე",
        },
        {
            img: "/img/doctors/david-j.jpg",
            name: "დავით ჯანელიძე",
        },
        {
            img: "/img/doctors/1.jpg",
            name: "ლარისა მეტრეველი",
        },
        {
            img: "/img/doctors/nino-metonidze.jpeg",
            name: "ნინო მეტონიძე",
        },
        {
            img: "/img/doctors/manana-butskhrikidze.jpg",
            name: "მანანა ბუცხრიკიძე",
        },
        {
            img: "/img/doctors/nino-nikoladze.jpeg",
            name: "ნინო ნიკოლაიშვილი",
        },
        {
            img: "/img/doctors/LIA-jINCHARADZE.jpg",
            name: "ლია ჯინჭარაძე",
        },
        {
            img: "/img/doctors/khatuna.jpg",
            name: "ხათუნა ჟეიშვილი ნეონატ",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="ourDoctorsPage">
                <PageHead
                    title="ჩვენი ექიმები"
                    prev="მთავარი"
                    active="ჩვენი ექიმები"
                />
                <div className="wrapper2">
                    <div className="heading">
                        <Title3 text="გაიცანით ჩვენი ექიმები" />
                        <p>
                            სამშობიაროს ყველა ბლოკს ემსახურებიან მუდმივ
                            პროფესიულ ზრდაზე ორიენტირებული კვალიფიციური ექიმები.
                            <br /> სამშობიაროს ახალგაზრდა ექიმები კი
                            ხელმძღვანელობენ კლინიკის მთავარი ექიმის, ირაკლი
                            მერკვილაძის მიერ სპეციალურად დადგენილი პროგრამით და
                            გადიან მუდმივ პროფესიულ გადამზადებას.
                        </p>
                    </div>
                    <div className="grid">
                        {doctors.map((doctor, index) => {
                            return (
                                <Link
                                    key={index}
                                    href={route(
                                        `client.doctor.index`,
                                        index + 1
                                    )}
                                    className="item"
                                >
                                    <div className="img">
                                        <img src={doctor.img} alt="" />
                                    </div>
                                    <div className="name">{doctor.name}</div>
                                    <div className="pos">{doctor.position}</div>
                                    {/* <div
                                        className="exp"
                                        style={{ color: "#778197" }}
                                    >
                                        {doctor.experience}
                                    </div> */}
                                    <p>{doctor.description}</p>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default OurDoctors;
