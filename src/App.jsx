import { useState } from 'react';
import './App.css';
import { CVForm, DropDownSection } from "./CVForm.jsx";
import { Resume } from "./Resume.jsx";
import { PersonalInformationForm, SummaryForm, EducationForm, WorkExperienceForm, SkillsForm} from "./Forms.jsx";
import { resumeObject, emptyResumeObject } from "./resumeObject.js";

function App() {
  //TODO: Temporary variable for UUID for education
  const educationID = crypto.randomUUID();
  const workExperienceID = crypto.randomUUID();
  const skillsID = crypto.randomUUID();

  const [resumeData, setResumeData] = useState(emptyResumeObject);

  function updateSection(sectionName, field, value) {
    setResumeData(prev => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        [field]: value
      }
    }));
  }

  return (
    <>
    <div className="app-container">
      <CVForm>
        <DropDownSection sectionName="Personal Information">
          <PersonalInformationForm 
          values={resumeData.personalInformation}
          onFieldChange={(field, value) => updateSection("personalInformation", field, value)}/>
        </DropDownSection>
        <DropDownSection sectionName="Summary"> 
          <SummaryForm
          values={resumeData.summary}
          onFieldChange={(
            (value) => setResumeData(prev => ({
              ...prev,
              summary: value
            }))
          )}/>
        </DropDownSection>
        <DropDownSection sectionName="Education"> 
          {/* //TODO: Update to use a unique ID for each created date input group as well as each created education 
          //section piece. For now we can pass it in and pass to the DateInputGroup as a prop */}
          <EducationForm uniqueID={educationID}></EducationForm>
          <button>Add Another Education</button>
        </DropDownSection>
        <DropDownSection sectionName="Work Experience">
          <WorkExperienceForm uniqueID={workExperienceID}></WorkExperienceForm>
          <button>Add Another Work Experience</button>
        </DropDownSection>
        <DropDownSection sectionName="Skills">
          <SkillsForm uniqueID={skillsID}></SkillsForm>
        </DropDownSection>
      </CVForm>
      <Resume resumeData={resumeData}>
      </Resume>
    </div>
    </>
  )
}

export default App
