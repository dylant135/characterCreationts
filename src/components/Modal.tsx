import React from "react";
import Character from "./Character";
/*
openModal={openModal}
                setOpenModal={setOpenModal}
                fire={fire}
                water={water}
                earth={earth}
                air={air}
*/
type ModalProps = {
    fire: {}[],
    water: {}[],
    earth: {}[],
    air: {}[],
    openModal: boolean | string,
    setOpenModal: React.Dispatch<React.SetStateAction<string | boolean>>
}

type CharacterProps = {
    title: string,
    type: string,
    speed: number,
    strength: number,
    health: number,
    intelligence: number
}

export default function Modal({ fire, water, earth, air, openModal, setOpenModal} : ModalProps) {
    if(!openModal) return null
    const contentType = openModal
    let content
    content = [contentType].map((c : CharacterProps) => {
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
    if([contentType].length === 0) {
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