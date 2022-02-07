import React, { useState } from 'react'

import SearchBox from '../search-box/search-box'
import CardList from '../card-list/card-list'

import './items.css'

let films = [
     {
         id : 1,
         auteur: "Walt Disney",
         annee: 2019,
         titre: "Le roi lion",
         imageUrl: "https://static.lpnt.fr/images/2019/07/16/19108136lpw-19124527-embed-libre-jpg_6361494.jpg"
     },
     {
         id : 2,
         auteur: "JM Poiré",
         annee: 1993,
         titre: "Les Visiteurs",
         imageUrl: "https://img-4.linternaute.com/A6LpT1yY1z0TbLKubTGdv71SlGw=/820x546/smart/b088f1722e354d779ce7fe0fc0aab349/ccmcms-linternaute/11399217.jpg"
     },
     {
         id : 3,
         auteur: "Francis Veber",
         annee: 1998,
         titre: "Le dîner de cons",
         imageUrl: "https://fr.web.img6.acsta.net/medias/nmedia/18/36/10/96/19649758.jpg"
     },
     {
         id : 5,
         auteur: "James Cameron",
         annee: 2009,
         titre: "Avatar",
         imageUrl: "https://www.fanactu.com/medias/james-cameron-donne-des-nouvelles-des-suites-d-avatar_7647/james-cameron-donne-des-nouvelles-des-suites-d-avatar-desktop-236135.jpg"
     },
     {
         id : 6,
         auteur: "C Colombus",
         annee: 2001,
         titre: "Harry Potter à l’école des sorciers",
         imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/Affichefilm_HP1.jpg/revision/latest?cb=20120819063135&path-prefix=fr"
     }
]

const Films = () => {
    //Déclaration de la variable searchField en tant que STATE
    const [searchField, setSearchField] = useState('')
    //autre exemple
    //const [maRecherche, setMaRecherche] = useState("ma valeur par défaut")

const onSearchChange = event => {
    //Mise à jour de searchField
    setSearchField(event.target.value)
}

//Filtre les éléments selon ce qui est saisie dans searchField
const filteredFilms = films.filter(film => 
        film.titre.toLowerCase().includes(searchField.toLowerCase())  
    )

    
return(
    <div className="root-item" >
    
    {/* Affichage de la SearchBox et passage de fonction de recherche onSearchChange à l'enfant */}
    <SearchBox onSearch={onSearchChange} />

    {/* Affichage du CardList et passage de la liste filtrée des éléments */}
    <CardList oeuvres={filteredFilms} route="films" />
    </div>
)
}

export default Films;