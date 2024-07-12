import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faChartBar, faCopy, faMarker, faUserGear, faCoins } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    // Icons
    const faLaptopCodeIcon = <FontAwesomeIcon icon={faLaptopCode} />
    const faChartBarIcon = <FontAwesomeIcon icon={faChartBar} />
    const faCopyIcon = <FontAwesomeIcon icon={faCopy} />
    const faMarkerIcon = <FontAwesomeIcon icon={faMarker} />
    const faUserGearIcon = <FontAwesomeIcon icon={faUserGear} />
    const faCoinsIcon = <FontAwesomeIcon icon={faCoins} />
  return (
    <>
     <div id="services">
        <div className="container">
            <div className="title_headling">
                <h3>What's Services We Are Offering to Our Customers</h3>
                <p>We offer a comprehensive range of services designed to meet all your business needs, from marketing and consulting to technology solutions and beyond.</p>
            </div>
            <div className="service_wrapper">
                <div className="service_box">
                    <div className="service_icon blue_icon">{faLaptopCodeIcon}</div>
                    <h4 className="number">01</h4>
                    <div className="service_content">
                        <h5>Cloud Computing</h5>
                        <p>Cloud computing solutions provide scalable, cost-effective infrastructure and services.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div> 
                <div className="service_box">
                    <div className="service_icon">{faChartBarIcon}</div>
                    <h4 className="number">02</h4>
                    <div className="service_content">
                        <h5>Business Strategy</h5>
                        <p>We develop customized business strategies that drive growth, enhance competitiveness.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faCopyIcon}</div>
                    <h4 className="number">03</h4>
                    <div className="service_content">
                        <h5>Reports Analysis</h5>
                        <p>We offer detailed report analysis to provide valuable insights.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon">{faMarkerIcon}</div>
                    <h4 className="number">04</h4>
                    <div className="service_content">
                        <h5>Decision Maker</h5>
                        <p>Empowering you to be a decisive leader. Guiding strategic decisions with clarity and confidence.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon green_icon">{faUserGearIcon}</div>
                    <h4 className="number">05</h4>
                    <div className="service_content">
                        <h5>Customer Oriented</h5>
                        <p>We prioritize customer needs, delivering tailored solutions and exceptional service to enhance loyalty.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
                <div className="service_box">
                    <div className="service_icon blue_icon">{faCoinsIcon}</div>
                    <h4 className="number">06</h4>
                    <div className="service_content">
                        <h5>Solution Focused</h5>
                        <p>We focus on delivering practical solutions that address your challenges efficiently and effectively.</p>
                        <a href="/" className="read">Read more</a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
