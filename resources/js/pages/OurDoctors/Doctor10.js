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
                        <img src="/img/doctors/khatuna.jpg" alt="" />
                    </div>
                    <div className="name">ხათუნა ჟეიშვილი ნეონატ</div>
                    <p className="info">
                        დავიბადე ქუთაისში 1969 წლის 10 მარტს, სკოლა დავამთავრე
                        1986 წელს ოქროს მედლით, ჩავირიცხე თბილისის სახელმწიფო
                        სამედიცინო უნივერსიტეტში 1988 წელს. ინსტიტუტის
                        დამთავრების შემდეგ, მუშაობა დავიწყე ქუთაისის
                        სამეანო_გინეკოლოგიურ საავადმყოფოში ნეონატოლოგად, წლების
                        მანძილზე ვიყავი ახალშობილთა განყოფილების გამგე,.
                        მონაწილეობას ვღებულობ უწყვეტ სამედიცინო განათლებაში,
                        ამჟამად ვმუშაობ ახალ N2 სამშობიარო სახლში დღის
                        ორდინატორად, ახალშობილთა განყოფილებაში, მყავს მეუღლე,
                        ორი შვილი და ორი შვილუშვილი.
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor10;
