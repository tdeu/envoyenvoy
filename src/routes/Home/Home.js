import React, { useEffect } from "react";
import "./HomeStyle.css";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import app_home from "../../assets/images/app_home.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Footer from "../../components/Footer/Footer";
import facebook_logo from "./../../assets/images/facebook_icon.svg";
import instagram_logo from "./../../assets/images/instagram_icon.svg";
import twitter_logo from "./../../assets/images/twitter_icon.svg";
import AOS from 'aos'
import 'aos/dist/aos'
import 'aos/dist/aos.css'

const Home = ({setindex,selectedLanguage}) => {

  useEffect(()=>{
      AOS.init({duration:2000});
  },[]);
  return (
    <>
      <Navbar setindex={setindex} selectedLanguage={selectedLanguage}/>
      <Hero setindex={setindex} selectedLanguage={selectedLanguage}/>
      <Business selectedLanguage={selectedLanguage}/>
      <WhyEnvoy selectedLanguage={selectedLanguage} />
      <Testimonials />
      <Footer  selectedLanguage={selectedLanguage} />
    </>
  );
};

function Business({selectedLanguage}) {

  var contents = [
    {"h1":"Welcome to Envoy !", "fname":"First Name", "lname": "Last Name", "email":"Email","num":"Phone Number", "mess":"Message"},
    {"h1":"Vous désirez collaborer avec Envoy ? Ecrivez-nous !", "fname":"Prénom", "lname": "Nom de Famille", "email":"Adresse E-mail","num":"Numéro de téléphone", "mess":"Message"},

    {"h1":"إستعمل خدمات ENVOY", "fname":"الإسم", "lname": "الإسم العائلي", "email":"الإلكتروني","num":"رقم الهاتف", "mess":"رسالة"},


]
  return (
    <div className="business" data-aos="flip-left" id="buis">
      <div className="container">
        <div className="content">
          <div className="card">
            <h3>{contents[selectedLanguage].h1}</h3>
            <form action="" className="form_fields">
              <div className="first_name_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].fname}/>
              </div>
              <div className="last_name_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].lname} />
              </div>
              <div className="email_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].email} />
              </div>
              <div className="phone_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].num}  />
              </div>
              <div className="message_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].mess} />
              </div>
              <div className="button_section">
                <div className="btn">
                  <button className="outlineButton imgbtn">Send Now</button>
                </div>
              </div>
              <div className="social_icons">
                <div className="social_site">
                  <a href="">
                    <img src={facebook_logo} alt="Facebook" />
                  </a>
                </div>
                <div className="social_site">
                  <a href="/" target="_blank">
                    <img src={instagram_logo} alt="Instagram" />
                  </a>
                </div>
                <div className="social_site">
                  <a href="/" target="_blank">
                    <img src={twitter_logo} alt="Twitter" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyEnvoy({selectedLanguage}) {
  var heading = [
    "Why Envoy?",
    "Pourquoi choisir Envoy ?",
    "لماذا ENVOY؟"
  ]
  var contents = [
    [
     [ "Fixed and competitive delivery fees",
      "The delivery fee you see is the delivery fee you pay. Envoy uses a competitive and distance-based fixed algorithm. "],
      [
        "Simple and smart interface",
        "Envoy is made up of numerous smart features that will decrease the time you spend inputting all sort of details into the application."
      ],
      [
        "Keep your customers happy",
        "Leveraging some of the application smart features and bound to strict SLAs, our deliverymen will keep your customers happy."
      ],
      [
        "Built for your business needs",
        "Plan up to 50 deliveries to be processed now or later, save hours of delivery management work and envoy first class customer support. "
      ],
      [
        "Smooth payment process",
        "Need help to settle transactions with your client? Envoy's got you covered."
      ]
    ],
    [
      [
       "Frais de livraison fixes et compétitifs",
        "Les coûts de livraison sont calculés selon la distance parcourue indépendemment des heures de pointes."],
      [
         "Application simple et intelligente ",
         "Envoy propose une série de fonctionnalités qui ont pour but de réduire le temps que vous passez à planifier vos commandes."
       ],
       [
         
         "Améliorez la satisfaction de vos clients",
         "Leveraging some of the application smart features and bound to strict SLAs, our deliverymen will keep your customers happy."
       ],
       [
         "Un service personnalisé",
         "Envoy s'adapte aux exigences de votre activité. Planifiez jusqu'à 50 livraisons aux jours et heures qui vous conviennent. "
       ],
       [
         "Processus de règlement facile",
         "Besoin d'aide pour régler le coût des marchandises transportées? Envoy vous fournit l'assistance nécessaire"
       ]
     ],
     [
      ["أسعار خدماتنا ثابتة ومنافسة",
       "تم برمجة تطبيق ENVOY للقيام بعمليات حسابية تضمن للمستهلك أقل تكلفة عبر إيجاد أسرع و أقصر طريق لعامل التوصيل."],
     [
        "تطبيقنا سريع و سهل الإستخدام",
        "تم الأخذ بعين الإعتبار ضرورة تسهيل إستعمال التطبيق، حيث تم دمج العديد من المواصفات الذكية التي تسمح للمستخدم بالقيام بأي عملية مرادة من دون أي تعقيدات وبأقل وقت ممكن."
      ],
      [
        
        "سعادة زبائننا هدفنا الأول",
        " التطبيق أيضاً يتضمن خاصيات مميزة تمنح عامل التوصيل أساليب تواصل سهلة للقيام بالمهمة من دون الرجوع الدائم للزبون"
      ],
      [
        "خيارات عديدة لجميع احتياجاتكم",
        "بإمكانك من خلال إستخدام ENVOY بالقيام بخمسين عملية توصيل بالوقت نفسه لكي يتم توصيلها حالياً أو جدولتها لوقت لاحق مما يوفر عليك ساعات من وقتك الثمين."
      ],
      [
        "سهولة الدفع",
        "يتخلل التطبيق أيضاً وسائل دفع مختلفة لتسهيل العمليات بين جميع الأطراف."
      ]
    ],

  ]
  return (
    <div className="why_envoy" data-aos="fade-up">
      <div className="container">
        <div className="content">
          <h3>{heading[selectedLanguage]}</h3>
          <br />
          <br />

          <div className="feature">
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                    {contents[selectedLanguage][0][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                  {contents[selectedLanguage][0][1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                  {contents[selectedLanguage][1][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                 { contents[selectedLanguage][1][1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                  {contents[selectedLanguage][2][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                  {contents[selectedLanguage][2][1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                  {contents[selectedLanguage][3][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                  {contents[selectedLanguage][3][1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                    {contents[selectedLanguage][0][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                  {contents[selectedLanguage][0][1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                  {contents[selectedLanguage][1][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                 { contents[selectedLanguage][1][1]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="feature">
            <div className="feature_container">
            
              <div className="feature_text">
                <div className="feature_title">
                  <h2>
                  {contents[selectedLanguage][3][0]}
                  </h2>
                </div>
                <div className="feature_description">
                  <p>
                  {contents[selectedLanguage][3][1]}
                  </p>
                </div>
              </div>
            </div>
      
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonyCard({ text, name, profile }) {
  return (
    <div className="card" data-aos="fade-right">
      <div className="foreground">
        <p>{text}</p>

        <div className="profile">
          <div className="profile_circle">
            {/*<img src={profile} alt="" style={{width:50}}/> We need to display the image here*/}
          </div>
          <div className="profile_name">{name}</div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
function Testimonials() {
  const testimonies = [
    {
      user_image: "",
      username: "Ibrahim Saeed",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt quod sit odio. Vero odio dicta necessitatibus. Dolorem nulla, in quidem ratione ad, odit fugiat, voluptatibus eligendi atque dignissimos numquam!",
    },
    {
      user_image: "",
      username: "Saviour Nyame",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt quod sit odio. Vero odio dicta necessitatibus. Dolorem nulla, in quidem ratione ad, odit fugiat, voluptatibus eligendi atque dignissimos numquam!",
    },
    {
      user_image: "",
      username: "Ibrahim Saeed",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt quod sit odio. Vero odio dicta necessitatibus. Dolorem nulla, in quidem ratione ad, odit fugiat, voluptatibus eligendi atque dignissimos numquam!",
    },
    {
      user_image: "",
      username: "Saviour Nyame",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis nesciunt quod sit odio. Vero odio dicta necessitatibus. Dolorem nulla, in quidem ratione ad, odit fugiat, voluptatibus eligendi atque dignissimos numquam!",
    },
  ];
  return (
    <div className="testimonials">
      <div className="container">
        <div className="content">
          <h3>They trust us</h3>
        </div>
        <div className="slider">
          <Swiper
            // grabCursor={true}
            modules={[Pagination]}
            loop={true}
            className="myswiper"
            slidesPerView={3}
            autoplay={{ delay: 2000 }}
            pagination={{ dynamicBullets: true }}
            spaceBetween={50}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              680: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {testimonies.map((testimony, index) => (
              <SwiperSlide>
                <div id={index}>
                  <TestimonyCard
                    text={testimony.message}
                    name={testimony.username}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
