import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import Pokecard from '../components/pokedex/Pokecard'
import { useNavigate } from 'react-router-dom'
import Pagination from '../components/pokedex/Pagination'
import './styles/pokedex.css'

const Pokedex = () => {


    const { trainer } = useSelector(state => state)

    const [pokemons, setPokemons] = useState()

    const [types, setTypes] = useState()

    const [typeSelected, setTypeSelected] = useState('All pokemons')

    const navigate = useNavigate()

    useEffect(() => {
        if (typeSelected != "All pokemons") {
            axios.get(typeSelected)
                .then(res => setPokemons(res.data.pokemon.map(e => e.pokemon)))
                .catch(err => console.log(err))
        } else {
            const URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=99999999'
            axios.get(URL)
                .then(res => setPokemons(res.data.results))
                .catch(err => console.log(err))
        }
    }, [typeSelected])

    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/type`
        axios.get(URL)
            .then(res => setTypes(res.data.results))
            .catch(err => console.log(err))
    }, [])


    const handleSubmit = e => {
        e.preventDefault()
        const input = e.target.search.value.trim().toLowerCase()
        navigate(`/pokedex/${input}`)
    }

    const handleChange = e => {
        setTypeSelected(e.target.value)
        setPage(1)
    }

    const [page, setPage] = useState(1)
    const [pokePerPage, setPokePerPage] = useState(14)
    const initialPoke = (page - 1) * pokePerPage
    const finalPoke = page * pokePerPage
    const maxPage = pokemons && Math.ceil(pokemons.length / pokePerPage)

    return (
        <div className='pokedex-container'>
            <h2 className='pokedex-title'> <span className='span-poke'> Welcome {trainer}</span>, here you favorite pokemon </h2>
            <div className='search-pokedex-container'>
                <form className='pokedex-form' onSubmit={handleSubmit}>
                    <input className='pokedex-inp' id='search' type="text" />
                    <button className='pokedex-btn-search'>Search</button>
                </form>
                <select className='pokedex-types' onChange={handleChange}>
                    <option className='pokedex-opt' value='All pokemons'>All Pokemons</option>
                    {
                        types?.map(type => (
                            <option className='pokedex-opt' key={type.url} value={type.url}>{type.name}</option>
                        ))
                    }
                </select></div>
            <div className='pokedex-pagination'>
                <Pagination
                    page={page}
                    maxPage={maxPage}
                    setPage={setPage}
                />
            </div>
            <div className='pokedex-pokecard'>
                {
                    pokemons?.slice(initialPoke, finalPoke).map(poke => (
                        <Pokecard
                            key={poke.url}
                            url={poke.url}

                        />
                    ))
                }
            </div>

        </div>
    )
}

export default Pokedex