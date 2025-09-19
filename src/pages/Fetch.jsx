import React, { useEffect, useState } from 'react'

function Fetch() {
    const [pokemon, setPokemon] = useState([])
    async function fetchData() {
        try {
            const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=80")
            const result = await response.json()
            console.log(result.results)
            setPokemon(result.results)
        } catch (errors) {
            console.error("Check for errors", errors)
        }
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    
    return (
        <div>
            <h1>Pokemon</h1>
            <ul>
                {pokemon.map((p, index) => (
                    <li key={index}>{p.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fetch