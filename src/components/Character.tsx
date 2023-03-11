import React from "react";

export default function Character(props) {
    let characterType = props.type
    let characterName = props.title

    return (
        <div className="character">
            <h3 className="characterName">{characterName[0].toUpperCase() + characterName.slice(1)}</h3>
            <h4>{characterType[0].toUpperCase() + characterType.slice(1)} Type</h4>
            <h4>Stats</h4>
            <hr></hr>
            <h4>Speed: {props.speed}</h4>
            <h4>Strength: {props.strength}</h4>
            <h4>Health: {props.health}</h4>
            <h4>Intelligence: {props.intelligence}</h4>
            {props.deleteCharacter && <button type="button" className="deleteButton" onClick={() => props.deleteCharacter(props.title)}>Delete Character</button>}
        </div>
    )
}
