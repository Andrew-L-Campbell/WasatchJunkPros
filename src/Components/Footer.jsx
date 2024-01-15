import React from "react";
import '../Styling/FooterStyle.scss'

const Footer = () => {

    return (
        <div className="footer-container">
            <div className="footer">
                <div className="section">
                    <img src={"wasatchJunkProsLogo.png"} alt="Logo" className='logo' width="100px"/>

                </div>
                <div className="section">
                    <h1>
                        Learn More
                    </h1>
                    <h2>
                        Items We Take <br />
                    </h2>
                </div>
                <div className="section">
                    <h1>
                        Service Areas
                    </h1>
                    <h2>
                        Utah County <br />
                        Salt Lake County
                    </h2>
                </div>
                <div className="section">
                    <h1>
                        Hours of Operation
                    </h1>
                    <h2>
                        Monday - Friday:     8AM - 8PM <br />
                        Saturday:            8AM - 5PM <br />
                        Sunday:              Closed
                    </h2>
                </div>
            </div>
        </div>
    )
}
export default Footer;