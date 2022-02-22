import React, { useEffect } from "react";

import { MainBtn } from "../../../components/MainBtn/MainBtn";
import { Title1 } from "../../../components/Titles/Titles";
import "./DoctorsHome.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "@inertiajs/inertia-react";
const DoctorsHome = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const checks = [
        "პროფესიონალიზმი",
        "პასუხისმგებლობის მაღალი გრძნობა",
        "დიდი გამოცდილება",
        "საქმის სიყვარული",
    ];
    return (
        <div className="doctorsHome wrapper flex">
            <div className="img_shapes" data-aos="flip-left">
                <div className="shape shape_1">
                    <img src="/img/doctors/1.png" alt="" />
                </div>
                <div className="shape shape_2">
                    <img src="/img/doctors/2.png" alt="" />
                </div>
                <div className="shape shape_3"></div>
            </div>
            <div data-aos="fade-left">
                <Title1 largeText="ჩვენი ექიმები" />
                {/* <h3>lorem ipsum dolor</h3> */}
                <p className="p">
                    სამშობიაროს ყველა ექიმი, განსაკუთრებით კი განყოფილების და
                    სამსახურის უფროსები არიან მრავალწლიანი გამოცდილების მქონე
                    პროფესიონალები.
                </p>
                <div className="checks">
                    {checks.map((item, i) => {
                        return (
                            <p>
                                <span>
                                    <img
                                        src="/img/icons/service/check.svg"
                                        alt=""
                                    />
                                </span>
                                {item}
                            </p>
                        );
                    })}
                </div>
                <Link href={route("client.doctors.index")}>
                    <MainBtn text="ნახე სრულად" />
                </Link>
            </div>
        </div>
    );
};

export default DoctorsHome;
