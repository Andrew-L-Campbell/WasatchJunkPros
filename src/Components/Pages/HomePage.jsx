import React from "react";
import '../../Styling/HomeStyle.scss'
import BookButton from "../Reuse/BookButton";
import HappyCustomerImage from "../../Images/HappyCustomer.jpg"; // Import the image here
import JunkImage from '../../Images/ServiceImg/General Cleanout.jpg'
import AccordionQuestion from "../Reuse/AccordionQuestion";

const HomePage = () => {
    return (
        <div className="home-container">
            <div className="headline-columns">
                <div className="headline">
                    <h1>Efficient and Affordable - Wasatch Junk Pros: Your Local Junk Removal Company</h1>
                    <h2>Clean Up with Ease: Choose Local Wasatch Junk Pros for Quick and Budget-Friendly Junk Removal Services</h2>
                    <BookButton />
                </div>
                <div className="headline-image">
                    <img src={HappyCustomerImage} alt="Happy Customer" />
                </div>
            </div>
            <div className="problem-solution">
                <div className="headline-columns">
                    <div className="headline-image">
                        <img src={JunkImage} alt="Happy Customer" />
                    </div>
                    <div className="headline">
                        <h1>Overwhelmed by Clutter </h1>
                        <h3>Clutter is a common yet overwhelming issue. Piles of unused items and
                            old furniture not only take up space but also create stress and disorganization in your daily life.
                        </h3>
                        <h3>The Clutter Challenge </h3>
                        <h3>
                            The daunting task of sorting, lifting, and disposing of junk adds to the frustration.
                            Imagine struggling to find things in a chaotic space or feeling embarrassed by the mess when guests arrive.
                        </h3>
                        <h2>Solution with Wasatch Junk Pros </h2>
                        <h3>
                            Wasatch Junk Pros offers a stress-free solution to this clutter chaos.
                            We handle all aspects of junk removal, ensuring a clean, organized space for you. Choose us for a hassle-free
                            way to reclaim your peace and space.
                        </h3>
                    </div>

                </div>
            </div>
            <div className="benefits-container">
                <h1 className="benefits-heading">
                    Why Choose Us?
                </h1>
                <div className="benefits">
                    <div>
                        <h1>
                            Safety and Health Improvements:
                        </h1>
                        <h2>
                            Excess clutter can pose safety risks, like tripping hazards or the accumulation of dust and allergens.
                            Junk removal services help mitigate these risks, contributing to a safer and healthier environment.
                        </h2>
                    </div>
                    <div>
                        <h1>
                            Space Clearing and Organization:
                        </h1>
                        <h2>
                            Removing unwanted items frees up space in homes, offices, or garages, allowing for better organization
                            and utilization of these areas. It transforms cluttered spaces into usable, functional areas.
                        </h2>
                    </div>
                    <div>
                        <h1>
                            Time and Energy Saving:
                        </h1>
                        <h2>
                            Junk removal can be a time-consuming and physically demanding task. Professional services save you the effort
                            and time you would otherwise spend sorting, lifting, hauling, and disposing of items.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="features-container">
                <h1 className="benefits-heading">Features of Wasatch junk Pros</h1>
                <div className="feature-columns">
                    <div className="set-1">
                        <ul className="checklist">
                            <li>
                                <span className="checkmark">&#10004;</span> <h2>Same Day Junk Removal Service: Providing same-day service for urgent removal needs.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span> <h2>Bulk Item Removal: Capability to handle large and bulky items.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span><h2>Recycling Services: Recycling a significant portion of collected junk.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span><h2>Donation of Reusable Items: Donating usable items to charities and non-profits.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span><h2>Professional Staff: Employing trained and professional staff for efficient service.</h2>
                            </li>
                        </ul>
                    </div>
                    <div className="set-2">
                        <ul className="checklist">
                            <li>
                                <span className="checkmark">&#10004;</span><h2>Customized Solutions: Tailoring services to meet specific needs and requirements.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span><h2>Debris and Waste Removal: Handling not just household junk but also construction debris and garden waste.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span><h2>Flexible Scheduling: Offering flexible timings to accommodate customers' schedules.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span> <h2>Clear Pricing Structure: Transparent and straightforward pricing with no hidden fees.</h2>
                            </li>
                            <li>
                                <span className="checkmark">&#10004;</span> <h2>Curbside Pickup: Offering convenient curbside pickup for easy junk disposal.</h2>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className="faq-container">
                <h1 className="benefits-heading">Common FAQs</h1>
                <div className="accordians">
                    <AccordionQuestion
                        question="What is Junk Removal?  "
                        answer="Junk removal is a service that helps clear out unwanted items from homes 
                        and businesses, like old furniture, appliances, and construction debris. It's ideal 
                        for decluttering, renovations, or moving. Customers schedule a pickup, and a team 
                        comes to haul the junk away."
                    />
                    <AccordionQuestion
                        question="What types of items can you remove?"
                        answer="We can take a wide range of items, including furniture, appliances, 
                        electronics, yard waste, and construction debris. However, there are restrictions 
                        on hazardous materials like chemicals, asbestos, and biological waste."
                    />
                    <AccordionQuestion
                        question="Do you offer recycling or donation services for the items you remove?"
                        answer="Yes, we prioritize eco-friendly practices by recycling eligible items and donating reusable goods to local charities."
                    />
                    <AccordionQuestion
                        question="What is the cost of junk removal?"
                        answer="Pricing is based on the volume of junk being removed, measured 
                        in truckloads or cubic feet and can have extra fees that are based on extra services like extra weight or extra distance. "
                    />
                    <AccordionQuestion
                        question="Do you offer commercial junk removal services?"
                        answer=" Yes, we offer services for both residential and commercial clients, handling office, retail, and other commercial waste efficiently."
                    />
                </div>
            </div>
            <div className="book-container">
                <div className="book-now">
                    <BookButton />
                </div>
            </div>


        </div>
    );
};
export default HomePage;
