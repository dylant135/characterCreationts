import React, { useState } from "react";
import Character from "./Character";

type CharacterType = {
    title: string,
    type: string,
    speed: number,
    strength: number,
    health: number,
    intelligence: number
}

type CharactersProps = {
    characters: {
        title: string,
        type: string,
        speed: number,
        strength: number,
        health: number,
        intelligence: number
    }[],
    setCharacter: React.Dispatch<React.SetStateAction<[] | CharacterType[]>>
}

export default function Characters({ characters, setCharacter} : CharactersProps) {
    const [search, setSearch] = useState('')
    const filteredCharacters = characters.filter(item => {
        const character = item.title
        return character.toLowerCase().includes(search.toLowerCase())
    })


    function deleteCharacter(title : string) {
        const newCharacters = characters.filter(c => c.title !== title)
        setCharacter(newCharacters)
    }

    return (
        <div className="centerBar">
            <h2>Characters</h2>
            <input value={search}
                onChange={e => setSearch(e.target.value)}
                type='search'
                className="searchBar"
                placeholder="Search"
            />

            <div className="characters">
                {filteredCharacters.map(c => {
                    return (
                        <Character
                            title={c.title}
                            type={c.type}
                            speed={c.speed}
                            strength={c.strength}
                            health={c.health}
                            intelligence={c.intelligence}
                            deleteCharacter={deleteCharacter}
                            key={c.title}
                        />
                    )
                })}
            </div>
        </div>
    )
}