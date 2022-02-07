import React from 'react'
import { NavLink } from 'react-router-dom'

import './card.css'

const Card = (props) => {

    const confirmDeleteHandler = () => {
        try {
            const response = fetch(
                process.env.REACT_APP_BACKEND_URL + `/${props.route}/${props.oeuvre.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    }
                }
            )
            if(response.ok){
                props.onDelete(props.oeuvre.id)
            }
        } catch (error) {
            console.log(error);
        }
        alert("élément suprrimé")
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
                        <button><NavLink to={`/${props.route}/${props.oeuvre.id}`}>Editer</NavLink></button>
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