import "./resume.css";
import { Fragment } from "react";

export function Resume({resumeData}) {

    let resumeDeepCopy = structuredClone(resumeData);

    let personalInfo = resumeDeepCopy.personalInformation;
    let summary = resumeDeepCopy.summary;
    let educationInfo = resumeDeepCopy.educationInformation;

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
            <h1>Education</h1>
            {educationInfo.schoolObjects.map((school) => {
                return <>
                    <h3>{school.schoolName}</h3>
                    <p>{school.startDate} - {school.endDate ? school.endDate : "Present"}</p>
                    <h4>{school.degree}</h4>
                    <ul>
                        {school.achievements.map((ach) => {
                            return (<li>{ach}</li>);
                        })}
                    </ul>
                </>
            })}
            <WorkExperience resumeData = {resumeData}/>
            <Skills resumeData = {resumeData}/>
        </div>
    )
}

function WorkExperience({resumeData}) {

    let resumeDeepCopy = structuredClone(resumeData);

    if(resumeDeepCopy.workExperience.workObjects.length > 0) {
        let workObjs = resumeDeepCopy.workExperience.workObjects;

        /* 
        //TODO: Must have an empty div to properly display date and time. This will be done with CSS class
         */

        let workExperienceItems = [];

        for(let workObj of workObjs) {
            workExperienceItems.push(
                <Fragment key={workObj.companyName}>
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

/* 
<h1>Work Experience</h1>
{workExperience.workObjects.map((workObj) => {
    return <>
        <h3>{workObj.companyName}</h3>
        <p>{workObj.startDate} - {workObj.endDate ? workObj.endDate : "Present"}</p>
        <h4>{workObj.jobTitle}</h4>
        <ul>
            {workObj.responsibilities.map((rsp) => {
                return (<li>{rsp}</li>);
            })}
        </ul>
    </>
})}
*/

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