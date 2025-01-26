import React from 'react'
import "../css/HelpCard.css"
import { useNavigate } from 'react-router-dom'; // Import useNavigate



function HelpCard({help}) {
    const navigate = useNavigate(); // Initialize navigate

    function onHelpClick() {
        navigate(`/offerhelp/${help.id}`); 
    }

    return (
        <div className="help-card" onClick={onHelpClick}>
        <div className="help-picture">
            <img src={help.url} alt={help.title}/>
            <div className="help-overlay">
            </div>
        </div>
        <div className="help-info">
            <h3>{help.title}</h3>
        </div>
        </div>
    )
}

export default HelpCard

