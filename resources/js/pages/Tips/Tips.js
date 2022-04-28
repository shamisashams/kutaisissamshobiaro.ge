import React, { useEffect } from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../../Layouts/Layout";
import { Link } from "@inertiajs/inertia-react";
import "./Tips.css";

const Tips = ({ seo }) => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    const tips = [
        {
            title: "B ჯგუფის სტრეპტოკოკური დაავადება",
        },
        {
            title: "D-ვიტამინი",
        },
        {
            title: "გესტაციური (ორსულთა) დიაბეტი",
        },
        {
            title: "დეკრეტული-შვებულება-საინფ.-ბიულეტენი",
        },
        {
            title: "ექოსკოპია ორსულობის დროს (1)",
        },
        {
            title: "თვითნებითი აბორტი",
        },
        {
            title: "მამაკაცის ჩართვა პერინატალურ მოვლაში",
        },
        {
            title: "მშობელთა სკოლა",
        },
        {
            title: "მშობიარობის გაუტკივარება. (1)",
        },
        {
            title: "ნაადრევი-მშობიარობა-1",
        },
        {
            title: "ორსულის კვება",
        },
        {
            title: "ორსულის მეთვალყურეობა",
        },
        {
            title: "ორსულობა და Rhკონფლიქტი",
        },
        {
            title: "პირღებინება",
        },
        {
            title: "პრეეკლამპსია, ეკლამპსია",
        },
        {
            title: "რა მნიშვნელობა აქვს მშობელთა სკოლას  ორსულისათვის...",
        },
        {
            title: "საკეისრო კვეთა",
        },
        {
            title: "ძუძუთვი კვება",
        },
        {
            title: "ჰიპოთირეოზი ორსულებთან",
        },
    ];
    return (
        <Layout seo={seo}>
            <div className="tipsPage">
                <PageHead
                    title="ახალი N2 სამშობიარო სახლი"
                    prev="მთავარი"
                    active="რჩევები"
                />
                <div className="tips_grid wrapper">
                    {tips.map((box, index) => {
                        return (
                            <Link
                                href={route(`client.tip.index`, index + 1)}
                                key={index}
                                data-aos="flip-right"
                            >
                                <div className="tip_box">
                                    <h3>{box.title}</h3>
                                    <div className="detail flex centered">
                                        <span>სრულად</span>
                                        <img src="/img/icons/5.png" alt="" />
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Tips;
