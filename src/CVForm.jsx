export function CVForm({ children }) {
    return (
        <div className="cv-form">
            {children}
        </div>
    )
}

export function DropDownSection({ sectionName, children, isActive, showPanel}) {
    return (
        <div className="drop-down-section">
            <div className="drop-down-section__header-wrapper">
                <h1 onClick={showPanel}>{sectionName}</h1>
                <button className="drop-down-section__button" onClick={showPanel}>
                    {isActive ? (<>&#9658;</>)
                    : (<>&#9660;</>)}
                    
                    </button>
            </div>
            {isActive && (
                <div className="drop-down-section__wrapper">
                    {children}
                </div>
            )}
        </div>
    )
}