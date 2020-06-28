import React from 'react';
import './styles.css';
import { GitHub, Linkedin, Phone, Mail } from 'react-feather';

function Profile() {
    return (
        <div className="Container ContainerProfile">
            <div className="Profile">
                <h3>ABOUT ME</h3>
                <div className="TitleBreak" />
                A tech-nerd who loves to compete, improve, learn and solve logic problems, with a huge passion to
                work in group and grow together. Currently working at BASF SA Guaratinguetá as a Fullstack Developer, aiming
                to become a great programmer and work in international projects and teams.
            </div>
            <div className="Contact">
                <h3>CONTACT</h3>
                <div className="TitleBreak" />
                <ul>
                    <li><Phone className="ContactIcon" /><p>+55 12 98114-5270</p></li>
                    <li><Mail className="ContactIcon" /><p>frpm1001@gmail.com</p></li>
                    <li><GitHub className="ContactIcon" /><p>/fernandorpm</p></li>
                    <li><Linkedin className="ContactIcon" /><p>/fernandorpm</p></li>
                </ul>
            </div>
            <div className="Languages">
                <h3>LANGUAGES</h3>
                <div className="TitleBreak" />
                <ul>
                    <li>
                        Portuguese (Brazil)
                        <div className="SkillLevel">
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                        </div>
                    </li>
                    <li>
                        English
                        <div className="SkillLevel">
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                        </div>

                    </li>
                    <li>
                        French
                        <div className="SkillLevel">
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillFalse" />
                            <div className="SkillFalse" />
                        </div>
                    </li>
                    <li>
                        Spanish
                        <div className="SkillLevel">
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillTrue" />
                            <div className="SkillFalse" />
                            <div className="SkillFalse" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="Skills">
                <h3>SKILLS</h3>
                <div className="TitleBreak" />
                <div className="SkillList">
                    <ul>
                        <li>
                            Javascript
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            HTML & CSS
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            UX Design
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            React
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                        <li>
                            React Native
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                        <li>
                            Flutter
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                        <li>
                            VueJS
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            Python
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            Automation & Scraping
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                        <li>
                            Java
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                        <li>
                            C#
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                        <li>
                            Microsoft SQL Server
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            MongoDB
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            MySQL
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                            </div>
                        </li>
                        <li>
                            Git
                        <div className="SkillLevel">
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillTrue" />
                                <div className="SkillFalse" />
                                <div className="SkillFalse" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

}


export default Profile;