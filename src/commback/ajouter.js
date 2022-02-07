import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import SearchBox from '../search-box/search-box'
import CardList from '../card-list/card-list'

import './items.css'

const Musiques = () => {
    //Déclaration de la variable searchField en tant que STATE
    const [searchField, setSearchField] = useState('');
    const [searchFieldAuteur, setSearchFieldAuteur] = useState('');
    const [musiques, setMusique] = useState([]);
    //autre exemple
    //const [maRecherche, setMaRecherche] = useState("ma valeur par défaut")

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + '/musiques/',
            {
                methode: "GET",
                headers:
                {
                    "content-type": "application/json",
                }
            }
        ).then((res) => {
            if (res.status !== 200 && res.status !== 201) {
                throw new Error("Erreur de statut");
            } else {
                return res.json();
            }
        }
        ).then((res) => {
            setMusique(res.musiques);
        }
        ).catch(error => {
            console.log(error);
        })
    }, [])

    const onSearchChange = (event) => {
        //Mise à jour de searchField
        setSearchField(event.target.value)
        //(event.target.value)
    }

    const onSearchAuteurChange = (event) => {
        //Mise à jour de searchField
        setSearchFieldAuteur(event.target.value)
        //(event.target.value)
    }

    //Filtre les éléments selon ce qui est saisie dans searchField
    const filteredMusiques = musiques.filter((musique) =>
        musique.titre.toLowerCase().includes(searchField.toLowerCase())
    )

    //Filtre les éléments selon ce qui est saisie dans searchField
    const filteredMusiquesBis = filteredMusiques.filter((musique) =>
        musique.auteur.toLowerCase().includes(searchFieldAuteur.toLowerCase())
    )

    const itemDeleteHandler = (deleteItemId) => {
        setMusique((prevMusiques) => {
            prevMusiques.filter((musique) => musique.id !== deleteItemId);
        }
        )
    }


    return (<div className="root-item" >

        {/* Affichage de la SearchBox et passage de fonction de recherche onSearchChange à l'enfant */}
        <SearchBox onSearch={onSearchChange} message="Rechercher un titre" />
        <SearchBox onSearch={onSearchAuteurChange} message="Rechercher un auteur" />

        <button type="submit" className="root_item_button"><Link to="/musique/new">Ajouter</Link></button>


        {/* Affichage du CardList et passage de la liste filtrée des éléments */}
        <CardList onDeleteItem={itemDeleteHandler} oeuvres={filteredMusiquesBis} route="musiques" />
    </div>
    )
}
export default Musiques;