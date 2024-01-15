import React from "react";
import { useNavigate } from "react-router-dom";
import '../../Styling/ButtonsStyle.scss';


const BookButton = () => {

    const navigate = useNavigate();

    const buttonClick = () => {
        navigate('/book-now');
    }

    return (
        <button className="book-button" role="button" onClick={buttonClick}>Book Appointment</button>
    )
}
export default BookButton;