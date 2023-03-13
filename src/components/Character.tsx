import React from "react";
/**
 * 
 * @param props title={c.title}
                            type={c.type}
                            speed={c.speed}
                            strength={c.strength}
                            health={c.health}
                            intelligence={c.intelligence}
                            deleteCharacter={deleteCharacter}
                            key={c.title}
 * @returns 
 */

type CharacterProps = {
    title: string,
    type: string,
    speed: number,
    strength: number,
    health: number,
    intelligence: number,
    deleteCharacter?: Function
}

export default function Character(props : CharacterProps) {
    let characterType : string = props.type
    let characterName : string = props.title

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
            {props.deleteCharacter && <button type="button" className="deleteButton" onClick={() => props.deleteCharacter?.(props.title)}>Delete Character</button>}
        </div>
    )
}
