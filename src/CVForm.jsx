import { Children } from "react"

export function CVForm({ children }) {
    return (
        <div className="cv-form">
            {children}
        </div>
    )
}

export function DropDownSection({ sectionName }) {
    return (
        <div className="drop-down-section">
            <h1>{sectionName}</h1>
            <p>Placeholder for now as there will be a form here</p>
        </div>
    )
}

export function Testing({test="Hey there"}) {
    return (
        <h1>{test}</h1>
    )
}