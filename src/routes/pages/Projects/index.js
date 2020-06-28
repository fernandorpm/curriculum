import React, { useEffect, useState } from 'react';
import './styles.css';
import { GitHub } from 'react-feather';

function Projects() {
    const [projects, setProjects] = useState([]);

    async function getGitProjects() {
        const response = await fetch('https://api.github.com/users/fernandorpm/repos?').then(response => response.json());
        setProjects(response);
        console.log(response);
    }

    useEffect(() => {
        getGitProjects();
    }, []);


    return (
        <div className="Container ContainerProjects">
            <div className="TopCardBorder">
                <div className="TopCard">
                    <h3>BASF GUARATINGUETÁ</h3>
                    <div className="TitleBreak" />
                    <span className="AccSub"><b>NOVEMBER 2019 - CURRENTLY WORKING</b></span>
                    <p><strong>Fullstack Developer Intern</strong></p>

                    <ul>
                        <li>Part of the Global Digitalization Team, focused on <strong>Digital Solutions for the 4.0 Industry</strong></li>
                        <li>Developed <strong>the 2 biggest 2019-2020 digital projects</strong> of BASF Guaratinguetá, Digital Work Permit and Sample Tracking</li>
                        <li>Increased BASF South America savings by <strong>€250.000/year</strong> with the <strong>Digital Work Permit*</strong>, by reducing the filling time of a Work Permit by up to 70%**</li>
                        <li>Reduced the time gap between the analysing process and created a <strong>real time</strong> tracking with the <strong>Sample Tracking***</strong></li>
                        <li>Using <strong>SCRUM</strong> and <strong>KANBAN</strong> agile methodologies</li>
                        <li>Using <strong>SKELTA</strong> Development Tool (AVEVA) together with <strong>JAVASCRIPT ES6</strong> on the Frontend and <strong>C#.NET</strong> on the Backend via scripts and APIs, using <strong>MICROSOFT SQL SERVER</strong> as the Database Manager</li>
                    </ul>
                    <span className="AccSub"><b>* - Digital Work Permit is the digitalization of the Work Permit filling process required for externals to provide services for BASF SA
                                                <br />** - When compared to the average filling time of the tradition Work Permit
                                                <br />*** - Sample Tracking is a real time tracking of all of the samples from the substances used and produced by BASF SA
                    </b></span>
                </div>
            </div>

            <div className="SubCardList">

                {projects.map(project =>
                    <div className="SubCard" key={project.id}>
                        <h3>{(project.name).replaceAll(/-|_/gi, ' ').replace('.github.io', '').toUpperCase()}</h3>
                        <div className="TitleBreak" />
                        <span className="AccSub"><b>
                            {(project.pushed_at).slice(0, 7).split('-').sort().join(' ').replace(/^[0-9]{2}/gm, month => {
                                let monthName = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY','AUGUST', 'SEPTEMBER',  'OCTOBER', 'NOVEMBER', 'DECEMBER'];
                                return monthName[month - 1];
                            })}</b></span>
                        <p><b>{project.language}</b></p>
                        <p>{project.description}</p>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="VisitButton"><GitHub className="VisitIcon"/><p>Check on GitHub</p></a>
                    </div>

                )}

            </div>
        </div>
    );
}


export default Projects;