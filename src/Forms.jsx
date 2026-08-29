function LabelInputGroup({id, labelText, placeholder="", type="text"}) {
    let input;

    if(type === "textarea") {
        input = <textarea id={id} placeholder={placeholder}></textarea>
    } else {
        input = <input type={type} id={id} placeholder={placeholder}/>
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
function DateInputGroup({ id, labelText, labelTip }) {
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
            type="month">
            </LabelInputGroup>
        )
}

export function PersonalInformationForm() {
    return (
        <div className="form-container">
            <LabelInputGroup 
            id="full-name" 
            labelText="Full Name" 
            placeholder="John Doe">
            </LabelInputGroup>

            <div className="double-input-group-container">
                <LabelInputGroup 
                id="email-address" 
                labelText="Email Address" 
                placeholder="validemail@email.com" 
                type="email">
                </LabelInputGroup>
                <LabelInputGroup 
                id="phone-number" 
                labelText="Phone Number" 
                placeholder="123-456-7890" 
                type="number">
                </LabelInputGroup>
            </div>
            <LabelInputGroup
            id="location"
            labelText="Location"
            placeholder="Nashville, TN"
            >
            </LabelInputGroup>
            <div className="double-input-group-container">
                <LabelInputGroup 
                id="linked-in-profile" 
                labelText="LinkedIn Profile"
                placeholder=""
                type="url">
                </LabelInputGroup>
                <LabelInputGroup
                id="github-profile"
                labelText="Github Profile"
                placeholder="github.com/myprofile"
                type="url">
                </LabelInputGroup>
            </div>
        </div>
    )
}

export function SummaryForm() {
    return (
        <div className="form-container">
            <LabelInputGroup
            id="summary"
            labelText="Summary"
            placeholder="Your objective, why you're a good fit, etc."
            type="textarea">
            </LabelInputGroup>
        </div>
    )
}

export function EducationForm({ uniqueID }) {
    return (
        <div className="form-container">
            <LabelInputGroup 
            id={getLabelID("school-name", uniqueID)}
            labelText="School Name" 
            placeholder="e.g. Texas State University">
            </LabelInputGroup>
            <div className="double-input-group-container">
                <DateInputGroup
                id={getLabelID("start-date", uniqueID)}
                labelText = "Start Date"
                >
                </DateInputGroup>
                <DateInputGroup
                id={getLabelID("end-date", uniqueID)}
                labelText = "End Date"
                labelTip={<i style={{fontSize: "80%"}}>Leave blank for Present</i>}
                >
                </DateInputGroup>
            </div>
            <LabelInputGroup 
            id={getLabelID('degree', uniqueID)} 
            labelText="Degree / Program" 
            placeholder="e.g. Bachelor's of Computer Science" 
            >
            </LabelInputGroup>
            <LabelInputGroup 
            id={getLabelID("achievements", uniqueID)} 
            labelText="Achievements - New lines are new bullet points" 
            placeholder={"e.g.4.0 GPA\nSuma Cum Laude"}
            type="textarea">
            </LabelInputGroup>
        </div>
    )
}

function getLabelID(labelText, ID) {
    return labelText + "-" + ID;
}


/* 
<LabelInputGroup 
id={getLabelID("", uniqueID)} 
labelText="" 
placeholder="" 
type="">
</LabelInputGroup>
*/