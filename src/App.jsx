import { useState } from 'react';
import './App.css';
import { CVForm, DropDownSection } from "./CVForm.jsx";
import { Resume } from "./Resume.jsx";
import { PersonalInformationForm, SummaryForm, EducationForm, WorkExperienceForm} from "./Forms.jsx";

function App() {
  //TODO: Temporary variable for UUID for education
  const educationID = crypto.randomUUID();
  const workExperienceID = crypto.randomUUID();

  return (
    <>
    <div className="app-container">
      <CVForm>
        <DropDownSection sectionName="Personal Information">
          <PersonalInformationForm/>
        </DropDownSection>
        <DropDownSection sectionName="Summary"> 
          <SummaryForm/>
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
          
        </DropDownSection>
      </CVForm>
      <Resume>
      </Resume>
    </div>
    </>
  )
}

export default App
