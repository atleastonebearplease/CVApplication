import "./resume.css";
import { Fragment } from "react";

export function Resume({resumeData}) {

    let resumeDeepCopy = structuredClone(resumeData);

    let personalInfo = resumeDeepCopy.personalInformation;
    let summary = resumeDeepCopy.summary;

    //TEST CONDITIONAL RENDERS HERE

    
//TODO: Add Keys to all objects upon creation
    return (
        <div className="resume">
            <div className="personal-info">
                <h1 className="name">{personalInfo.fullName}</h1>
                <p>{personalInfo.location} | {personalInfo.phoneNumber}</p>
                <p><a href={personalInfo.linkedInProfile}>LinkedIn</a> | <a href={personalInfo.githubProfile}>GitHub</a> | {personalInfo.emailAddress}</p>                
            </div>
            <h1>Summary</h1>
            <ul>
                <li>{summary}</li>
            </ul>
            <Education resumeData={resumeData}/>
            <WorkExperience resumeData = {resumeData}/>
            <Skills resumeData = {resumeData}/>
        </div>
    )
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
                            {school.achievements.map((ach)=> {
                                return (<li>{ach}</li>);
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