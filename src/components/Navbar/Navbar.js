import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import menu from '../../assets/images/menu.svg'
import down from '../../assets/images/down.svg'
const Navbar = ({setindex,selectedLanguage}) => {
    const [opened,setOpended] = useState(false);
    const [dropdown,setdropdown] = useState(false);
   ;

    var menuitems = [
        {"name" : "🏴󠁧󠁢󠁥󠁮󠁧󠁿 English", "language":"english"},
        {"name" : "🇫🇷 French", "language":"french"},
        {"name" : "🇸🇦 Arabic", "language":"arabic"}
    ]
    var contents = [
        {"home":"Home","service":"Service","become":"Become an ENVOYeur","about":"About us","contact":"Contact","dowload":"Download Now"},
        {"home":"Accueil","service":"Service","become":"Devenez ENVOYeur","about":"A propos de nous","contact":"Contact","dowload":"Téléchargez Maintenant"},
        {"home":"الصفحة الرئيسية","service":"الخدمات","become":"فرص عمل","about":"من نحن","contact":"تواصل معنا","dowload":"حمّل الآن"},


    ]
 
  return (


      
    <div className="navbar">
      {opened? <div className="overlay" onClick={()=>{
                                setOpended(!opened);
                            }}>

        </div>: <div/>}  
        <div className="container">
            <div className="content">
                <div className="section_one">
                    <div className="logo">
                    <img src={logo} alt="" width={150}/>
                    </div>
                   
                </div>
                <div className="section_two">
                        <ul className= {!opened ? ' opened':'menu'} >
                            <Link to={"/"} onClick={()=>{
                                setOpended(!opened);
                            }}>{contents[selectedLanguage].home}</Link>
                            <a href="#buis" onClick={()=>{
                                setOpended(!opened);
                            }}>{contents[selectedLanguage].service}</a>
                            <Link to={"/become-a-racer"} onClick={()=>{
                                setOpended(!opened);
                            }}>{contents[selectedLanguage].become}</Link>
                            <Link to={"/about"} onClick={()=>{
                                setOpended(!opened);
                            }}>{contents[selectedLanguage].about}</Link>
                            <Link to={"/"} onClick={()=>{
                                setOpended(!opened);
                            }}>{contents[selectedLanguage].contact}</Link>
                            <Link onClick={()=>{
                                setdropdown(!dropdown);
                            }}>
                            {menuitems[selectedLanguage].name}
                            <img src={down} alt="" className='down'/>
                           
                           {
                               dropdown?<div className="dropdown">
                           
                               <ul>

                                {
                                    menuitems.map((item,index)=>{
                                        return(
                            <div className="droptile" onClick={()=>{
                                setindex(index);
                            }}>
                              { item.name}
                               </div>
                                        )
                                    })
                                }
                               
                              
                               </ul>
                           </div>: <div/>
                           }
                            
                            </Link>
                         
                            
                            <div className="btn mobile">
                            <button>{contents[selectedLanguage].dowload}</button>
                        </div>
                        </ul>
                        <div className="btn desktop">
                            <button>{contents[selectedLanguage].dowload}</button>
                        </div>
                        <div className="hamburger" onClick={()=>{
                                setOpended(!opened);
                        }}>
                                <img src={menu} alt="" />
                        </div>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar