import React, { useEffect, useState } from "react";
import Character from "./Character";
/*
openModal={openModal}
                setOpenModal={setOpenModal}
                fire={fire}
                water={water}
                earth={earth}
                air={air}
*/


type CharacterProps = {
    title: string,
    type: string,
    speed: number,
    strength: number,
    health: number,
    intelligence: number
}

type ModalProps = {
    fire: CharacterProps[],
    water: CharacterProps[],
    earth: CharacterProps[],
    air: CharacterProps[],
    openModal: boolean | string,
    setOpenModal: React.Dispatch<React.SetStateAction<string | boolean>>
}

export default function Modal({ fire, water, earth, air, openModal, setOpenModal} : ModalProps) {
    const [contentType, setContentType] = useState<CharacterProps[] | []>([])
    useEffect(() => {
        switch(openModal) {
            case 'fire':
                setContentType(fire)
                break;
            case 'water':
                setContentType(water)
                break;
            case 'earth':
                setContentType(earth)
                break;
            case 'air':
                setContentType(air)
                break;
        }
    }, [air, earth, fire, openModal, water])

    
    if(!openModal) return null
    

    let content
    content = contentType.map((c : CharacterProps) => {
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
            <button className="closebtn" onClick={() => setOpenModal(false)}>Close</button>
            <div className="characters">
                {content}
            </div>
        </div>
    )
}