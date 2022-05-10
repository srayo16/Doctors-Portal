import React from 'react';
import footImage from './../../assets/images/footer.png';

const Footer = () => {
    return (

        <div className='container mx-auto px-12' style={{ background: `url(${footImage})`, backgroundSize: 'cover' }}>
            <footer className="footer p-10 " >
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 ">
                <div>
                    <p>Copyright © 2022 - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;