import React, { useState } from 'react';
import experiencesData from "../../assets/data.json";
import "./experience.css";


const ExperienceCard = ({ projectName, role, timePeriod, description, responsibilities, toolsUsed, projectLandingPage }) => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleLearnMoreClick = () => {
        setPopupOpen(true);
    };

    const handlePopupClose = () => {
        setPopupOpen(false);
    };

    return (
        <div className="experience-card">
            <img src={projectLandingPage} alt="Project Landing Page" className='projectLandingPage' />
            <h3 className='projectName'>{projectName}</h3>
            <h3>{role}</h3>
            <p>{timePeriod}</p>

            <a onClick={handleLearnMoreClick} className='linkText'>
                Learn More . . 
            </a>

            {isPopupOpen && (
                <div className="popup">
                    <h2>{projectName}</h2>
                    <h2>{role}</h2>
                    <p>{description}</p>
                    <br/>
                    <h4 className='linkText'>Responsibilities:</h4>
                    <div dangerouslySetInnerHTML={{ __html: responsibilities }} />
                    <br/>
                    <h4 className='linkText'>Tools Used:</h4>
                    <p>{toolsUsed}</p>

                    <a onClick={handlePopupClose} className='closeText'>
                        Close
                    </a>
                </div>
            )}
        </div>
    );
};

function Experience() {
    return (
        <section id='experience'>
            <div>
                <p className="section__text__p1">Explore My</p>
                <h1 className="title">Experience</h1>
            </div>
            <div className="experience-section">
                {experiencesData.Experiences.map((experience, index) => (
                    <ExperienceCard
                        key={index}
                        projectName={experience['Project Name']}
                        role={experience.Role}
                        timePeriod={experience["Time Period"]}
                        description={experience.Description}
                        responsibilities={experience.Responsibilities}
                        toolsUsed={experience["Tools Used"]}
                        projectLandingPage={experience.projectLandingPage}
                    />
                ))}
            </div>
        </section>
    );
}

export default Experience;
