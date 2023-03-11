import React, { useState } from "react";
import Character from "./Character";

export default function Characters(props) {
    const [search, setSearch] = useState('')
    const filteredCharacters = props.characters.filter(item => {
        const character = item.title
        return character.toLowerCase().includes(search.toLowerCase())
    })


    function deleteCharacter(title) {
        const newCharacters = props.characters.filter(c => c.title !== title)
        props.setCharacter(newCharacters)
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