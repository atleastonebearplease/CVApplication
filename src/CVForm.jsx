export function CVForm({ children }) {
    return (
        <div className="cv-form">
            {children}
        </div>
    )
}

//FIXME: WORK ON DROP DOWNS

export function DropDownSection({ sectionName, children}) {
    return (
        <div className="drop-down-section">
            <h1>{sectionName}</h1>  {/* //TODO: Add a div and a drop down icon that can change with clicks */}
            {children}
        </div>
    )
}