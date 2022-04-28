import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const Doctor5 = ({ seo }) => {
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
                        <img src="" alt="" />
                    </div>
                    <div className="name">ლარისა მეტრეველი</div>
                    <p className="info">
                        ლარისა ბასილის ასული მეტრეველი დაიბადა 14.02.1960 წელს
                        ქ. ონში. <br />
                        1977 წ. დაამთავრა ქ. წყალტუბოს N2 საშუალო სკოლა. <br />
                        1978-1980 წ.წ. ჩათვლით მუშაობდა სანიტრად ქ. წყალტუბოს
                        სანატორიუმ „გეოლოგში“. <br />
                        1982 წ. ჩააბარა ქ. ბარნაულის სახელმწიფო სამედიცინო
                        ინსტიტუტის *** მოსამზადებელ განყოფილებაზე. <br />
                        1983 წელს ჩაირიცხა ამავე ინსტიტუტის სამკურნალო
                        ფაკულტეტის პირველ კურსზე, რომელიც დაამთავრა 1990 წ.{" "}
                        <br />
                        1991-1992 წ.წ. გაიარა ინტერნატურა ქ. ბარნაულის N2
                        სამშობიარო სახლში. <br />
                        1993-1994 წ.წ. მუშაობდა ქ. წყალტუბოს სანატორიუმ
                        „რკინიგზელში“ მეან გინეკოლოგად. <br />
                        1995 წ. დღემდე მუშაობს ქუთაისის N4 პოლიკლინიკაში მეან
                        გინეკოლოგად, პარალელურად 2019 წლიდან მუშაობს ქ. ქუთაისის
                        ახალ N2 სამშობიარო სახლში კონსულტაციაში მეან
                        გინეკოლოგად. ჰყავს მეუღლე და ერთი ქალიშვილი. <br />
                        ტელ.: 592-70-09-97
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor5;
