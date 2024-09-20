import React from 'react';
import './App.css'; // Make sure the path to your CSS is correct

const EighthSection = () => {
  return (
    <section className="eighth_section">
      <div className="division1_eighth_section">
        <h1 className="division1_eighth_section_h1">
          Sounds interesting? Join us now!
        </h1>
        <button className="division1_eighth_section_btn">
          SEE ALL CURRENT OPENINGS
        </button>
      </div>
      <div className="division2_eighth_section">
        <div className="sub1_division2_eighth_section">
          <p className="sub1_division2_eighth_section_p">
            We are leaders in 13 countries: <span className="span1_division2_eighth_section_p">Poland</span>,
            <span className="span1_division2_eighth_section_p">Turkey</span>, <span className="span1_division2_eighth_section_p">Spain</span>,
            <span className="span1_division2_eighth_section_p">Italy</span>, <span className="span1_division2_eighth_section_p">Germany</span>,
            <span className="span1_division2_eighth_section_p">Czech Republic</span>, <span className="span1_division2_eighth_section_p">Portugal</span>,
            <span className="span1_division2_eighth_section_p">Mexico</span>, <span className="span1_division2_eighth_section_p">Colombia</span>,
            <span className="span1_division2_eighth_section_p">Brazil</span>, <span className="span1_division2_eighth_section_p">Argentina</span>,
            <span className="span1_division2_eighth_section_p">Peru</span> and <span className="span1_division2_eighth_section_p">Chile</span>
          </p>
          <p>
            This site uses cookies to deliver services in accordance with this Privacy Policy. 
            You can specify the conditions for storing or accessing cookies on your browser. 
            www.docplanner.com © 2022
          </p>
        </div>
      </div>
    </section>
  );
}

export default EighthSection;
