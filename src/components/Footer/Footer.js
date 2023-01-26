import React from "react";
import "./FooterStyle.css";
import envoy_logo_square from "./../../assets/images/envoy_logo_square.png";
import facebook_logo from "./../../assets/images/facebook_icon.svg";
import instagram_logo from "./../../assets/images/instagram_icon.svg";
import twitter_logo from "./../../assets/images/twitter_icon.svg";
import appstore_badge from "./../../assets/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import playstore_badge from "./../../assets/images/google-play-badge.png";

export default function Footer({setindex,selectedLanguage}) {
  var contents = [
    
  [ 
    "Quick Links",
    "Home",
    "About Us",
    "Services",
    "Get a Quote",
    "Privacy Policy",
    "Helpful Links",
    "FAQ's",
    "Supports",
    "Chat",
    "Follow Us"],
    
    [ 
      "Quick Links",
      "Accueil",
    "A Propos de Nous",
    "Services",
    "Demandez un devis",
    "Politique de confidentialité",
    "Liens utiles",
    "FAQ's",
    "Supports",
    "Chat",
    "Liens utiles"],
    [ 
      "روابط متنوعة",
      "الصفحة الرئيسية",
    "من نحن",
    "الخدمات",
    "إحصل على سعر",
    "سياسة الخصوصية",
    "روابط مفيدة",
    "التعليمات",
    "Supports",
    "Chat",
    "Liens utiles"]



]
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer_content">
          <div className="footer_top">
            <div className="logo">
              <img src={envoy_logo_square} alt="Envoy logo" />
            </div>
            <div className="link_section">
              <h6>{contents[selectedLanguage][0]}</h6>
              <ul>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][1]}</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][2]}</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][3]}</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][4]}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="link_section">
              <h6>{contents[selectedLanguage][5]}</h6>
              <ul>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][6]}</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][7]}</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][8]}</span>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <span>{contents[selectedLanguage][9]}</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="link_section">
              <h6>{contents[selectedLanguage][10]}</h6>
              <div className="social_section">
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
              <div className="store_badges">
                <div className="playstore_badge">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={playstore_badge} alt="Google Play Badge" />
                  </a>
                </div>
                <div className="appstore_badge">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={appstore_badge} alt="AppStore Badge" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bottom">
            <div className="copyright">&copy; 2022 Envoy</div>
            <div className="legal">
              <span>All rights reserved.&nbsp;</span>
              <div className="terms">
                <a href="/">
                  <span>Terms & Conditions</span>
                </a>
                <span className="separator">&nbsp;&bull;&nbsp;</span>
                <a href="/">
                  <span>Privacy Policy</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
