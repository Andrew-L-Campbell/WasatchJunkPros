import React, { useState } from "react";
import '../../Styling/AccordionStyle.scss'

const AccordionQuestion = ({ question , answer }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="accordion-item">
        <div className="accordion-question" onClick={toggleAccordion}>
          {question}
          {isOpen ? " ▲" : " ▼"}
        </div>
        {isOpen && <div className="accordion-answer">{answer}</div>}
      </div>
    );
  };
  

export default AccordionQuestion;