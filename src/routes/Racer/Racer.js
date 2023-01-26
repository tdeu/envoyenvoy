import React, {useState, useEffect, useRef} from 'react';

import Navbar from '../../components/Navbar/Navbar'
import './Racer.css'
import AOS from 'aos'
import 'aos/dist/aos'
import 'aos/dist/aos.css'
import down from "../../assets/images/down.svg"

const Racer = ({setindex,selectedLanguage}) => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();
  useEffect(()=>{
    AOS.init({duration:2000});
},[]);

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  var contentstop = [
   ["Become an ENVOYer","You have a scooter or a bike and are looking for a new source of income? Please fill in your details and our team will get back to you."],
   ["Devenez ENVOYeur","Vous disposez d'un scooter et êtes à la recherche d'une nouvelle source de revenu ? Il vous suffit de remplir le formulaire suivant afin qu'un membre de notre équipe vous contacte."],
   ["Devenez ENVOYeur","Vous disposez d'un scooter et êtes à la recherche d'une nouvelle source de revenu ? Il vous suffit de remplir le formulaire suivant afin qu'un membre de notre équipe vous contacte."]




]


  return (
    
    <>
     <Navbar setindex={setindex} selectedLanguage={selectedLanguage}/>
      <div className="racer" data-aos="fade-up">
        <div className="container">
          
            <div className="content">
                <div className="top_section">
                <h1>
            {contentstop[selectedLanguage][0]}
          </h1>
          <p>
          {contentstop[selectedLanguage][1]}
            </p>
                </div>
                <Form selectedLanguage={selectedLanguage}/>
                
                
            </div>

        </div>
    </div>
    </>
  
  )
}

function Form({selectedLanguage}) {

   const [dropdown,setdropdown] = useState(false); 
   const [selected,setselected] = useState("select"); 
  var contents = [
    {"h1":"Personnal Information", "fname":"Name",  "email":"Email","num":"Phone Number"},
    {"h1":"Vos coordonnées", "fname":"Nom",  "email":"Adresse e-mail","num":"Numéro de téléphone"},
  
    {"h1":"Vos coordonnées", "fname":"Nom",  "email":"Adresse e-mail","num":"Numéro de téléphone"},
  
  
  ]
  var lis = ["select","Koumassi", "Yopougon"," Marcory", "Treichville"," Port-Bouët", "Cocody", "Adjamé", "Plateau", "Abobo", "Attécoubé", "Autre" ]
  return (
    <div className="business" data-aos="flip-left" >
     
        <div className="content">
          <div className="card">
            <h3>{contents[selectedLanguage].h1}</h3><br/><br/><br/>
            <form action="" className="form_fields">
              <div className="first_name_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].fname} />
              </div>
             
              <div className="email_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].email} />
              </div>
              <div className="phone_input inputbox">
                <input type="text" placeholder={contents[selectedLanguage].num} />
              </div>
              <div className="dropcont"  onClick={()=>{
                setdropdown(!dropdown);
              }}>
              <div className="dropdown">
                <p>{selected}</p>
                <img src={down} alt="" />

              </div>
            {dropdown ?<div className="dropMenu">
                <ul>
                {lis.map((item)=>{
                  return (
                    <li onClick={()=>{
                      setselected(item)
                    }}>{item}</li>
                  )
                })}</ul>
             </div>: <div/>}  
              </div>
             
              
              <div className="button_section">
                <div className="btn">
                  <button className="outlineButton imgbtn">Send Now</button>
                </div>
                
              </div>
      
            </form>
            
          </div>
      
      </div>
    </div>
  );
}
export default Racer