import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "./OurDoctors.css";

const Doctor1 = ({ seo }) => {
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
                        <img src="/img/doctors/el.jpeg" alt="" />
                    </div>
                    <div className="name">ირაკლი მერკვილაძე</div>
                    <p className="info">
                        მერკვილაძე ირაკლი იოსების ძე დაიბადა 03.09.1961 წ. ქ.
                        ზუგდიდში. <br />
                        1968-1978 წ.წ. სწავლობდა ქუთაისის N9 საშუალო სკოლაში.
                        <br />
                        1978-1984 წ.წ. პეტროზავოდსკის უნივერსიტეტი სამედიცინო
                        ფაკულტეტი. 1984-1985 წ.წ. ინტერნატურა ქ. ლენინგრადი.
                        <br />
                        1985-1989 წ.წ. ტიხეინის სამშობიაროს მეან გინეკოლოგი
                        1989-1991 წ.წ. ორდინატურა ქ. <br />
                        ლენინგრადში 1991-2012 წ.წ. ქუთაისის სამეანო გინეკოლოგიურ
                        საავადმყოფო სამეანო-განყოფილების გამგე სამედიცინო
                        დირექტორი. <br />
                        2010-2011 წ.წ. მიიღო მონაწილეობა, როგორც ექსპერტმა,
                        მეანობა- გინეკოლოგიაში საქართველოს წამყვან
                        სპეციალისტებთან და უცხოელ ექსპერტებთან ერთად, მტკიცებულ
                        მედიცინაზე დაფუძნებული ეროვნული პროტოკოლების
                        შემუშავებაში და დანერგვაში. <br />
                        აქვს 38 წლიანი გამოცდილება, მეანობა-გინეკოლოგიაში, არის
                        ექოსკოპიის სპეციალისტი. <br />
                        2012-2013 წ.წ. ქუთაისის N3 სამშობიარო სახლი სამედიცინო
                        დირექტორი. <br />
                        ექიმ ირაკლი მერკვილაძესთან თქვენ შეგიძლიათ მიიღოთ
                        შემდეგი მომსახურეობა: <br />
                        1. ორსულთა ანტენატალური მეთვალყურეობა; <br />
                        2. ბუნებრივი გზით მშობიარობა და საკეისრო კვეთა; <br />
                        3. ორსულობის შეწყვეტა სამედიცინო ჩვენებით; <br />
                        4. გინეკოლოგიური ოპერაციები; <br />
                        5. ექოსკოპია აპარატით VOLUSON-8E, 4D - ფერადი დოპლერით;
                        <br />
                        6. კარდიოტახოგრამა-ნაყოფის გულისცემის ჩაწერა. <br />
                        2013 წ. დღემდე ახალ N 2 სამშობიარო სახლის დირექტორი.
                        საკონტაქტო ტელ.: 599-56-38-72
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor1;
