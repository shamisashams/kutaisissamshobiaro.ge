import React from "react";
import { PageHead } from "../../components/PageHead/PageHead";
import Layout from "../../Layouts/Layout";
import "../Tips/Tips.css";

const SingleTip = ({ seo }) => {
    return (
        <Layout seo={seo}>
            <div className="singleTip ">
                <PageHead
                    title="ორსულის მეთვალყურეობა"
                    prev="მთავარი"
                    active="რჩევები"
                />
                <div className="wrapper2 main">
                    <h3>ორსულის ინფორმირება ანტენატალურ მეთვალყურეობაზე</h3>
                    <p>
                        საქართველოში ორსულების მეთვალყურეობა მიმდინარეობს
                        სახელმწიფო სტანდარტით (პროტოკოლით) ქვემოთ ჩამოთვლილი
                        პროგრამით სამედიცინო მომსახურეობის მოცულობა უფასოა,
                    </p>
                    <div className="table">
                        <table>
                            <tr>
                                <td>N</td>
                                <td>ვიზიტი</td>
                                <td>ჩამონათვალი</td>
                                <td>N</td>
                                <td>ვიზიტი</td>
                                <td>ჩამონათვალი</td>
                            </tr>
                            <tr>
                                <td rowSpan={3}>1</td>
                                <td rowSpan={3}>პირველი ვიზიტი 12-კვ- მდე</td>
                                <td rowSpan={3}>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br />
                                    ბ) სისხლის საერთო ანალიზი; <br />
                                    გ) შარდის კულტურალური გამოკვლევა; <br />
                                    დ) სისხლის ჯგუფისა და რეზუსის - კუთვნილების
                                    განსაზღვრა; <br />
                                    ე) რეზუს ანტისხეულებზე ტესტირება რეზუს
                                    უარყიფუთუ სისხლის კუთვნილების ქაკებში;{" "}
                                    <br />
                                    ვ) სკრინინგული ტესტები (ჰეპატიტის ვირუსი,
                                    აივ ინფექცია, სიფილისი და C ჰეპატიტი.){" "}
                                    <br />
                                    ზ) ულტრაბგერითი გამოკვლევა.
                                </td>
                                <td>4</td>
                                <td>მე-4 ვიზიტი 30-ე კვ</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br /> ბ)
                                    შარდის პროტეინურის განსაზღვრა;
                                </td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>მე-5 ვიზიტი 34-ე კვ</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br />
                                    ბ) შარდის პროტეინურის განსაზღვრა;
                                </td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>6 მე-6 ვიზიტრი 36-კვ</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br /> ბ)
                                    შარდის პროტეინურის განსაზღვრა; <br />
                                    გ) ჰემოგლობინის განსაზღვრა სისხლში{" "}
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>მე-2 ვიზიტი მე-20 კვ,</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br />
                                    ბ) ულტრაბგერითი გამოკვლევა
                                </td>
                                <td>7</td>
                                <td>მე-7 ვიზიტი 38-ე კვ</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br />
                                    ბ) შარდის პროტეინურის განსაზღვრა;
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>მე-3 ვიზიტი 26-ე კვ,</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br /> ბ)
                                    შარდის პროტეინურის განსაზღვრა; <br /> გ)
                                    რეზუს ანტისხეულების განსაზღვრა
                                    რეზუს-უარყოფით ქალებში; <br /> დ) სკრინინგი
                                    გესტაციურ დიაბეტზე.
                                </td>
                                <td>8</td>
                                <td>მე-8 ვიზიტი 40-ე კვ</td>
                                <td>
                                    ა) მეან-გინეკოლოგთან კონსულტაცია; <br />
                                    ბ) შარდის პროტეინურის განსაზღვრა;
                                </td>
                            </tr>
                        </table>
                    </div>
                    <p>
                        თუ ორსული დროულად (12 კვირამდე) არ მიმართავს ქალთა
                        კონსულტაციას აღნიშნული სახელმწიფო უფასო ვიზიტებით ვერ
                        ისარგებლებს.
                    </p>
                    <p>
                        თუ ზემოთ აღნიშნული 8 ვიზიტიდან ორსულის მიერ იქნება
                        გამოტოვებული,არ დაფინანსდება სახელმწიფოს მიერ,თუმცა
                        დანარჩენი ვიზიტების დაფინანსება გაგრძელდება.
                    </p>
                    <p>
                        მეთვალყურეობა უზრუნველყოფს ორსულის სწორად გამოკვლევას
                        მკურნალობას,რაც ორსულის ჯანმრთელობას და ჯანმრთელი
                        ახალშობილის დაბადების საწინდარია.ორსულობა არის ნორმალური
                        ფიზიოლოგიური პროცესი და ექიმის მიერ შემოთავაზებული
                        ჩარევა უნდა იყოს უსაფრთხო,ეფექტური და მისაღები
                        ორსულისათვის,თუმცა ექიმის მიერ თქვენ ინფორმირებული
                        იქნებით დიაგნოსტიკური და სკრინინგული ტესტების
                        შესახებ.დამატებით გაცნობებ,რომ პროგრამაში მონაწილე
                        სამედიცინო დაწესუბულებას აქვს ვალდებულება ყოველგარი
                        ბარიერის და დისკრიმინაციის გარეშე შეუფერხებლად გაგიწიოთ
                        პროგრამით გათვალისწინებული მომსახურეობა,მოქმედი
                        კანონმდებლობით განსაზღვრული სამედიცინო მომსახურების
                        ხარისხის სტანდარტის შესაბამისად.დაუშვებელია
                        დაწესებულების მიერ რაიმე მიზეზით პროგრამით
                        გათვალისწინებული მომსახურეობის გაწევაზე უარი თქვას ან
                        პროგრამის ფარგლებში გაწეულ მომსახურეობაზე რაიმე
                        საფასურის მოთხოვნა.
                    </p>
                    <p>
                        გარდა ამისა ქვეყანაში ჯანდაცვის სამინისტროს მიერ
                        დადგენილია სტანდარტი (პროტოკოლი)გათვალისწინებულია
                        დამატებითი კონსულტაციები და გამოკვლევები (ორსულისთვის
                        ფასიანი)საჭიროების შემთხვევაში,თქვენი ჯანმრთელობის და
                        ნაყოფის მდგომარეობიდან გამომდინარე,თქვენი ექმიმის მიერ
                        შემოთავაზებული იქნება შესაბამისი დამატებითი
                        კლინიკო-ლაბორატიული გამოკვლევები.
                    </p>
                    <ul>
                        <li>კარდიოტახოგრაფია (ნაყოფის გულისცემა ჩაწერა);</li>
                        <li>ექოსკოპიური გამოკვლევა დოპლერით;</li>
                        <li>
                            თერაპევტის, კარდეოლოგის, ენდოკრინოლოგის და სხვა
                            სპეციალისტების კონსულტაცია;
                        </li>
                        <li>
                            შარდის ბაქტეორიოლოგიური კვლევა,განმეორებით
                            საჭიროებისამებრ შემოწმება;
                        </li>
                        <li>ორივე პროგრამა ავსებს ერთმანეთს.</li>
                    </ul>
                    <p style={{ textAlign: "center" }}>
                        <strong>
                            გისურვებთ ჯანმრთელობას! <br />
                            ქუთაისის ახალი N2 სამშობიარო სახლი
                        </strong>
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default SingleTip;