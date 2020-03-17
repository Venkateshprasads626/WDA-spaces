import React, { Component } from 'react'
import './slider.css'
import bannerimage from '../../Images/bannerimage.svg'
import bannerimage2 from '../../Images/bannerimage2.svg'
import bannerimage3 from '../../Images/bannerimage3.svg'

class Slider extends Component{
    render() {
        return(
            <div className="slider">
               <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={bannerimage} className="bannerimage" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={bannerimage2} className="bannerimage" alt="..." />
                        </div>
                        <div class="carousel-item">
                        <img src={bannerimage3} className="bannerimage" alt="..." />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Slider;