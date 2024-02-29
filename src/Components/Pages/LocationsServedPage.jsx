import React from "react";
import '../../Styling/LocationServedStyle.scss'

const LocationsServedPage = () => {
    const saltLakeCounty = ['Bluffdale', 'Cottonwood Heights', 'Draper', 'Herriman', 'Holiday', 'Kearns', 'Taylorsville', 'Magna', 'Midvale', 'Millcreek', 'Murray', 'Riverton',
        'Salt Lake', 'Sandy', 'South Salt Lake', 'South Jordan', 'West Jordan', 'West Valley', 'White City']
    const utahCounty = ['Alpine', 'Cedar Hills', 'American Fork', 'Eagle Mountain', 'Lehi', 'Lindon', 'Pleasant Grove', 'Provo', 'Orem', 'Saratoga Springs', 'Springville', 'Vinyard']

    return (
        <div className="location-container">
            <div className="location-header">
                <div className="header-container">
                    <h1>Junk Removal</h1>
                    <h2>Locations We Serve</h2>
                </div>
                <div className="columns">
                    <div className="salt-container">
                        <h2>Salt Lake County:</h2>
                        {saltLakeCounty.map(name => (
                            <h3 key={name}>{name}</h3>
                        ))}
                    </div>
                    <div className="utah-container">
                        <h2>Utah County:</h2>
                        {utahCounty.map(name => (
                            <h3 key={name}>{name}</h3>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LocationsServedPage;
