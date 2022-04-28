import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const Doctor4 = ({ seo }) => {
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
                        <img src="/img/doctors/david-j.jpg" alt="" />
                    </div>
                    <div className="name">დავით ჯანელიძე</div>
                    <p className="info">
                        დაიბადა 20.05.1957 წ. ქ. ქუთაისში 1964-1974 წ.წ
                        -ქუთაისის N9 საშუალი სკოლა 1981-1987 წ.წ. ქ.
                        არხანგელსკის სახელმწიფო სამედიცინო ინსტიტუტის სამკურნალო
                        ფაკულტეტი. სპეციალობა - მეან-გინეკოლოგი (HB-N528839).{" "}
                        <br />
                        2007 წ. მარტიდან დღემდე შპს ქუთაისის N3 სამშობიარო
                        სახლის სამეანო განყოფილების გამგე; <br />
                        1999 წ-2010წ. ქუთაისის N3 სამშობიარო სახლის
                        სამეთვალყურეო საბჭოს თავ-რე; <br />
                        2010 წ.2020 წ. 6 ივლისამდე შპს ქუთაისის N3 სამშობიარო
                        სახლის სამედიცინო დირექტორი; <br />
                        1994 წ. 2007 წ. შპს ქუთაისის N3 სამშობიარო სახლის მეან
                        გინეკოლოგი; <br />
                        1988წ. 1994 წ. ვანის რაიონული საავადმყოფოს სამეანო-
                        გინეკოლოგიური განყოფილების მეან გინეკოლოგი; <br />
                        სამუშაო ენები: ქართული, რუსული. <br />
                        2020 წ. ახალი N2 სამშობიარო სახლის კლინიკური მენეჯერი.{" "}
                        <br />
                        ტელ: 599504714
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor4;
