import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const Doctor9 = ({ seo }) => {
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
                        <img src="/img/doctors/LIA-jINCHARADZE.jpg" alt="" />
                    </div>
                    <div className="name">ლია ჯინჭარაძე</div>
                    <p className="info">
                        დავიბადე 1960 წელს ქ. ქუთაისში, დავამთავრე ქ. ქუთაისის
                        31 საშუალო სკოლა, 1981 წელს ჩავაბარე ლენინგრადის
                        პედიატრიულ ინსტიტუტში, დამთავრებისთანავე იმავე
                        ინსტიტუტში გავხდი რეზიდენტი და დავიწყე მუშაობა პედიატრად
                        ი.ვორონცოვის კათედრაზე. <br />
                        1992 წელს გავხდი ორდინატორი პეტერბურგის ოტტოს სახელობის
                        კვლევით ინსტიტუტში სპეციალობით ნეონატოლოგი. <br />
                        1996 წლიდან ვმუშაობდი ქუთაისის სამეანო გინეკოლოგიურ
                        საავადმყოფოში ნეონატოლოგად. <br />
                        2013 წლიდან ვარ ნეონატოლოგიური სამსახურის უფროსი
                        ქუთაისის ახალი N2 სამშობიარო სახლში. მუდმივად
                        ვმონაწილეობ საქართველოში მიმდინარე უწყვეტ სამედიცინო
                        განათლებაში. მყავს ერთი შვილი.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor9;
