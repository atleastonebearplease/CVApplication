export const resumeObject = {
    personalInformation: {
        fullName: "Alex Walters",
        emailAddress: "alexwalters387@gmail.com", 
        phoneNumber: "7312203888",
        location: "Huntingdon, TN",
        linkedInProfile: "linkedin.com", 
        githubProfile: "github.com/atleastonebearplease"
    },
    summary: "I am da best at everything",
    educationInformation: {
        schoolObjects: [
            {
                schoolName: "Texas University", 
                startDate: "August 2025",
                endDate: "",
                degree: "Computer Science",
                achievements: [
                    "Was super cool",
                    "Knew super cool people"
                ]
            }, 
            {
                schoolName: "Tennessee University",
                startDate: "August 2024", 
                endDate: "August 2023",
                degree: "Computer Science",
                achievements: [
                    "Being the best",
                    "Graduated Early"
                ]
            }
        ]
    },
    workExperience: {
        workObjects: [
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

export const emptyResumeObject = {
    personalInformation: {
        fullName: "",
        emailAddress: "", 
        phoneNumber: "",
        location: "",
        linkedInProfile: "", 
        githubProfile: ""
    },
    summary: "",
    educationInformation: {
        schoolObjects: [

        ]
    },
    workExperience: {
        workObjects: [

        ]
    },
    skills: [
        
    ]
}