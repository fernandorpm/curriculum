import React from 'react';
import './styles.css';

function Accomplishments() {

    return (
        <div className="Container ContainerAccomplishments">
            <div className="Accomplished">
                <h3>INOVATHON MAKERS X COVID19</h3>
                <div className="TitleBreak" />
                <h4 className="AccPosition">3rd place</h4>
                <h5 className="AccSub">MAY 2020</h5>
                    <ul>
                        <li>Software Engineer</li>
                        <li>UX Designer <span>(Mobile version)</span></li>
                        <li>Pitch Speaker</li>
                    </ul>
                    <p>We developed the <strong><a href="https://ajudae.now.sh/" target="_blank" rel="noopener noreferrer">Ajudaê</a></strong> web application under 5 days in this National Competition, a solution <strong>to mitigate the damage caused by this Pandemy</strong>, so we built <strong>an app that connects people to the Donation Points</strong> of their city, for either monetary or food donations or to know where to look for help. <br /><br />
                    This is personally my favorite project not only because our Team did a fantastic job, but because it is <strong>changing people's lives and allowing them to keep moving forward despites their challenges.</strong></p>
                    <p className="AccDescription">An Inovathon is a sprint-like event where the participants have to create a solution to solve a specific problem, in order to benefit the society, mitigate damages and so on</p>
            </div>
            <div className="Accomplished">
                <h3>1st FATEC HACKATHON by BASF SA</h3>
                <div className="TitleBreak" />
                <h4 className="AccPosition">1st place</h4>
                <h5 className="AccSub">SEPTEMBER 2019</h5>
                    <ul>
                        <li>Scrum Master</li>
                        <li>Software Engineer</li>
                        <li>UX Designer</li>
                        <li>Pitch Speaker</li>
                    </ul>
                    <p>We developed the <strong>Safety Scripting</strong> solution for BASF SA under 24 hours, to <strong>calculate the viability of implementing a desired circuit</strong> according to the brazilian regulamentation of Circuits in Explosive Areas</p>
                    <p className="AccDescription">A Hackathon is a sprint-like event where the participants have to create a functioning software or hardware by the end of the event. Hackathons tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers</p>
            </div>
            <div className="Accomplished">
                <h3>11th FATEC CODING MARATHON</h3>
                <div className="TitleBreak" />
                <h4 className="AccPosition">1st place</h4>
                <h5 className="AccSub">NOVEMBER 2019</h5>
                    <ul>
                        <li>Team Leader</li>
                        <li>Programmer</li>
                    </ul>
                    <p>We won the 11th Coding Marathon, a competition to <strong>solve the highest amount of coding problems in the shortest amount of time</strong> in 6 hours</p>
                    <p className="AccDescription">A Coding Marathon is a competition focused on logic and time-management, where the participants have to solve all of the logic-focused exercises. Submiting a wrong answer makes the correct answer count less for your team</p>
            </div>
            <div className="Accomplished">
                <h3>10th FATEC CODING MARATHON</h3>
                <div className="TitleBreak" />
                <h4 className="AccPosition">1st place</h4>
                <h5 className="AccSub">MAY 2019</h5>
                    <ul>
                        <li>Team Leader</li>
                        <li>Programmer</li>
                    </ul>
                    <p>We won the 11th Coding Marathon, a competition to <strong>solve the highest amount of coding problems in the shortest amount of time</strong> in 6 hours</p>
                    <p className="AccDescription">A Coding Marathon is a competition focused on logic and time-management, where the participants have to solve all of the logic-focused exercises. Submiting a wrong answer makes the correct answer count less for your team</p>
            </div>

        </div>
    );
}


export default Accomplishments;