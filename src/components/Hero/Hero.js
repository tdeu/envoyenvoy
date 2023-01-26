import React, { useEffect } from "react";
import "./HeroStyle.css";
import phone from "../../assets/images/phone.png";
import AOS from 'aos'
import 'aos/dist/aos'
import 'aos/dist/aos.css'

const Hero = ({setindex,selectedLanguage}) => {
  var contents = [
    {"h1":"Welcome to Envoy !","p":"ENVOY is the last-mile delivery service your business needs. Say goodbye to complex delivery process, endless phone calls and frustrated customers. With ENVOY you rely on a solid technology that lets you focus on your core business, grow your revenues and your customer satisfaction."},
    {"h1":"Bienvenue sur Envoy !","p":"Envoy est le service de livraison de proximité dont votre commerce a besoin. Appuyez-vous sur une technologie avancée et dites au-revoir aux processus de livraison complexes. Améliorez votre satisfaction-client, focalisez-vous sur les aspects de votre business qui comptent vraiment et augmentez vos revenus."},

    {"h1":"مرحبا بك في ENVOY","p":" الميل الأخير التي يحتاجها عملك. قل وداعًا لعملية التسليم المعقدة والمكالمات الهاتفية التي لا تنتهي والعملاء المحبطين. مع ENVOY ، أنت تعتمد على تقنية قوية تتيح لك التركيز على عملك الأساسي ، وزيادة إيراداتك ورضا عملائك."},


]
  useEffect(()=>{
    AOS.init({duration:2000});
},[]);

var spl = contents[selectedLanguage].h1.split(" ");
  return (
    <div className="hero ">
      <div className="container">
        <div className="content">
          <div className="section_one" data-aos="fade-right">
            <h1>{spl[0]+ " "+spl[1]+" "}</h1>
            <br />
            <h1>{spl[2]}</h1>
            <p>
             {contents[selectedLanguage].p}
            </p>
            <div className="btn">
              <button className="outlineButton">Download Now</button>
            </div>
          </div>
          <div className="section_two"data-aos="fade-left">
            <img src={phone} alt="" />
            <div className="btn">
              <button className="outlineButton imgbtn">Download Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
