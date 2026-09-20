import { useState } from 'react';
import './App.css';
import { CVForm, DropDownSection } from "./CVForm.jsx";
import { Resume } from "./Resume.jsx";
import { PersonalInformationForm, SummaryForm, EducationForm, WorkExperienceForm, SkillsForm} from "./Forms.jsx";
import { resumeObject, emptyResumeObject } from "./resumeObject.js";

function addNewEducation(resumeData) {
  return {
    ...resumeData,
    educationInformation: {
      ...resumeData.educationInformation,
      schoolObjects: [
        ...resumeData.educationInformation.schoolObjects,
        {
          id: crypto.randomUUID(),
          schoolName: "",
          startDate: "",
          endDate: "",
          degree: "",
          achievements: [
            
          ]
        }
      ]
    }    
  }
}

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

  function updateArrayItem(sectionName, arrayKey, id, field, value) {
    setResumeData(prev => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        [arrayKey]: prev[sectionName][arrayKey].map(item => {
          return item.id === id ? {...item, [field]: value} : item
        })
      }
    }))
  }

  function removeArrayObject(sectionName, arrayKey, id) {
    setResumeData(prev => ({
      ...prev,
      [sectionName]: {
        ...prev[sectionName],
        [arrayKey]: prev[sectionName][arrayKey].filter(item => {
          return item.id !== id
        })
      }
    }))
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
          values={resumeData}
          onFieldChange={(
            (value) => setResumeData(prev => ({
              ...prev,
              summary: value
            }))
          )}/>
        </DropDownSection>
        <DropDownSection sectionName="Education"> 
          {resumeData.educationInformation.schoolObjects.map((school) => {
            return (
              <EducationForm
              values={school}
              onFieldChange={(field, value) => {
                updateArrayItem("educationInformation", "schoolObjects", school.id, field, value);
              }}
              key={school.id}
              id={school.id}
              onRemoveButtonClick={() => {
                removeArrayObject("educationInformation", "schoolObjects", school.id);
              }}
              >
              </EducationForm>
            )
          })}

          <button type="button" onClick={() => setResumeData(addNewEducation)}>Add Another Education</button>
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
