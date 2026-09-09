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
        ...resume.educationInformation.schoolObjects,
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
          <button onClick={() => setResumeData(addNewEducation)}>Add Another Education</button>

            {/* 
            OKAY - LET'S FOCUS ON THE THINGS THAT WE KNOW THAT WE CAN DO.

            - Remove the testing code
            - Try workong on drop downs

            We can work on being able to add and remove sections of the Education portion. This will
            translate over to the Work Experience portion as well. 


            Remember: Education Information contains a list of school objects, each of which needs
            to receive values and a way to change them. But it's only different in that the value 
            being passed is an array, ultimately. Or, an object that contains an array of school objects.

            For now let's get the static version working. We'll need to use the same state we've been
            using. But now it's got another layer. The objects within. Can we use the same state?

            Okay, so I think to do this we're going to have to start implementing the unique IDs 
            per list object. That means the schools and the work experience. The first one we get to have
            and can generate an ID upon loading. Any new ones (made with a button) we'll have to generate. 

            Can we start with the static ID we already have and go from there? Yes. It'll be easier
            to modify existing code to take an ID than try to reverse engineers from the start. 

            Okay, so we know we have to pass in the value of the education section:
            resumeData.educationInformation. Contained inside is a schoolObjects array. So our 
            function will also need to know what index in the array it is, right? Or would we need 
            to filter by the ID of the thing because of the React list rendering stuff?
            */}


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
