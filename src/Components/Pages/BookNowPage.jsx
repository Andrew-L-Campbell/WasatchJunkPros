import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import '../../Styling/BookNowStyle.scss'

const initialFormData = {
    firstName: '',
    lastName: '',
    email: '',
    date: new Date(),
    time: '',
    phoneNumber: '',
    description: ''
};

const BookNowPage = () => {

    const [validationErrors, setValidationErrors] = useState({});
    const initialValidationErrors = {};

    const validateForm = () => {
        let errors = {};
        let isValid = true;
    
        if (!formData.firstName.trim()) errors.firstName = "First Name is required";
        if (!formData.lastName.trim()) errors.lastName = "Last Name is required";
        if (!formData.email.trim()) errors.email = "Email is required";
        if (!formData.time.trim()) errors.time = "Time is required";
        if (!formData.phoneNumber.trim()) errors.phoneNumber = "Phone Number is required";
        if (!formData.description.trim()) errors.description = "Description is required";
    
        setValidationErrors(errors);
        isValid = Object.keys(errors).length === 0;
        return isValid;
    };
    


    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (date) => {
        setFormData({ ...formData, date });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isFormValid = validateForm();
        if (!isFormValid) return;
    
        fetch('http://localhost:3001/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            alert('Appointment scheduled successfully!');
            setFormData(initialFormData); // Reset form data after successful submission
            setValidationErrors(initialValidationErrors);
        })
        .catch(error => {
            console.error('Fetch error:', error.message);
            alert('Failed to schedule appointment. Please try again.');
        });
    };
    
       


    return (
        <div className="contact-us-container">
            <div className="title">
                <h1>Book Now</h1>
                <h2>
                    Give us a call at: 801-707-9107<br/>Or Schedule online below!
                </h2>

            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} value={formData.firstName}/>
                {validationErrors.firstName && <div className="error">{validationErrors.firstName}</div>}
                <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} value={formData.lastName}/>
                {validationErrors.lastName && <div className="error">{validationErrors.lastName}</div>}
                <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={formData.phoneNumber} />
                {validationErrors.phoneNumber && <div className="error">{validationErrors.phoneNumber}</div>}
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email}/>
                {validationErrors.email && <div className="error">{validationErrors.email}</div>}
                <DatePicker selected={formData.date} onChange={handleDateChange}/>
                {validationErrors.firstName && <div className="error">{validationErrors.firstName}</div>}
                <input type="time" name="time" onChange={handleChange} value={formData.time}/>
                {validationErrors.time && <div className="error">{validationErrors.time}</div>}
                <textarea name="description" placeholder="Description of Items You Need Removed" onChange={handleChange} value={formData.description}cols="30" rows="10"></textarea>
                {validationErrors.description && <div className="error">{validationErrors.description}</div>}
                <button className="submit" type="submit">Schedule Appointment</button>
            </form>
            <div className="title">
                <p>You will recieve a phone call from Wasatch Junk Pros to confirm the appointment.</p>
            </div>

        </div>
    );
}
export default BookNowPage;