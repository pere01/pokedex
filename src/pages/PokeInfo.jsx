import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './styles/pokeInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const PokeInfo = () => {

    const [pokemon, setPokemon] = useState()

    const { id } = useParams()


    useEffect(() => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
        axios.get(URL)
            .then(res => setPokemon(res.data))
            .catch(err => console.log(err))
    }, [id])

    return (
        <div className='pokeInfo-container'>

            <header className={`poke-info__header bg-${pokemon?.types[0].type.name}`}>
                <img className='poke-info__sprite' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
            </header>
            <h2 className='pokeInfo__id' >#{pokemon?.id}</h2>
            <h1 className='pokeInfo__name'>{pokemon?.name}</h1>
            <div className='pokeInfo__label'>
                <h4 className='span__div'>Weight</h4>
                <h4 className='span__div'>Height</h4>
                <div className='pokeInfo__div'>{pokemon?.weight} </div>
                <div className='pokeInfo__div'>{pokemon?.height}</div>
            </div>
            <div className='list-container__poke'>
                <ul className='pokeInfo__list-type'>
                    <h3 className='title-type'>Type</h3>
                    {
                        pokemon?.types.map(type => (
                            <li className={`type-list_name bg-${pokemon?.types[0].type.name}`} key={type.type.name}> {type.type.name}</li>
                        ))
                    }
                </ul>
                <ul className='pokeInfo__list-abil'>
                    <h3 className='list__title'>Abilities</h3>
                    {
                        pokemon?.abilities.map(abilitie => (
                            <li className='abil-list_ability' key={abilitie.ability.name}>{abilitie.ability.name}</li>
                        ))
                    }
                </ul>
            </div>


            <section className='pokeInfo__section' >
                <ul className='stats-section'>
                    <h2 className='stats__title' >Stats</h2>
                    <li className='stats__number'>
                        <h3 className='stats__span'>HP</h3>
                        {pokemon?.stats[0].base_stat}/150
                    </li>
                    <div className='stats__item'>
                        <div className='progress-bar'
                            style={{ width: `${(pokemon?.stats[0].base_stat * 100) / 200}%` }}
                        >{pokemon?.stats[0].base_stat}</div>
                    </div>
                    <li className='stats__number'>
                        <h3 className='stats__span'>Attack</h3>
                        {pokemon?.stats[1].base_stat}/150
                    </li>
                    <div className='stats__item' >
                        <div className='progress-bar'
                            style={{ width: `${(pokemon?.stats[1].base_stat * 100) / 200}%` }}
                        >{pokemon?.stats[1].base_stat}</div>
                    </div>
                    <li className='stats__number'>
                        <h3 className='stats__span'>Defense</h3>
                        {pokemon?.stats[2].base_stat}/150
                    </li>
                    <div className='stats__item'>
                        <div className='progress-bar'
                            style={{ width: `${(pokemon?.stats[2].base_stat * 100) / 200}%` }}
                        >{pokemon?.stats[2].base_stat}</div>
                    </div>
                    <li className='stats__number'>
                        <h3 className='stats__span'>Special Attack</h3>
                        {pokemon?.stats[3].base_stat}/150
                    </li>
                    <div className='stats__item'>
                        <div className='progress-bar'
                            style={{ width: `${(pokemon?.stats[3].base_stat * 100) / 200}%` }}
                        >{pokemon?.stats[3].base_stat}</div>
                    </div>
                    <li className='stats__number'>
                        <h3 className='stats__span'>Special Defense</h3>
                        {pokemon?.stats[4].base_stat}/150
                    </li>
                    <div className='stats__item'>
                        <div className='progress-bar'
                            style={{ width: `${(pokemon?.stats[4].base_stat * 100) / 200}%` }}
                        >{pokemon?.stats[4].base_stat}</div>
                    </div>
                    <li className='stats__number'>
                        <h3 className='stats__span'>Speed</h3>
                        {pokemon?.stats[5].base_stat}/150
                    </li>
                    <div className='stats__item'>
                        <div className='progress-bar'
                            style={{ width: `${(pokemon?.stats[5].base_stat * 100) / 200}%` }}
                        >{pokemon?.stats[5].base_stat}</div>
                    </div>
                </ul>
                <div className='movements-container'>
                    <h2 className='movements__title'>Movements</h2>
                    <ul className='movements-list'>
                        {
                            pokemon?.moves.map(move => (
                                <li className='movemets__item' key={move.move.name} >{move.move.name}</li>
                            ))
                        }</ul>
                </div>
            </section>

        </div>
    )
}

export default PokeInfo