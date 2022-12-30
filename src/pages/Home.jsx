import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setTrainerGlobal } from '../store/slices/trainer.slice'
import './styles/home.css'
import toast, { Toaster } from 'react-hot-toast';


const Home = () => {

    const negativeNotify = () => toast(
        'Plase put a name'
    )


    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(setTrainerGlobal(e.target.name.value.trim()))
        e.target.name.value = ''
        navigate('/pokedex')
    }

    return (
        <div className='home-container'>
            <div className='home-poke'>
                <img className='img-home' src="/home/logo.png" alt="" />
                <h1 className='title-home' >Hi Trainer!</h1>
                <p className='sub-home'>Give me your name to start</p>
            </div>
            <form className='form-home' onSubmit={handleSubmit}>
                <img className='pikachu-img' src="/home/pica3.png" alt="" />
                <input className='inp-form' id='name' type="text" />
                <button className='btn-home' onClick={negativeNotify}>START</button>
            </form>
            <Toaster
                toastOptions={
                    {
                        classname: ``,
                        style: {
                            border: '1px solid #ff0000',
                            padding: '15px',
                            color: '#ff0000',
                            width: '50%',
                            top: 10,
                        }
                    }

                }
            />

        </div>
    )
}

export default Home