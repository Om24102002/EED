import React, { Fragment } from 'react'
import "./contactUs.css"

const contactUs = () => {
    return (
        <Fragment>
            <div className='contactUs'>
                <div className="title">
                    <h2>Get in Touch</h2>
                </div>
                <div className="box">

                    {/* Form */}
                    <div className="contact form">
                        <h3>Send a Message</h3>
                        <form action="https://formspree.io/f/xpzgzvpr" method='POST'>
                            <div className="formBox">
                                <div className="row50">
                                    <div className="inputBox">
                                        <span>First Name</span>
                                        <input type="text" name='First-Name' placeholder='Leonardo' autoComplete='off' required />
                                    </div>
                                    <div className="inputBox">
                                        <span>Last Name</span>
                                        <input type="text" name='Last-Name' placeholder='Dicaprio' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="row50">
                                    <div className="inputBox">
                                        <span>Email</span>
                                        <input type="email" name='Email' placeholder='someone@something.com' autoComplete='off' required />
                                    </div>
                                    <div className="inputBox">
                                        <span>Mobile</span>
                                        <input type="text" name='Phone-Number' placeholder='+91 123 123 1234' autoComplete='off' required />
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBox">
                                        <span>Message</span>
                                        <textarea name='Message' placeholder='Write your message here...' autoComplete='off' required></textarea>
                                    </div>
                                </div>
                                <div className="row100">
                                    <div className="inputBox">
                                        <input type="submit" value="send" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* info Box */}
                    <div className="contact info">
                        <h3>Contact Info</h3>
                        <div className="infoBox">
                            <div>
                                <span><ion-icon name="location"></ion-icon></span>
                                <p>Veermata Jijabai Technological Institute, Mumbai <br /> INDIA</p>
                            </div>
                            <div>
                                <span><ion-icon name="mail"></ion-icon></span>
                                <a href="mailto:someone@email.com">someone@email.com</a>
                            </div>
                            <div>
                                <span><ion-icon name="call"></ion-icon></span>
                                <a href="tel:+911231231234">+91 123 123 1234</a>
                            </div>
                            <ul className="sci">
                                <li><a href="https://www.facebook.com/" target='blank'><ion-icon name="logo-facebook"></ion-icon></a></li>
                                <li><a href="https://twitter.com/" target='blank'><ion-icon name="logo-twitter"></ion-icon></a></li>
                                <li><a href="https://www.instagram.com/" target='blank'><ion-icon name="logo-linkedin"></ion-icon></a></li>
                                <li><a href="https://www.instagram.com/" target='blank'><ion-icon name="logo-instagram"></ion-icon></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="contact map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.9432282763996!2d72.85354627438039!3d19.02222315366019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4972d21%3A0x2c50185364aca4c1!2sVeermata%20Jijabai%20Technological%20Institute%20VJTI!5e0!3m2!1sen!2sin!4v1689433549113!5m2!1sen!2sin"
                            title="Google Maps"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                </div>
            </div>
        </Fragment>

    )
}

export default contactUs
