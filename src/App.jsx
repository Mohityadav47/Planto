import React from "react";
import Navigation from "./component/Navigation";
import Header from "./component/Header";
import PopularFood from "./component/PopularFood";
import Offer from "./component/Offer";
import About from "./component/About";
import BestSelling from "./component/BestSelling";
import TodaySpecial from "./component/TodaySpecial";
import FoodMenu from "./component/FoodMenu";
import Chefe from "./component/Chefe";
import FoodNews from "./component/FoodNews";
import Footer from "./component/Footer";

const App= ()=>{


        const logo="./Image/Illustration/l1.png"
        const links=["Home","About Us","Shop","Page","Blog","Contact us"]
        const icons=["bi bi-search","bi bi-bag"]
        const ListIcon="bi bi-list";
        const ListImg="/Image/Illustration/imgi_1_logo.svg";
        


    const carouselData = [
            {
                active:"carousel-item active",
                carouselPara: "WELCOME TO PLANTO",
                carouselh1: "FRESH PLANTS",
                carouselbtn: "ORDER NOW",
                carouselImg: "/Image/Illustration/ho.webp~"
            },
            {
                active:"carousel-item ",
                carouselPara: "WELCOME FRESHEAT",
                carouselh1: "CHINCAGO DEEP BURGER KING",
                carouselbtn: "ORDER NOW",
                carouselImg: "/Image/Illustration/first.jpg"
            },
            {
                active:"carousel-item ",
                carouselPara: "WELCOME FRESHEAT",
                carouselh1: "SPICY FRIED CHICKEN",
                carouselbtn: "ORDER NOW",
                carouselImg: "/Image/Illustration/h3.webp"
            }
            ];

    const PopularFoodTitle="Best Plants"
    const PopularFoodHeading="Popular plants for home"
    const PopularFoodBurger="/Image/Illustration/Burger-sticker.png";
    const PopularFoodChilli="/Image/Illustration/chilli (1).png";

    const PopularFoodData=[
        {
            dish1Img:"/Image/Illustration/p1.webp",
            dish1Name:"3 Layer Lucky Bamboo Plant",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.250"
        },
        {
            dish1Img:"/Image/Illustration/jj.webp",
            dish1Name:"Jade Plant Terrarium In Glass Vase",
            dish1Fee:"Jade Plant In Gold Tone Metal Pot",
            dish1Price:"Rs.1150"
        },
        {
            dish1Img:"/Image/Illustration/hh.webp",
            dish1Name:"Syngonium Plant In Birthday Antiquity Bottle Planter",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.350"
        },
        {
            dish1Img:"/Image/Illustration/dd.webp",
            dish1Name:"Green Babies & Floral Beauties Gift Tray",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.450"
        },
        {
            comment:"d-none d-md-block",
            dish1Img:"/Image/Illustration/yy.webp",
            dish1Name:"Money Plant In Colourfull Rajwada Printed Pot",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.1450"
        },
        {
            dish1Img:"/Image/Illustration/kk.webp",
            dish1Name:"Elegant Blooms N Syngonium Gift",
            dish1Fee:"The Registration Fee",
            dish1Price:"Rs.1250"
        },
    ];

    const offerData=[
        {
            offertitle:"ON THIS WEEK",
            offerDish:"Adenium Velvet Dream Grafted Plant",
            offerTime:"Limits Time Offer",
            offerBtn:"ORDER NOW",
            offerimg:"/Image/Illustration/of2.webp"
        },
        {
            offertitle:"WELCOME FRESHEAT",
            offerDish:"Adenium Yellow Double Petal Plant ",
            offerTime:"Limits Time Offer",
            offerBtn:"ORDER NOW",
            offerimg:"/Image/Illustration/off3.webp"
        },
        {
            offertitle:"ON THIS WEEK",
            offerDish:"Adenium White Double Petal",
            offerTime:"Limits Time Offer",
            offerBtn:"ORDER NOW",
            offerimg:"/Image/Illustration/gg.webp"
        },

    ]

    const aboutImgLeft="/Image/Illustration/tt1.jpg"
    const aboutImgRight="/Image/Illustration/ab2.webp"
    const aboutTitle="About US"
    const aboutHeading="Plants, the silent guardians of the Earth, can offer us such deep insights if we only learn to listen. "
    const aboutDetail="Buy plants online from Planto — India's most trusted plant nursery for healthy indoor, outdoor, and flowering plants. We deliver live plants across India."
    const aboutBtn="ORDER NOW"

    const BestSellingTitle="POPULAR PLANTS"
    const BestSellingHeading="Best selling Plants"
    const BestSellingBtn="VIEW ALL ITEMS"
    const BestSellingData=[
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/b1.webp",
            dishName:"Christmas Cactus White Flower Plant",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.349.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/b2.webp",
            dishName:"Money Plant Marble with Hanging Basket Big",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.599.00"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/b3.webp",
            dishName:"Monstera Creeper Plant - Monstera Obliqua Plant, Monkey Mask",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.399.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/b4.webp",
            dishName:"Aboli Plant - Firecracker Flower, Crossandra",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.259.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/b5.jpg",
            dishName:"Acalypha Green Plant",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.449.99"
        },
        {
            dishLike:"bi bi-heart",
            dishImg:"/Image/Illustration/b6.webp",
            dishName:"Aglaonema Lipstick Plant - Air Purifier Indoor Plant",
            dishFee:"The Registration Fee",
            dishPrice:"Rs.449.99"
        },
    ]

    const TodaySpecialStickerUp="./Image/Illustration/l1.png"
    const TodaySpecialStickerDown="./Image/Illustration/vv.webp"
    const TodaySpecialTitle="WELCOME TO PLANTO";
    const TodaySpecialHeading="TODAY SPACIAL PLANT";
    const TodaySpecialTime="Limits Time Offer";
    const TodaySpecialBtn="ORDER NOW ";
    const TodaySpecialImg="/Image/Illustration/vv.webp";
    const TodaySpecialTomato="/Image/Illustration/vv.webp";


    const FoodMenuTitle="Best Medium size Indoor plants";
    const FoodMenuHeading="Fresh Plants";

    const FoodMenuChoice =[
        {
           FoodMenuChoiceImg:"/Image/Illustration/tttt.webp",
           FoodMenuChoiceName:"Clean ",
        },
        {
           FoodMenuChoiceImg:"/Image/Illustration/uuuu.webp",
           FoodMenuChoiceName:"Air & Fresh ",
        },
        {
           FoodMenuChoiceImg:"/Image/Illustration/yy.webp",
           FoodMenuChoiceName:" Cool ",
        },
        {
           FoodMenuChoiceImg:"/Image/Illustration/xzz.webp",
           FoodMenuChoiceName:"Green ",
        },
    ]

    const FoodMenuCard=[
        {
            FoodMenuImg:"/Image/Illustration/m1.webp",
            FoodMenuName:"Aglaonema Lipstick Plant ",
            FoodMenuPara:"Air Purifier Indoor Plant.",
            FoodMenuPrice:"Rs.654.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/m2.webp",
            FoodMenuName:"Christmas Cactus White Flower Plant",
            FoodMenuPara:"It's  White Flower Plant.",
            FoodMenuPrice:"Rs.1195.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/of2.webp",
            FoodMenuName:"Money Plant Marble with Hanging Basket Big",
            FoodMenuPara:"It's Money Plant Marble with Hanging Basket Bigur.",
            FoodMenuPrice:"Rs.635.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/off3.webp",
            FoodMenuName:"Aboli Plant - Firecrac",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.555.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/p1.webp",
            FoodMenuName:"Acalypha Green DLuxe D Fwnt ",
            FoodMenuPara:"It's a tAcaly .",
            FoodMenuPrice:"Rs.254.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/de.webp",
            FoodMenuName:"Vegetables Burger  Pl Luxe FiberGlntc helth",
            FoodMenuPara:"It's a testament to our.",
            FoodMenuPrice:"Rs.94.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/qq.webp",
            FoodMenuName:"Newyork Skyline Fass Planter",
            FoodMenuPara:"It's a testament to ouNewyork Skylin.",
            FoodMenuPrice:"Rs.654.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/yt.webp",
            FoodMenuName:"Downtown Luxe FiberGlass Planter",
            FoodMenuPara:"It's a tt to our.",
            FoodMenuPrice:"Rs.654.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/yyy.webp",
            FoodMenuName:"Golden Money Plant With Self Watering Pot",
            FoodMenuPara:"Self Watering Pot.",
            FoodMenuPrice:"Rs.864.99"
        },
        {
            FoodMenuImg:"/Image/Illustration/rrr.webp",
            FoodMenuName:"Golden Hahnii Snake Plant po ",
            FoodMenuPara:"Metal Self Watering Pot.",
            FoodMenuPrice:"Rs.899"
        },
    ]

    const FoodMenuAdd1="PLANTS | COOL & FRESH | AIR HEALTHY LIFE";

    const ChefeTitle="Reviews";
    const ChefeHeading="Meet Our Happy customers";

    const ChefeData=[
        {
            ChefeImg:"/Image/Illustration/t1.webp",
            ChefeName:"Sunita Vyas",
            ChefePosition:"Clean And Energetic"
        },
        {
            ChefeImg:"/Image/Illustration/t2.png",
            ChefeName:"Rahl Pawar",
            ChefePosition:"Heathy"
        },
        {
            ChefeImg:"/Image/Illustration/t3.png",
            ChefeName:"Marvin Jadhav",
            ChefePosition:"Good For Life"
        },
    ]


    const FoodNewsTitle="LATEST NEWS";
    const FoodNewsHeading="Our Latest Plant News";
    const FoodNewsData=[
        {
            FoodNewsImg:"/Image/Illustration/xzz.webp",
            FoodNewsDate:"17 Dec",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"Plant",
            FoodNewsHead:"Soothing Sansevieria Trifasciata Terrarium",
            FoodNewsRead:"Read More"
        },
        
        {
            FoodNewsImg:"/Image/Illustration/tttt.webp",
            FoodNewsDate:"27 Dec",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"plant",
            FoodNewsHead:"Holiday Season Wishes Floral Gift Mug",
            FoodNewsRead:"Read More"
        },
        {
            FoodNewsImg:"/Image/Illustration/uuuu.webp",
            FoodNewsDate:"7 Nov",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"plant",
            FoodNewsHead:"2 Layer Lucky Bamboo In Glass Vase Transparent",
            FoodNewsRead:"Read More"
        },
        {
            FoodNewsImg:"/Image/Illustration/bbb.webp",
            FoodNewsDate:"15 Dec",
            FoodNewsAdmin:"By Admin",
            FoodNewsTags:"plant",
            FoodNewsHead:"Benifits Of Healthy And Safety Measure",
            FoodNewsRead:"Read More"
        }
    ]


    const FooterContact=[
        {
            ContactIcon:"bi bi-geo-alt-fill",
            ContactAddressTitle:"Address",
            ContactAddress:"4648 Rocky Road Philadelphia"
        },
        {
            ContactIcon:"bi bi-envelope",
            ContactAddressTitle:"Send Email",
            ContactAddress:"info@exmple.com"
        },
        {
            ContactIcon:"bi bi-telephone-fill",
            ContactAddressTitle:"Call Emergency",
            ContactAddress:"+88 0123 654 99"
        }
    ]

    const FooterLogo="./Image/Illustration/FooterLogo.svg";
    const FooterLogoBelow="Buy plants online from Planto — India's most trusted plant nursery for healthy indoor, outdoor, and flowering plants. We deliver live plants across India.";
    const FooterSocialMedia=[
        "bi bi-facebook",
        "bi bi-twitter-x",
        "bi bi-linkedin",
        "bi bi-youtube"
    ]

    const QuickLinkTitle="Quick Links";
    const QuickLinkData=[
        "About Us",
        "Our Gallery",
        "Our Blogs",
        "FAQ's",
        "Contact Us"
    ]

    const OurMenuTitle="Services";
    const OurMenuData=[
        "Corporate Gifting",
        "Plant Rental",
        "Garden Maintenance",
        "Vertical Garden",
        "Balcony Garden"
    ]

    const ContactUsTitle="Contact Us";
    const ContactUsTime1="Monday – Friday: 8am – 4pm ";
    const ContactUsTime2="Saturday: 8am – 12am";
    const ContactUsTerms="I agree to the Privacy Policy.";

    return(
        <React.Fragment>

            <Navigation logos={logo} nav={links} icon={icons} ListIcon={ListIcon} ListImg={ListImg}/>

            <Header slides={carouselData} />

            <PopularFood food={PopularFoodData} heading={PopularFoodHeading} PopularFoodTitle={PopularFoodTitle} PopularFoodBurger={PopularFoodBurger} PopularFoodChilli={PopularFoodChilli} />

            <Offer offer={offerData}/>

            <About aboutImgLeft={aboutImgLeft} aboutImgRight={aboutImgRight} aboutTitle={aboutTitle} aboutHeading={aboutHeading} aboutDetail={aboutDetail} aboutBtn={aboutBtn} />

            <BestSelling BestSellingTitle={BestSellingTitle} BestSellingHeading={BestSellingHeading} BestSellingData={BestSellingData} BestSellingBtn={BestSellingBtn} />
            
            <TodaySpecial TodaySpecialStickerUp={TodaySpecialStickerUp} TodaySpecialStickerDown={TodaySpecialStickerDown} TodaySpecialTitle={TodaySpecialTitle} TodaySpecialHeading={TodaySpecialHeading} TodaySpecialTime={TodaySpecialTime} TodaySpecialBtn={TodaySpecialBtn} TodaySpecialImg={TodaySpecialImg} TodaySpecialTomato={TodaySpecialTomato}  />

            <FoodMenu FoodMenuTitle={FoodMenuTitle} FoodMenuHeading={FoodMenuHeading} FoodMenuChoice={FoodMenuChoice} FoodMenuCard={FoodMenuCard} FoodMenuAdd1={FoodMenuAdd1}  />

            <Chefe ChefeTitle={ChefeTitle} ChefeHeading={ChefeHeading} ChefeData={ChefeData}  />

            <FoodNews FoodNewsTitle={FoodNewsTitle} FoodNewsHeading={FoodNewsHeading} FoodNewsData={FoodNewsData} />

            <Footer FooterContact={FooterContact}  FooterLogo={FooterLogo}  FooterLogoBelow={FooterLogoBelow} FooterSocialMedia={FooterSocialMedia} QuickLinkTitle={QuickLinkTitle}  QuickLinkData={QuickLinkData} OurMenuTitle={OurMenuTitle} OurMenuData={OurMenuData} ContactUsTitle={ContactUsTitle} ContactUsTime1={ContactUsTime1} ContactUsTime2={ContactUsTime2}  ContactUsTerms={ContactUsTerms}   />

        </React.Fragment>
    )
}

export default App;