let resumeObject = {
    personalInformation: {
        fullName: "Alex Walters",
        emailAddress: "alexwalters387@gmail.com", 
        phoneNumber: "7312203888",
        location: "Huntingdon, TN",
        linkedInProfile: "", 
        githubProfile: ""
    },
    summary: "I am da best at everything",
    educationInformation: {
        schoolObjects: [
            {
                schoolName: "Texas University", 
                startDate: "August 2025",
                endDate: "",
                degree: "Computer Science"
            }, 
            {
                schoolName: "Tennessee University",
                startDate: "August 2024", 
                endDate: "August 2023",
                degree: "Computer Science"
            }
        ]
    },
    workExperience: {
        experienceObjects: [
            {
                companyName: "Checkr", 
                startDate: "August 2024", 
                endDate: "August 2026",
                jobTitle: "Investigations",
                responsibilities: [
                    "Being cool",
                    "Looking Cool"
                ]
            },
            {
                companyName: "GoodHire",
                startDate: "August 2023",
                endDate: "", 
                jobTitle: "Investigations", 
                responsibilities: [
                    "Doing cool stuff",
                    "Being cool and stuff", 
                    "Also looking cool"
                ]
            }
        ]
    },
    skills: [
        "React", 
        "Javascript",
        "HTML"
    ]

}

export function Resume(resumeData) {
    return (
        <div className="resume">
            Hi, I'm a resume
        </div>
    )
}