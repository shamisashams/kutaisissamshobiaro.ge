import React from "react";
import Layout from "../../Layouts/Layout";
import { PageHead } from "../../components/PageHead/PageHead";
import { ServiceBox } from "../../components/ServiceBox/ServiceBox";
import "./Services.css";

const Services = () => {
    const boxList = [
        {
            icon: "/img/icons/service/5.png",
            title: "ქალთა კონსულტაცია",
            para: "მაღალკვალიფიციური ექიმები ორსულობის პირველივე თვიდან გაუწევენ მეთვალყურეობას თქვენს ჯანმრთელობას.",
        },
        {
            icon: "/img/icons/service/1.png",
            title: "სამეანო განყოფილება",
            para: "ჩვენი მეან-გინეკოლოგები კურირებენ ორსულობის ყველა ეტაპს: ემბრიონის განვითარებას, ორსულობის მიმდინარეობას, მშობიარობისა და მის შემდგომ პერიოდს.",
        },
        {
            icon: "/img/icons/service/3.png",
            title: "გინეკოლოგიური განყოფილება",
            para: "კლინიკის ექიმები დაგეხმარებიან ანთებითი დაავადებების, სქესობრივი გზით გადამდები ინფექციების, პრედმენსტრუალური სინდრომის, ჭარბი სისხლდენების და სხვა გინეკოლოგიური პრობლემების მოგვარებაში.",
        },
        {
            icon: "/img/icons/service/2.png",
            title: "პოლიკლინიკა",
            para: "პოლიკლინიკა დაკომპლექტებულია მაღალი დონის კვალიფიციური ექიმებით, რომელთა დახმარებითაც თქვენ შეძლებთ გაიაროთ ექიმის კონსულტაცია და მიიღოთ ჯანმრთელობასთან დაკავშირებული პირველადი დახმარება.",
        },
        {
            icon: "/img/icons/service/4.png",
            title: "ლაბორატორია",
            para: "თანამედროვე,  ჰუმანას  აპარატურის ანალიზატორების საშუალებით კლინიკის სპეციალისტები ჩაგიტარებენ ყველა საჭირო ანალიზს. ",
        },
        {
            icon: "/img/icons/service/6.png",
            title: "მასაჟის კაბინეტი",
            para: "მასაჟის კაბინეტი გაგიქრობთ სტრესს, შეგიმსუბუქებთ ემოციურ ფონს და ამშვიდებს ცენტრალურ ნერვულ სისტემას. ",
        },
        {
            icon: "/img/icons/service/7.png",
            title: "ფიზიო კაბინეტი",
            para: "ფიზიო თერაპიის საშუალებით თქვენ შეძლებთ დაუბურუნოთ თქვენს კუნთებს ჩვეული პლასტიკურობა და სიჯანსაღე.",
        },
        {
            icon: "/img/icons/service/8.png",
            title: "რეპროდუქტოლოგის კაბინეტი",
            para: "რეპროდუქციული კაბინეტი უზრუნველყოფს პაციენტის რეპროდუქციული დარღვევების ყველა სახის პროფილაქტიკას, ზუსტ დიაგნოსტიკასა და მკურნალობას.",
        },
        {
            icon: "/img/icons/service/7.png",
            title: "ოზონოთერაპიის კაბინეტი",
            para: "ოზონოთერაპიის საშუალებით ნადგურდება პათოგენური მიკროფლორა, ვირუსები, სოკოები, ბაქტერიები. ისპობა თავისუფალი რადიკალები, ხდება სისხლის გათხელება და მცირდება არტერიული წნევა. ",
        },
        {
            icon: "/img/icons/service/8.png",
            title: "ექოსკოპიის კაბინეტი.",
            para: "კლინიკაში ფუნქციონირებს ექოსკოპიის 4D ულტრათანამედროვე, ფერადი აპარატი, რაც დედას საშუალებას აძლევს დაინახოს მუცლად  მყოფი ბავშვის სრულად აღქმადი კადრები.",
        },
        {
            icon: "/img/icons/service/9.png",
            title: "კარდიოტახოგრამის კაბინეტი.",
            para: "კვალიფიციური სპეციალისტი უახლესი აპარატურით აწარმოებს გულ-სისხლძარღვთა სისტემის დაავადებების დიაგნოსტიკას, მკურნალობას და პროფილაქტიკას.",
        },
        {
            icon: "/img/icons/service/10.png",
            title: "რენტგენის კაბინეტი",
            para: "რენტგენის კაბინეტი აღჭურვილია უახლესი რენტგენის აპარატით, რომელიც გვეხმარება პაციენტისთვის ზუსტი დიაგნოზის დასმაში. ",
        },
        {
            icon: "/img/icons/service/11.png",
            title: "სტომატოლოგიური კაბინეტი",
            para: "კლინიკაში ფუნქციონირებს სტომატოლოგიური კაბინეტი, რომელიც ზრუნავს თქვენი პირის ღრუს ჯანმრთელობაზე.",
        },
        {
            icon: "/img/icons/service/12.png",
            title: "მშობელთა სკოლა",
            para: "მშობელთა სკოლაში მიღებული ცოდნით მოვახდენთ მშობლის, როგორც ფსიქოლოგიურ, ისე ფიზიკურ მომზადებას მშობიარობისა და მომავალი დედობისათვის. ",
        },
    ];
    return (
        <Layout>
            <div className="servicePage">
                <PageHead title="სერვისი" prev="მთავარი" active="სერვისი" />
                <div className="head ">
                    <h1>ამბულატორიული მომსახურება</h1>
                    {/* <p>
                        დეველოპერის ან დიზაინერის ყოველდღიურ საქმიანობაში ხშირად
                        არის ხოლმე საჭირო ისეთი ამოცანების მარტივად შესრულება,
                        რომელსაც
                    </p> */}
                </div>
                <div className="box_grid wrapper">
                    {boxList.map((item) => {
                        return (
                            <ServiceBox
                                icon={item.icon}
                                title={item.title}
                                paragraph={item.para}
                            />
                        );
                    })}
                </div>
                <div className="highlighted">
                    <div className="wrapper2 flex">
                        <div className="content">
                            <h1>სტაციონალური მომსახურება</h1>
                            <div className="checked">
                                <img
                                    src="/img/icons/service/check.svg"
                                    alt=""
                                />
                                სამი ინდივიდუალური სამშობიარო ბლოკი
                            </div>
                            <div className="checked">
                                <img
                                    src="/img/icons/service/check.svg"
                                    alt=""
                                />
                                საკეისრო კვეთისათვის განკუთვნილი საოპერაციო
                            </div>
                            <div className="checked">
                                <img
                                    src="/img/icons/service/check.svg"
                                    alt=""
                                />
                                გინეკოლოგიური საოპერაციო
                            </div>
                            <div className="checked">
                                <img
                                    src="/img/icons/service/check.svg"
                                    alt=""
                                />
                                მცირე საოპერაციო
                            </div>
                            <div className="checked">
                                <img
                                    src="/img/icons/service/check.svg"
                                    alt=""
                                />
                                ბოქსირებული პალატა
                            </div>
                            <div className="checked">
                                <img
                                    src="/img/icons/service/check.svg"
                                    alt=""
                                />
                                რეანიმაციის პალატა
                            </div>
                            <p></p>
                        </div>
                        <div className="img flex">
                            <img src="/img/icons/service/img1.png" alt="" />
                            <img src="/img/icons/service/img2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="wrapper2 last_flex flex">
                    <img
                        className="img"
                        src="/img/icons/service/img3.png"
                        alt=""
                    />
                    <div className="content">
                        <h1>სტაციონარში დაყოვნების პირობები</h1>
                        <div className="checked">
                            <img src="/img/icons/service/check.svg" alt="" />
                            შედის სამჯერადი კვება.
                        </div>
                        <div className="checked">
                            <img src="/img/icons/service/check.svg" alt="" />
                            ორ საწოლიანი პალატები, სველი წერტილებით
                        </div>
                        <div className="checked">
                            <img src="/img/icons/service/check.svg" alt="" />
                            ოთხი ლუქს პალატა, რომელშიც შესაძლებელია პაციენტის
                            პარტნიორთან ერთად განთავსება.
                        </div>
                        <p>
                            კლინიკა ზრუნავს სტაციონარში დედისა და ბავშვის
                            უდარდელ, კომფორტულ განთავსებაზე.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Services;
