import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header_component'>
            <div className='App-header'>
                <img src='https://www.ironhack.com/assets/shared/logo.svg' className='App-logo' alt='logo' />
                <h2>Bienvenue dans le jeu</h2>
            </div>
            <div className='header_list'>
                <Link to='/'>Menu</Link>
                <Link to='/character'>Création personnage</Link>
            </div>
        </header>
    )
}

export default Header