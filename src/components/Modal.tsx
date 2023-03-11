import React from "react";
import Character from "./components/Character";

export default function Modal(props) {
    if(!props.openModal) return null
    const contentType = props.openModal
    let content
    content = props[contentType].map(c => {
        return (<Character
        title={c.title}
        type={c.type}
        speed={c.speed}
        strength={c.strength}
        health={c.health}
        intelligence={c.intelligence}
        key={c.title}
    />)
    })
    if(props[contentType].length === 0) {
        content = 'No Characters'
    }

    return (
        <div className="modal">
            <button className="closebtn" onClick={() => props.setOpenModal(false)}>Close</button>
            <div className="characters">
                {content}
            </div>
        </div>
    )
}