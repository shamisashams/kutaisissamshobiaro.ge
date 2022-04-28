import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const Doctor6 = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="ourDoctorsPage single-doc">
                <PageHead
                    title="ჩვენი ექიმები"
                    prev="მთავარი"
                    active="ჩვენი ექიმები"
                />
                <div className="wrapper2">
                    <div className="doc_img img">
                        <img src="/img/doctors/nino-metonidze.jpeg" alt="" />
                    </div>
                    <div className="name">ნინო მეტონიძე</div>
                    <p className="info">
                        დაიბადა 07.02.1968 წ. ქ. თბილისში. <br />
                        1985 წელს ოქროს მედალზე დაამთავრა ფიზიკამათემატიკური
                        საშუალო სკოლა. <br />
                        1985-1991 წ.წ. ქ. თბილისის სახელმწიფო სამედიცინო
                        ინსტიტუტის სამკურნალო ფაკულტეტი, სპეციალობით სამკურნალო
                        საქმე - დაამთავრა წარმატებით. ო. ჩხობაძის კლინიკური
                        ინტერნატურა. 1991-1992 წ.წ. კვალიფიკაცია. 1996 წ. ციკლში
                        მეანობა-გინეკოლოგია თბილისის სახელმწიფო სამედიცინო
                        აკადემიისა და ჩაჩავას სახ. პერინატალური მედიცინის და
                        მეანობა-გინეკოლოგიის ინსტიტუტში. <br />
                        სამუშაო გამოცდილება 1993-1997 წ. საქართველოს რკინიგზის
                        ქუთაისის პოლიკლინიკა. <br />
                        1997-2020 წელი ჩხობაძის სახელობის კლინიკა, კონსერვატიული
                        და ოპერაციული გინეკოლოგ რეპროდუქტოლოგი. <br />
                        2014 წლიდან დღემდე ქუთაისის ახალი N2 სამშობიარო სახლი
                        მეან გინეკოლოგი. <br />
                        საკონტაქტო ნომერი: 555-51-99-36.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor6;
