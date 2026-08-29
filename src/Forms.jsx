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


/* 
<LabelInputGroup 
id="" 
labelText="" 
placeholder="" 
type="">
</LabelInputGroup>
*/