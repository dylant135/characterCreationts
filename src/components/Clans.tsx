/* eslint-disable default-case */
import React, { useEffect, useState } from "react";
import Modal from "./Modal";


type ClanProps = {
    characters: {
        title: string,
        type: string,
        speed: number,
        strength: number,
        health: number,
        intelligence: number
    }[]
}

type CharacterType = {
    title: string,
    type: string,
    speed: number,
    strength: number,
    health: number,
    intelligence: number
}

export default function Clans({ characters} : ClanProps) {
    const [fire, setFire] = useState<CharacterType[]>([])
    const [water, setWater] = useState<CharacterType[]>([])
    const [earth, setEarth] = useState<CharacterType[]>([])
    const [air, setAir] = useState<CharacterType[]>([])
    const [openModal, setOpenModal] = useState<boolean | string>(false)

    useEffect(() => {
       const findFire = characters.filter(f => f.type === 'fire')
       if(findFire.length > 0) {
        setFire(findFire)
       } 

       const findWater = characters.filter(f => f.type === 'water')
       if(findWater.length >= 0) {
        setWater(findWater)
       } 

       const findEarth = characters.filter(f => f.type === 'earth')
       if(findEarth.length >= 0) {
        setEarth(findEarth)
       } 

       const findAir = characters.filter(f => f.type === 'air')
       if(findAir.length >= 0) {
        setAir(findAir)
       } 

    }, [characters])

    return (
        <div>
            <h2>Clans</h2>
            <Modal
                openModal={openModal}
                setOpenModal={setOpenModal}
                fire={fire}
                water={water}
                earth={earth}
                air={air}
            />
            <div className="clans">
                <div className="fire" onClick={() => setOpenModal('fire')}>
                    <h5>Fire Clan</h5>
                    <p>Members: {fire.length}</p>
                </div>

                <div className="water" onClick={() => setOpenModal('water')}>
                    <h5>Water Clan</h5>
                    <p>Members: {water.length}</p>
                </div>

                <div className="earth" onClick={() => setOpenModal('earth')}>
                    <h5>Earth Clan</h5>
                    <p>Members: {earth.length}</p>
                </div>

                <div className="air" onClick={() => setOpenModal('air')}>
                    <h5>Air Clan</h5>
                    <p>Members: {air.length}</p>
                </div>
            </div>
        </div>
    )
}