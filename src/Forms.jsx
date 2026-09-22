function LabelInputGroup({id, labelText, placeholder="", type="text", value, onChange}) {
    let input;

    const controlledProps = onChange 
    ? {value: value, onChange: (e) => onChange(e.target.value) }
    : {};

    if(type === "textarea") {
        input = <textarea id={id} placeholder={placeholder} {...controlledProps}></textarea>
    } else {
        input = <input type={type} id={id} placeholder={placeholder} {...controlledProps}/>
    }
    
    return (
        <div className="label-input-group">
            <label htmlFor={id}>{labelText}</label>
            {input}
        </div>
    )
}


/*  TODO: Convert this over to the regular input group. All you'd have to do is just include the label 
tip portion. The label tip is useful elsewhere and could be included pretty easy
*/
function DateInputGroup({ id, labelText, labelTip, value, onChange}) {
    let label = labelText;
    
    //TODO: Update label tip to have it's own CSS class to control the sizing and vert align
    if(labelTip) {
        label = <>{labelText} {labelTip}</>
    }
    
    return (
            <LabelInputGroup 
            id={id}
            labelText={label}
            placeholder="" 
            type="month"
            value={value}
            onChange={onChange}>
            </LabelInputGroup>
        )
}


function getLabelID(labelText, ID) {
    return labelText + "-" + ID;
}

export function PersonalInformationForm({ values, onFieldChange }) {
    return (
        <div className="form-container">
            <LabelInputGroup 
            id="full-name" 
            labelText="Full Name" 
            placeholder="John Doe"
            value={values.fullName}
            onChange={(newValue) => onFieldChange("fullName", newValue)}>
            </LabelInputGroup>

            <div className="double-input-group-container">
                <LabelInputGroup 
                id="email-address" 
                labelText="Email Address" 
                placeholder="validemail@email.com" 
                type="email"
                value={values.emailAddress}
                onChange={(newValue) => onFieldChange("emailAddress", newValue)}
                >
                </LabelInputGroup>
                <LabelInputGroup 
                id="phone-number" 
                labelText="Phone Number" 
                placeholder="123-456-7890" 
                type="number"
                value={values.phoneNumber}
                onChange={(newValue) => onFieldChange("phoneNumber", newValue)}>
                </LabelInputGroup>
            </div>
            <LabelInputGroup
            id="location"
            labelText="Location"
            placeholder="Nashville, TN"
            value={values.location}
            onChange={(newValue) => onFieldChange("location", newValue)}
            >
            </LabelInputGroup>
            <div className="double-input-group-container">
                <LabelInputGroup 
                id="linked-in-profile" 
                labelText="LinkedIn Profile"
                placeholder=""
                type="url"
                value={values.linkedInProfile}
                onChange={(newValue) => onFieldChange("linkedInProfile", newValue)}>
                </LabelInputGroup>
                <LabelInputGroup
                id="github-profile"
                labelText="Github Profile"
                placeholder="github.com/myprofile"
                type="url"
                value={values.githubProfile}
                onChange={(newValue) => onFieldChange("githubProfile", newValue)}>
                </LabelInputGroup>
            </div>
        </div>
    )
}

export function SummaryForm({values, onFieldChange}) {
    return (
        <div className="form-container">
            <LabelInputGroup
            id="summary"
            labelText="Summary"
            placeholder="Your objective, why you're a good fit, etc."
            type="textarea"
            value={values.summary}
            onChange={(newValue) => onFieldChange(newValue)}>
            </LabelInputGroup>
        </div>
    )
}

export function EducationForm({ values, onFieldChange, onRemoveButtonClick, id }) {
    return (
        <div className="form-container">
            <LabelInputGroup 
            id={getLabelID("school-name", id)}
            labelText="School Name" 
            placeholder="e.g. Texas State University"
            value={values.schoolName}
            onChange={(newValue) => onFieldChange("schoolName", newValue)}>
            </LabelInputGroup>
            <div className="double-input-group-container">
                <DateInputGroup
                id={getLabelID("start-date", id)}
                labelText = "Start Date"
                value={values.startDate}
                onChange={(newValue) => onFieldChange("startDate", newValue)}
                >
                </DateInputGroup>
                <DateInputGroup
                id={getLabelID("end-date", id)}
                labelText = "End Date"
                labelTip={<i style={{fontSize: "80%"}}>Leave blank for Present</i>}
                value={values.endDate}
                onChange={(newValue) => onFieldChange("endDate", newValue)}
                >
                </DateInputGroup>
            </div>
            <LabelInputGroup
            id={getLabelID('degree', id)} 
            labelText="Degree / Program" 
            placeholder="e.g. Bachelor's of Computer Science"
            value={values.degree}
            onChange={(newValue) => onFieldChange("degree", newValue)}
            >
            </LabelInputGroup>
            <LabelInputGroup 
            id={getLabelID("achievements", id)} 
            labelText="Achievements - New lines are new bullet points" 
            placeholder={"e.g.4.0 GPA\nSuma Cum Laude"}
            type="textarea"
            value={values.achievements.join("\n")}
            onChange={(newValue) => onFieldChange("achievements", newValue.split(/\r?\n/))}>
            </LabelInputGroup>
            <button type="button" className="remove-education-button" onClick={onRemoveButtonClick}>Remove Education</button>
        </div>
    )
}

export function WorkExperienceForm({values, onFieldChange, onRemoveButtonClick, id}) {
    /*             
            <LabelInputGroup 
            id={getLabelID("school-name", id)}
            labelText="School Name" 
            placeholder="e.g. Texas State University"
            value={values.schoolName}
            onChange={(newValue) => onFieldChange("schoolName", newValue)}>
            </LabelInputGroup> */
    return (
         <div className="form-container">
            <LabelInputGroup 
            id={getLabelID("company-name", id)} 
            labelText="Company Name" 
            placeholder="e.g. Apple inc"
            value={values.companyName}
            onChange={(newValue) => onFieldChange("companyName", newValue)}
            >
            </LabelInputGroup>
            <div className="double-input-group-container">
                <DateInputGroup
                id={getLabelID("start-date", id)}
                labelText = "Start Date"
                value={values.startDate}
                onChange={(newValue) => onFieldChange("startDate", newValue)}
                >
                </DateInputGroup>
                <DateInputGroup
                id={getLabelID("end-date", id)}
                labelText = "End Date"
                labelTip={<i style={{fontSize: "80%"}}>Leave blank for Present</i>}
                onChange={(newValue) => onFieldChange("endDate", newValue)}
                >
                </DateInputGroup>
            </div>
            <LabelInputGroup
            id={getLabelID("job-title", id)} 
            labelText="Job Title" 
            placeholder="e.g. Senior Data Engineer"
            value={values.jobTitle}
            onChange={(newValue) => onFieldChange("jobTitle", newValue)}
            >
            </LabelInputGroup>
            <LabelInputGroup 
            id={getLabelID("responsibilities", id)} 
            labelText="Responsibilities - New lines are new bullet points" 
            placeholder={"e.g.Planning new features\nImplementing new features"}
            type="textarea"
            value={values.responsibilities.join("\n")}
            onChange={(newValue) => onFieldChange("responsibilities", newValue.split(/\r?\n/))}
            >
            </LabelInputGroup>
            <button type="button" className="remove-button" onClick={onRemoveButtonClick}>Remove Work Experience</button>
        </div>

        /*             value={values.achievements.join("\n")}
            onChange={(newValue) => onFieldChange("achievements", newValue.split(/\r?\n/))}> */
    )
}

export function SkillsForm({values, onFieldChange, uniqueID}) {
    return (
        <div className="form-container">
            <LabelInputGroup 
            id={getLabelID("technical-skills", uniqueID)} 
            labelText="Technical Skills - New lines are new bullet points" 
            placeholder={"e.g.React\nJavascript"}
            type="textarea"
            values={values.join("\n")}
            onChange={(newValue) => onFieldChange(newValue.split(/\r?\n/))}
            >
            </LabelInputGroup>
        </div>
    )
}

/* 
<LabelInputGroup 
id={getLabelID("", uniqueID)} 
labelText="" 
placeholder="" 
type="">
</LabelInputGroup>
*/