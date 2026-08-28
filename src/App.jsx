import { useState } from 'react';
import './App.css';
import { CVForm, DropDownSection } from "./CVForm.jsx";
import { Resume } from "./Resume.jsx";
import { PersonalInformationForm } from "./Forms.jsx";

function App() {
  return (
    <>
    <div className="app-container">
      <CVForm>
        <DropDownSection sectionName="Personal Information">
          <PersonalInformationForm/>
        </DropDownSection>
        <DropDownSection sectionName="Summary"> 

        </DropDownSection>
        <DropDownSection sectionName="Education"> 

        </DropDownSection>
      </CVForm>
      <Resume>
      </Resume>
    </div>
    </>
  )
}

export default App
