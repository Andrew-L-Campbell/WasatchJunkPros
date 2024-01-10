import React from "react";
import '../../Styling/HomeStyle.scss'
import wasatch from '../../Images/wasatch.jpg'
import family from '../../Images/familyOwned.png'

const HomePage = () => {

    

    return (
        <div className="home-container">
            <div className="opening-container">
                <img src={wasatch} alt="wasatch" className="wasatch"/>
                <div className="opening-text-overlay">
                    <p>
                        Wasatch Junk Pros offers fast and affordable junk removal service. 
                    </p>
                </div>
                <div className="family">
                    <img src={family} alt="family"/>

                </div>
            </div>

        </div>
    );
};
export default HomePage;