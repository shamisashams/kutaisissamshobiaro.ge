import React, { useEffect } from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import "./AboutUs.css";
import { Title2 } from "../../components/Titles/Titles";

import { MainBtn } from "../../components/MainBtn/MainBtn";
import { ServiceBox } from "../../components/ServiceBox/ServiceBox";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../../Layouts/Layout";

const AboutUs = ({seo}) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const checkList = ["ამბულატორია", "სტაციონარი"];
    const serviceBoxData = [
        {
            icon: "/img/icons/service/1.png",
            title: "ამბოლატორიული მომსახურება",
            para: "●	ქალთა კონსულტაცია	●	სამეანო განყოფილება	●	გინეკოლოგიური განყოფილება	●	პოლიკლინიკა	●	ლაბორატორია	●	მასაჟის კაბინეტი●	ფიზიო კაბინეტი●	რეპროდუქტოლოგის კაბინეტი●	ბაქტეროლოგიური ლაბორატორია●	ოზონოთერაპიის კაბინეტი●	ექოსკოპიის კაბინეტი.●	კარდიოტახოგრამის კაბინეტი.●	რენტგენის კაბინეტი●	სტომატოლოგიური კაბინეტი●	მშობელთა სკოლა",
            background: "#e4feff7d",
        },
        {
            icon: "/img/icons/service/2.png",
            title: "სტაციონალური მომსახურება:",
            para: " ●	სამი ინდივიდუალური სამშობიარო ბლოკი●	საკეისრო კვეთისათვის განკუთვნილი საოპერაციო.●	გინეკოლოგიური  საოპერაციო●	მცირე საოპერაციო●	ბოქსირებული პალატა●	რიანიმაციის პალატა",
            background: "#efefef7b",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="aboutPage">
                <PageHead
                    title="ჩვენ შესახებ"
                    prev="მთავარი"
                    active="ჩვენ შესახებ"
                />
                <div className="showcase">
                    <div className="wrapper">
                        <div className="content">
                            <h4>ახალი N2 სამშობიარო სახლი</h4>
                            <p>
                                სამშობიარო დაკომპლექტებულია მაღალკვალიფიციური
                                ექიმ-სპეციალისტებით, რომელთა უმეტეს ნაწილს
                                წარმოადგენენ მრავალწლიანი გამოცდილების მქონდე
                                მეან-გინეკოლოგები და ნეონატოლოგები.
                            </p>
                            <div className="checks">
                                {checkList.map((item,index) => {
                                    return (
                                        <div key={index} className="item">
                                            <span>
                                                <img
                                                    src="/img/icons/service/check.svg"
                                                    alt=""
                                                />
                                            </span>
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <div className="wrapper flex">
                        <div className="lft">
                            <Title2 text="ვინ ვართ ჩვენ?" />
                            <p>
                                ახალი #2 სამშობიარო დაარსდა 2013 წელს.
                                მინიჭებული აქვს პერინატალური მომსახურეობის II
                                დონე.
                            </p>
                            <div className="img_flex flex">
                                <div className="img">
                                    <img src="/img/about/1.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img/about/2.png" alt="" />
                                </div>
                            </div>
                            <p>
                                სამშობიარო დაკომპლექტებულია პროფესიონალი
                                ექიმების გუნდით, რაც პაციენტს საშუალებას აძლევს
                                ჩაიტაროს ყველა საჭირო პროცედურა და სწორად
                                წარმართოს ორსულობისა და მშობიარობის პროცესი.
                                კლინიკის ხელმძღვანელია მთავარი ექიმი,
                                მეან-გინეკოლოგი ირაკლი მერკვილაძე, რომელმაც
                                ქართველ და უცხოელ ექიმებთან ერთად პირველად
                                საქართველოში შეიმუშავა და დანერგა თანამედროვე
                                პროტოკოლი მეან-გინეკოლოგიაში. კლინიკის
                                საოპერაციო, მცირე საოპერაციო, დღის სტაციონარი,
                                ბოქსირებული და რეანიმაციული პალატები აღჭურვილია
                                თანამედროვე აპარატურით, რაც საშუალებას გვაძლევს
                                დროული და ადეკვატური რეაგირება მოვახდინოთ
                                პაციენტის ყველა საჭიროებაზე. ექოსკოპიის 4D ულტრა
                                თანამედროვე ფერადი აპარატი ( ჯონ-ვოლუსონ
                                ელექტრონიკი), მშობლებს საშუალებას აძლევს
                                დაინახოს მუცლადმყოფი ბავშვის სრულად აღქმადი
                                ფერადი კადრები. ყველა პაციენტი ლაბორატორიულ
                                მომსახურეობას ღებულობს თანამედროვე ჰუმანას
                                აპარატურის ანალიზატორებზე. Ჩვენთან ჩატარებული
                                კვლევები საშუალებას იძლევა დავსვათ სწორი
                                დიაგნოზი და წარვმართოთ შესაბამისი მკურნალობა. N2
                                სამშობიარო კლინიკაში მოქმედებს წამახალისებელი
                                აქციები, რაც უფასო ორსულობის დადგენასა და
                                მშობიარობას გულისხმობს. საკეისრო კვეთისა და
                                ფიზიოლოგიური მშობიაობის გარდა, კეთდება ყველა
                                სახის გინეკოლოგიური ოპერაცია.
                            </p>
                            <MainBtn text="დაგვიკავშირდი" />
                        </div>
                        <div className="rgt">
                            <Title2 text="ჩვენი მისია და მიზანი" />
                            <p>
                                ახალი #2 სამშობიარო სახლის მიზანია პაციენტებს
                                ერთ სივრცეში შეუქმნას შესაძლებლობა, ჩაიტარონ
                                მათთვის საჭირო ყველა პროცედურა, რაც დედისა და
                                შვილის ჯანმრთელობისთვის არის აუცილებელი. ჩვენი
                                მისიაა ვიზრუნოთ დედისა და შვილის ჯანმრთელობასა
                                და კომფორტზე.
                            </p>
                            <div className="img" data-aos="flip-left">
                                <img src="/img/about/3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about_service wrapper ">
                    <Title2 text="ჩვენი სერვისი" />
                    <div className="flex">
                        <div data-aos="fade-right">
                            <img
                                src="/img/about/4.png"
                                alt=""
                                style={{ marginBottom: "30px" }}
                            />
                            {/* <p>
                                დეველოპერის ან დიზაინერის ყოველდღიურ
                                საქმიანობაში ხშირად არის ხოლმე საჭირო ისეთი
                                ამოცანების მარტივად შესრულება, რომელსაც
                                სპეციფიური ინსტრუმენტი ჭირდება. ასეთი ამოცანები
                                და
                            </p> */}
                        </div>
                        <div className="grid" data-aos="fade-left">
                            {serviceBoxData.map((box, index) => {
                                return (
                                    <ServiceBox
                                        index={index}
                                        icon={box.icon}
                                        title={box.title}
                                        paragraph={box.para}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default AboutUs;
