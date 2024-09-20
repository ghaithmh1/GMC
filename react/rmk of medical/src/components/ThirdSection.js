import React from 'react';
import './App.css';

const ThirdSection = () => {
    return (
        <section className="third_section">
            <div className="division1_third_section">
                <img src="./icons/icon-patients.svg" alt="icon-patients" />
                <h1 className="third_section_h1">For patients</h1>
                <p className="third_section_p1">
                    Find a doctor, book a visit and solve any health-related doubt
                </p>
                <select className="third_section_select">
                    <option value="Choose country">Choose country</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Czech">Czech</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Peru">Peru</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                </select>
            </div>
            <div className="division2_third_section">
                <img src="./icons/icon-doctors.svg" alt="icon-doctors" />
                <h1 className="third_section_h1">For doctors</h1>
                <p className="third_section_p1">
                    Save time managing visits and cut no-shows by half
                </p>
                <select className="third_section_select1">
                    <option value="Choose country">Choose country</option>
                    <option value="Argentina">Argentina</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Chile">Chile</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Czech">Czech</option>
                    <option value="Germany">Germany</option>
                    <option value="Italy">Italy</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Peru">Peru</option>
                    <option value="Poland">Poland</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                </select>
            </div>
            <div className="division3_third_section">
                <img src="./icons/icon-clinics.svg" alt="icon-clinics" />
                <h1 className="third_section_h1">For clinics</h1>
                <p className="third_section_p1">
                    Deliver an exceptional patient experience in your clinic
                </p>
                <select className="division3_third_select2">
                    <option value="Choose country">2 to 20 specialists</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Czech">Czech</option>
                    <option value="Italy">Italy</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Poland">Poland</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                </select>
                <select className="division3_third_select2">
                    <option value="Choose country">More than 20 specialists</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Czech">Czech</option>
                    <option value="Italy">Italy</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Poland">Poland</option>
                    <option value="Spain">Spain</option>
                    <option value="Turkey">Turkey</option>
                </select>
            </div>
        </section>
    );
}

export default ThirdSection;
