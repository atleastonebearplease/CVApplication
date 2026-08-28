import { useState } from 'react';
import './App.css';
import { CVForm, DropDownSection, Testing } from "./CVForm.jsx";
import { Resume } from "./Resume.jsx";

function App() {
  return (
    <>
    <div className="app-container">
      <CVForm>
        <DropDownSection sectionName="Personal Information"/>
        <Testing/>
      </CVForm>
      <Resume>
      </Resume>
    </div>
    </>
  )
}

export default App
