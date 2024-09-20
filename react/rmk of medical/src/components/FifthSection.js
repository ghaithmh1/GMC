import React from 'react';
import './App.css';

const FifthSection = () => {
    return (
        <section className="fifth_section">
            <div className="division1_fifth_section">
                <h1 className="division1_fifth_section_h1">The world's biggest healthcare platform</h1>
                <p className="division1_fifth_section_p1">
                    We work from 9 offices all over the world, bringing Docplanner Group
                    to life in 13 countries.
                </p>
                <img className="division1_logocropped" src="./icons/logocropped.png" alt="logocropped" />
            </div>
            <div className="division2_fifth_section">
                <div className="sub1">
                    <div className="sub1_1">
                        <img className="sub1_1_logo" src="./icons/flag.png" alt="flag" />
                        <h1 className="sub1_1_h1">Leader in 13 countries</h1>
                        <p className="sub1_1_p1">
                            Poland, Brazil, Mexico, Spain, Italy, Germany, Turkey, Colombia,
                            Czech Republic, Portugal, Argentina, Peru and Chile
                        </p>
                    </div>
                    <div className="sub1_1">
                        <img className="sub1_1_logo" src="./icons/patients.png" alt="patients" />
                        <h1 className="sub1_1_h1">90,000,000 patients</h1>
                        <p className="sub1_1_p1">visit our websites each month</p>
                    </div>
                </div>
                <div>
                    <div className="sub1_1">
                        <img className="sub1_1_logo" src="./icons/visits.png" alt="visits" />
                        <h1 className="sub1_1_h1">15,000,000 appointments</h1>
                        <p className="sub1_1_p1">booked last month</p>
                    </div>
                    <div className="sub1_1">
                        <img className="sub1_1_logo" src="./icons/doctors.png" alt="doctors" />
                        <h1 className="sub1_1_h1">
                            210,000 <br />
                            active doctors
                        </h1>
                        <p className="sub1_1_p1">trust our solutions</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FifthSection;
