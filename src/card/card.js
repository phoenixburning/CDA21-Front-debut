import React from 'react'
import { NavLink } from 'react-router-dom'

import './card.css'

const Card = (props) => {

    const confirmDeleteHandler = () => {
        alert("élément suprrimé")
        console.log("élément suprrimé")
    }

    return (
        <div className="card-container">
            <img
                alt="Oeuvre"
                className="image"
                src={props.oeuvre.imageUrl}
            />
            <h2>{props.oeuvre.titre}</h2>
            <p>
                {props.oeuvre.auteur} - {props.oeuvre.annee}
            </p>
            <div className="card-item__actions">
                <ul>
                    <li>
                        <button><NavLink to="/maj">Editer</NavLink></button>
                    </li>
                    <li>
                        <button onClick={confirmDeleteHandler}>Supprimer</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Card