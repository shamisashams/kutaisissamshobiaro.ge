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
                        <img src="/img/doctors/marina.jpg" alt="" />
                    </div>
                    <div className="name">მარინა ჯავახაძე </div>
                    <p className="info">
                        1992 წელს დაამთავრა თბილისის სახელმწიფო უნივერსიტეტი სამკურნალო ფაკულტეტი (რუსული სექტორი).
                        1993-1994 წ.წ გაიარა ინტერნატურა ქ. ქუთაისის სამხარეო კლინიკურ საავადმყოფოში.
                        1995-1998 წ.წ იმუშავა ექიმ თერაპევტად ქ. ქუთაისის  სამხარეო კლინიკურ საავადმყოფოში.
                        1995-1996 წ.წ ასევე გაიარე რუსეთის პოსტდიპლომური განათლების აკადემიის ბაზაზე კვალიფიკაციის ამაღლების კურსები  ელექტროპუნქტურისა და ჰომეოპათიის საკითხებში.
                        1999-2013 წ.წ მუშაობდა ქუთაისის რკინიგზის საკვანძო საავადმყოფოში.
                        2013-2014 წ.წ კლინიკა „ბომონდში“
                        2015 წლიდან დღემდე მუშაობს ქუთაისის ახალ N2 სამშობიარო სახლში.
                        პარალელურად მუშაობს ქალთა ჯანმრთელობის ცენტრში „ჰერა“ - ოჯახის ექიმად.
                        2013 წლიდან სერთიფიცირებული არის ჰომეოპათიაში, შინაგან მედიცინაში საოჯახო მედიცინაში.
                        სერთიფიცირებულია:
                        საერთაშორისო სამეცნიერო სიმპოზიუმი „როგორ ვაქციოთ რთული მარტივად: ბიორეგულაციური თერაპია ოჯახის ექიმის პრაკტიკაში“.
                        მ.პერესი (შვეიცარიის ჰომოოპატიის ინსტიტუტი) - თემა: „ორსულობისა და მეძუძურობის პერიოდის პრობლემების მკურნალობა ჰომეოპათური საშუალებებით“
                        „ჰომეოპათიური საშუალების პოლიატიური მკურნალობა“.
                        „მწვავე რესპირატორული დაავადების და მათი გართულების მკურნალობა ჰომეოპათიური პრეპარატებით; განსხვავება ბავშვთა და ზრდასრულთა პრაქტიკაში“ და ა.შ.

                        საკონტაქტო ტელეფონი: 593 36-68-53

                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Doctor10;