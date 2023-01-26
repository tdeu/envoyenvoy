import React, {useState, useEffect, useRef} from 'react';
import Navbar from '../../components/Navbar/Navbar'
import './About.css'
import image  from '../../assets/images/aboutimg.jpeg'
import AOS from 'aos'
import 'aos/dist/aos'
import 'aos/dist/aos.css'
const About = ({setindex,selectedLanguage}) => {
    useEffect(()=>{
        AOS.init({duration:2000});
    },[]);
  return (
      <>
       <Navbar setindex={setindex} selectedLanguage={selectedLanguage}/>
 <AboutPage selectedLanguage={selectedLanguage}/>

      </>


  )
}

function AboutPage({selectedLanguage}){
    var contents = [
        [
            "About Envoy",
            "Envoy was born and raised in Abidjan, Côte d'Ivoire. We leverage the latest technologies in order to facilitate the transport of goods between commerces and their clients. Envoy does not only send merchandises from point A to B or C, it makes the whole delivery journey as easy as 1 2 3. "

        ],
        [
            "A propos d'Envoy",
            "Envoy Tech exploite les dernières technologies afin de faciliter d'échange de marchandises entre les commerces et leurs clients. L'application n'a non seulement pour but de permettre la livraison de marchandises, mais de faciliter le processus de livraison dans son ensemble. "
        ],
        [
            "A propos d'Envoy",
            "Envoy Tech exploite les dernières technologies afin de faciliter d'échange de marchandises entre les commerces et leurs clients. L'application n'a non seulement pour but de permettre la livraison de marchandises, mais de faciliter le processus de livraison dans son ensemble. "
        ]
    
    
    
    ]
    return(
        <div className="about" >
        <div className="container">
            <div className="content">
                <div className="section_one" data-aos="fade-right">
                <h1>{contents[selectedLanguage][0]}</h1>
                <p>
                {contents[selectedLanguage][1]}
            </p>
                </div>
                <div className="section_two" data-aos="fade-left">
                    <div className="image">
                    <img src={image} alt="" />
                    </div>
           
                </div>
            </div>
        </div>
    </div>
    )
}

export default About