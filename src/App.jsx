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

function addNewWorkExperience(resumeData) {
  return {
    ...resumeData,
    workExperience: {
      ...resumeData.workExperience,
      workObjects: [
        ...resumeData.workExperience.workObjects,
        {
          id: crypto.randomUUID(),
          companyName: "",
          startDate: "",
          endDate: "",
          jobTitle: "",
          responsibilities: [

          ]
        }
      ]
    }
  }
}

function App() {
  //TODO: Temporary variable for UUID for education
  const skillsID = crypto.randomUUID();

  const [resumeData, setResumeData] = useState(emptyResumeObject);
  const [activePanel, setActivePanel] = useState(0);

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
        <DropDownSection 
        sectionName="Personal Information"
        isActive={activePanel === 0}
        showPanel={() => setActivePanel(0)}>
          <PersonalInformationForm 
          values={resumeData.personalInformation}
          onFieldChange={(field, value) => updateSection("personalInformation", field, value)}/>
        </DropDownSection>
        <DropDownSection 
        sectionName="Summary"
        isActive={activePanel === 1}
        showPanel={() => setActivePanel(1)}
        > 
          <SummaryForm
          values={resumeData.summary}
          onFieldChange={(
            (value) => setResumeData(prev => ({
              ...prev,
              summary: value
            }))
          )}/>
{/* 
          <SkillsForm 
          uniqueID={skillsID}
          values={resumeData.skills}
          onFieldChange={(
            (value) => setResumeData(prev => ({
              ...prev,
              skills: value
            }))
          )}
          ></SkillsForm>
*/}

        </DropDownSection>
        <DropDownSection 
        sectionName="Education"
        isActive={activePanel === 2}
        showPanel={() => setActivePanel(2)}
        > 
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
        <DropDownSection 
        sectionName="Work Experience"
        isActive={activePanel === 3}
        showPanel={() => setActivePanel(3)}
        >
          {resumeData.workExperience.workObjects.map((work) => {
            return (
              <WorkExperienceForm
              values={work}
              onFieldChange={(field, value) => {
                updateArrayItem("workExperience", "workObjects", work.id, field, value)
              }}
              key={work.id}
              id={work.id}
              onRemoveButtonClick={() => {
                removeArrayObject("workExperience", "workObjects", work.id)
              }}
              >

              </WorkExperienceForm>
            )
          })
          }
          <button type="button" onClick={() => setResumeData(addNewWorkExperience)}>Add Another Work Experience</button>
        </DropDownSection>
        <DropDownSection 
        sectionName="Skills"
        isActive={activePanel === 4}
        showPanel={() => setActivePanel(4)}>
          <SkillsForm 
          uniqueID={skillsID}
          values={resumeData.skills}
          onFieldChange={(
            (value) => setResumeData(prev => ({
              ...prev,
              skills: value
            }))
          )}
          ></SkillsForm>
        </DropDownSection>
      </CVForm>
      <Resume resumeData={resumeData}>
      </Resume>
    </div>
    </>
  )
}

export default App
