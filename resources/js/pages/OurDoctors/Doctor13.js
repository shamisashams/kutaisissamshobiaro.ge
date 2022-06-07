import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const Doctor10 = ({ seo }) => {
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
                        <img src="/img/doctors/ana.jpeg" alt="" />
                    </div>
                    <div className="name">ანა ხუციძე  </div>
                    <p className="info">
                        2003-2009 წ.წ სწავლობდა თბილისის სახელმწიფო სამედიცინო უნივერსიტეტში.
                        2010-2013 წ.წ თბილისის სახელმწიფო სახელმწიფო უნივერსიტეტის რეზიდენტურის პროგრამა სპეციალობით ენდოკრინოლოგია.
                        2014-2016 წ.წ ვ. ივერიელის სახელობის ენდოკრინოლოგია მეტობოლოგია, დიეტოლოგიის ცენტრი „ენ მედიც“-თბილისი.
                        2016 წელს მუშაობდა ქართულ გერმანული კლინიკა „მედიკალ ჰაუსი“ თბილისი.
                        2017 წელს მუშაობდა წმინდა ნიკოლოზის სახელობის სამედიცინო ცენტრი -ევექსის კლინიკა.
                        2018 წლიდან დღემდე მუშაობს ქ. ქუთაისის ახალ N2 სამშობიარო სახლში ენდოკრინოლოგად.
                        საკონტაქტო ტელეფონი: 595-90-73-90

                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor10;
