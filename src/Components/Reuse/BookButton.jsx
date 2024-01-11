import React from "react";
import { useNavigate } from "react-router-dom";
import '../../Styling/Buttons.scss';


const BookButton = () => {

    const navigate = useNavigate();

    const buttonClick = () => {
        navigate('/book-now');
    }

    return (
        <button class="book-button" role="button" onClick={buttonClick}>Book Now</button>
    )
}
export default BookButton;