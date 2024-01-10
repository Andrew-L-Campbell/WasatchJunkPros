import React from "react";
import '../../Styling/ServicesStyle.scss'


const ServicesPage = () => {
    const services = ['Residential', 'Commercial', 'Moving Cleanout', 'Apartment Cleanout', 'Appliance Removal', 'Attic Cleanout',
        'Bed Bug Removal', 'Cardboard Recycling', 'Carpet Removal', 'Concrete Removal', 'Construction Debris Removal', 'Disassembly', 'Electronics Recycling', 
        'Estate Cleanout', 'Fence Removal', 'Forclosure Cleanouts', 'Furniture Removal', 'Garage Cleanouts', 'General Cleanout', 'Hoarder Cleanouts', 'Hot Tub Removal',
        'Indoor Junk Removal', 'Playset Removal', 'Shed Removal & Demolition', 'Storage Unit Cleanout', 'Yard Debris', 'And More'
    ];
    const serviceItems = services.map(service => {
        // Convert the service name to the format used in your image file names
        const imageName = service + '.jpg'; 
        
        // Dynamically require the image
        let imageUrl;
        try {
            imageUrl = require(`../../Images/ServiceImg/${imageName}`);
        } catch (e) {
            console.error(`Failed to load image: ${imageName}`);
            imageUrl = ''; // Fallback image or leave blank
        }

        return (
            <div key={service} className="image-block">
                <img src={imageUrl} alt={service} className="images" loading="lazy"/>
                {service}
                
            </div>
        );
    });

    return (
        <div className="services-container">
            <h1>Services we offer:</h1>
            <div className="img-container">
                {serviceItems}
            </div>

        </div>
    );
};

export default ServicesPage;