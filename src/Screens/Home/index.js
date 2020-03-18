import React,{ Component } from 'react'
import $ from 'jquery'
import './home.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'
import cardimage from '../../Images/cardimage.svg'
import Client from '../../components/Client'


class Home extends Component{

    render() {
        return(
            <div id="site-wrapper">
            <Header />
                <div id="page-content">
                     <div className="banner-image">
                        <Slider /> 
                        <div className="section1">
                        <div className="card-section">
                                <img src={cardimage} className="cardimage" />
                            <div className="text-section">
                                <h3 className="card-hd">We Are</h3>
                                <hr className="line1"></hr>
                                <p className="card-text1">A design studio specialising in food,<br/>
                                beverage, recreation and entertainment<br/>
                                spaces  delivering a complete guest<br/>
                                experience through a multidisciplinary<br/>
                                approach.
                                </p>
                               <button type="button" className="btn3">Read more ></button>
                            </div>
                            </div>
                        </div>
                        <Client />
                    </div> 
                  
                </div>
            <Footer />
    </div>
        );
    }
}

export default Home;