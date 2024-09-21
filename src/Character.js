import React, { Component } from 'react';
import './App.css';

class Character extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: '',
            tmpName: "", //nom temporaire
            strenght: 10,
            health: 10,
        };
    }

    handleChange = (event) => {
        this.setState({name:event.target.value})
    }

    submitForm(event) {
        event.preventDefault()
        this.setState({name: this.state.tmpName})
    }

    render() {
        return (
            <div className='App'>
                <from className="character_form">
                    <div className='charater_form_group'>
                        <label htmlFor='name'>Nom de votre personnage</label>
                        <input htmlFor="name" id='name' type='text' value={this.state.name} onChange={(event) => this.handleChange(event)} placeholder='John Doe'>
                        </input>
                        <button className='app_button' onClick={(event) => this.submitForm(event)}>
                            Valider
                        </button>
                    </div>
                </from>
                <p>Bonjour {this.state.name}, bienvenue dans l'aventure. Vous avez {this.state.health} points de vie, ainsi que {this.state.strenght} points de force pour commencer l'aventure.</p>
            </div>

        )
    }
}

export default Character;

