import React, { useRef, useState } from "react";

type CharacterType = {
    title: string,
    type: string,
    speed: number,
    strength: number,
    health: number,
    intelligence: number
}

type CreationProps = {
    setCharacter: React.Dispatch<React.SetStateAction<[] | CharacterType[]>>
}

export default function CCreation({ setCharacter} : CreationProps) {
    const [formData, setFormData] = useState({
        title: '',
        type: '',
        speed: 0,
        strength: 0,
        health: 0,
        intelligence: 0
    })
    const [points, setPoints] = useState(100)

    const ref = useRef({
        speed: formData.speed,
        strength: formData.strength,
        health: formData.health,
        intelligence: formData.intelligence
    })


    function handleChange(event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const e = event.target
        setFormData(prevState => {
            return {
                ...prevState,
                [e.name]: e.value
            }
        })
    }

    function handleStatChange(event : React.ChangeEvent<HTMLInputElement>) {
        const e = event.target
        const value: number = e.value
        const stat = event.target.name
        if(event.target.value > ref.current[stat]) {
            //decrease
            const num = value - ref.current[stat]
            let checkPoints = points
            checkPoints -= num
            if(checkPoints <= -1) {
                return
            }
            setPoints(prevState => prevState -= num)
            ref.current[stat] = value
        } else if(event.target.value < ref.current[stat]) {
            //increase
            const num = ref.current[stat] - value 
            setPoints(prevState => prevState += num)
            ref.current[stat] = value
        }
        setFormData(prevState => {
            return {
                ...prevState,
                [e.name]: value
            }
        })
    }

    function handleSubmit(event : React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setCharacter(prevState => {
            return [
                ...prevState,
                formData
            ]
        })
        setFormData({
            title: '',
            type: '',
            speed: 0,
            strength: 0,
            health: 0,
            intelligence: 0
        })
    }

    return (
        <div className="creation">
            <h2>Character Creation</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Name"
                    type='text'
                    onChange={handleChange}
                    value={formData.title}
                    name='title'
                    required
                />
                <select
                    name="type"
                    onChange={handleChange}
                    value={formData.type}
                    required
                >
                    <option className="center" value=''>-- Choose Type --</option>
                    <option value='fire'>Fire</option>
                    <option value='earth'>Earth</option>
                    <option value='air'>Air</option>
                    <option value='water'>Water</option>
                </select>
                <h3>Stat Points: {points}</h3>
                <label htmlFor='speed'>Speed: </label>
                <input 
                    type='number'
                    min='0'
                    max='100'
                    name="speed"
                    value={formData.speed}
                    onChange={handleStatChange}
                />
                <label htmlFor='strength'>Strength: </label>
                <input 
                    type='number'
                    min='0'
                    max='100'
                    name="strength"
                    value={formData.strength}
                    onChange={handleStatChange}
                />
                <label htmlFor='health'>Health: </label>
                <input 
                    type='number'
                    min='0'
                    max='100'
                    name="health"
                    value={formData.health}
                    onChange={handleStatChange}
                />
                <label htmlFor='intelligence'>Intelligence: </label>
                <input 
                    type='number'
                    min='0'
                    max='100'
                    name="intelligence"
                    value={formData.intelligence}
                    onChange={handleStatChange}
                />
                <button className="submitButton">Submit</button>
            </form>
        </div>
    )
}