import React from 'react'
import './footer.css'
import footermap from '../../Images/footermap.jpg'



const Footer = props=>(
    <div>
       <a href="https://www.google.com/maps/place/WDA/@12.965899,77.598168,15z/data=!4m5!3m4!1s0x0:0xd69b938b7d533c0d!8m2!3d12.965899!4d77.598168" target="_blank"><img src={footermap} className="map-image"/></a>
    <div className="footer">
        <div className="row row2">
            <div className="col-md-3 bangalore">
               <h3 className="footer-hd">CONTACT US</h3>
               <p>Bangalore: </p>
               <p>G7 Ground Floor,Cears Plaza,<br/>
               136 Residency Road<br/>
               Opp.Bangalore Club,<br/>
               Bangalore 560025,<br/>
               KA India.
               </p>
            </div>
            <div className="col-md-3 mumbai">
            <p>Mumbai: </p>
               <p>E2002,Raheja Vistas,<br/>
               Raheja Vihar,<br/>
               Chandivali,<br/>
               Mumbai 400072,<br/>
               MH India.
               </p>
            </div>
            <div className="col-md-3 phone">
            <p className="phone-text1">Phone: </p>
               <p className="phone-text2">+91 8041499315<br/>
               +91 9945747423<br/>
               +91 9743314444<br/>
               </p>
            </div>
            <div className="col-md-3 about">
            <h3 className="footer-hd2">ABOUT US</h3>
               <p className="about-text">A design studio specialising in food,<br/>
               beverage, recreation and entertainment<br/>
               spaces - delivering a complete guest<br/>
               experience through a multidisciplinary <br/>
               approach.
               </p>
            </div>
        </div>
        </div>
    </div>
);

export default Footer;



