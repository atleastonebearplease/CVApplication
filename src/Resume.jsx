import "./resume.css";
import { Fragment } from "react";
import { joinWithPipes } from "./utilities.jsx";

export function Resume({resumeData}) {

    
//TODO: Add Keys to all objects upon creation
    return (
        <div className="resume">
            <PersonalInfo resumeData={resumeData}/>
            <Summary resumeData={resumeData}/>
            <Education resumeData={resumeData}/>
            <WorkExperience resumeData = {resumeData}/>
            <Skills resumeData = {resumeData}/>
        </div>
    )
}

function PersonalInfo({resumeData}) {
    if(resumeData.personalInformation) {
        let info = resumeData.personalInformation;

        let contactParts = [info.location, info.phoneNumber];

        let linkParts = [
            info.linkedInProfile && <a href={info.linkedInProfile}>LinkedIn</a>,
            info.githubProfile && <a href={info.githubProfile}>GitHub</a>,
            info.emailAddress
        ];


        return (
            <Fragment>
                <div className="personal-info">
                    {info.fullName && <h1 className="name">{info.fullName}</h1>}
                    {contactParts.some(Boolean) && <p>{joinWithPipes(contactParts)}</p>}
                    {linkParts.some(Boolean) && <p>{joinWithPipes(linkParts)}</p>}
                </div>
            </Fragment>
        )
    } else {
        return null;
    }
}

function Summary({resumeData}) {
    if(resumeData.summary) {
        return (
            <Fragment>
                <h1>Summary</h1>
                <ul>
                    <li>{resumeData.summary}</li>
                </ul>
            </Fragment>
        )
    } else {
        return null;
    }
}

function Education({resumeData}) {
    //TESTING: Remove after done testing
    let resumeDeepCopy = structuredClone(resumeData);

    if(resumeDeepCopy.educationInformation.schoolObjects.length > 0) {
        let schools = resumeDeepCopy.educationInformation.schoolObjects;

        let schoolItems = [];

        for(let school of schools) {
            schoolItems.push(
                //TODO: Add unique key per new school item
                <Fragment>
                    {school.schoolName && <h3>{school.schoolName}</h3>}
                    {school.startDate && (
                        <p className="school-dates">
                            {school.startDate} - {school.endDate ? school.endDate : "Present"}
                        </p>
                    )}
                    {school.degree && <h4>{school.degree}</h4>}
                    {school.achievements.length > 0 && (
                        <ul>
                            {school.achievements.filter(Boolean).map((ach, index)=> {
                                return (<li key={index}>{ach}</li>);
                            })}
                        </ul>
                    )}
                </Fragment>
            )
        }

        return (
            <>
            <h1>Education</h1>
            {schoolItems}
            </>
        )
    } else {
        return null;
    }
}

function WorkExperience({resumeData}) {
    //TESTING: Remove after done testing
    let resumeDeepCopy = structuredClone(resumeData);

    if(resumeDeepCopy.workExperience.workObjects.length > 0) {
        let workObjs = resumeDeepCopy.workExperience.workObjects;

        /* 
        //TODO: Just need flexbox and margin-left: auto to make dates stay to right
         */

        let workExperienceItems = [];

        for(let workObj of workObjs) {
            workExperienceItems.push(
                //TODO: Add unique key per new work item
                <Fragment>
                    {workObj.companyName && <h3>{workObj.companyName}</h3>}
                    {workObj.startDate && (
                        <p className = "work-dates">
                            {workObj.startDate} - {workObj.endDate ? workObj.endDate : "Present"}
                        </p>
                    )}
                    {workObj.jobTitle && <h4>{workObj.jobTitle}</h4>}
                    {workObj.responsibilities.length > 0 && (
                        <ul>
                            {workObj.responsibilities.map((rsp) => {
                                return (<li>{rsp}</li>);
                            })}
                        </ul>
                    )}
                </Fragment>
            )
        }

        return (
            <>
            <h1>Work Experience</h1>
            {workExperienceItems}
            </>
        )
    } else {
        return null;
    }
}

function Skills({resumeData}) {
    if(resumeData.skills) {

        if(resumeData.skills.length < 1) {
            return null;
        }

        return (
            <>
            <h1>Skills</h1>
                <ul>
                    {resumeData.skills.map((skill) => {
                        return (<li>{skill}</li>);
                    })}
                </ul>
            </>
        )
    } else {
        return null;
    }
}