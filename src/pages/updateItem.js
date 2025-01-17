import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'

import './updateItem.css';

const itemUpdateSubmitHandler = event => {
  console.log("Validation formulaire")
  console.log(event)
}

const UpdateItem = props => {

  //Création d'un State pour chaque propriété du formulaire
  const [form, setForm] = useState({
    titre: "",
    annee: "",
    auteur: "",
    imageUrl: "",
    comm: ""
  })

  // Création d'un State de gestion des erreurs de saisie du formulaire
  const [errors, setErrors] = useState({});
  //    const [oeuvre, setOeuvre ]= useState({});
  const myOeuvreId = useParams().oeuvreId;
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      let response = await fetch(process.env.REACT_APP_BACKEND_URL + '/musiques' + myOeuvreId
      );
      response = await response.json();
      setForm(response.musique);
    }
    fetchData();
  }, [myOeuvreId])

  const itemUpdateSubmitHandler = async (event) => {
    event.preventDefault();
    async function updateData(props) {
      try {
        await fetch(process.env.REACT_APP_BACKEND_URL + `/${props.route}/${myOeuvreId}`,
          {
            method: "PATCH",
            header: {
              'content-type': 'application/json',
            },
            body: JSON.stringify({
              titre: form.titre,
              annee: form.annee,
              auteur: form.auteur,
              imageUrl: form.imageUrl,
              comm: form.comm
            })
          }
  
        )
      } catch (err) {
        console.log(err);
      }
      history.push('/musiques');
    }updateData();
  }
  
  //Gestion de la maj de chaque propriété du formulaire
  const handleChange = event => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
    // console.log(form)
    handleValidation(event.target.name)
  }

  const handleValidation = (itemToControl) => {
    let errors = {};
    let isFormValid = true;

    if (!itemToControl || itemToControl === "titre") {
      if (!form.titre) {
        isFormValid = false;
        errors.titre = "Le titre doit être renseigné!";
      } else if (typeof form.titre !== undefined) {
        if (!form.titre.match(/^[0-9a-zA-Z\- ]+$/)) {
          isFormValid = false;
          errors.titre = "Ne doit contenir que des lettres ou des chiffres!";
        }
      }
    }

    if (!itemToControl || itemToControl === "annee") {
      if (!form.annee) {
        isFormValid = false;
        errors.annee = "L'année doit être renseignée!";
      } else if (typeof form.annee !== undefined) {
        if (!form.annee.match(/^[0-9]+$/)) {
          isFormValid = false;
          errors.annee = "Ne doit contenir que des chiffres sur 4 caractères!";
        }
      }
    }

    if (!itemToControl || itemToControl === "auteur") {
      if (!form.auteur) {
        isFormValid = false;
        errors.auteur = "L'auteur doit être renseigné!";
      } else if (typeof form.auteur !== undefined) {
        if (!form.auteur.match(/^[a-zA-Z\- ]+$/)) {
          isFormValid = false;
          errors.auteur = "Ne doit contenir que des lettres!";
        }
      }
    }

    if (!itemToControl || itemToControl === "comm") {
      if (!form.auteur) {
        isFormValid = false;
        errors.auteur = "Ceci n'est pas un commentaire valide!";
      } else if (typeof form.auteur !== undefined) {
        if (!form.auteur.match(/^[A-Za-z0-9 ]+$/)) {
          isFormValid = false;
          errors.auteur = "Ne doit contenir aucun caracteres speciaux!";
        }
      }
    }

    // if (!itemToControl || itemToControl === "imageUrl") {
    //   if (!form.imageUrl) {
    //     isFormValid = false;
    //     errors.imageUrl = "L'url de l'image doit être renseignée!";
    //   }
    //   else if (typeof form.imageUrl !== undefined) {
    //     if (!form.imageUrl.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)) {
    //       isFormValid = false;
    //       errors.imageUrl = "Ne doit contenir que des lettres ou des chiffres!";
    //     }
    //   }
    // }

    setErrors(errors);
    return isFormValid;
  };

  return (
    <div className="div-tag">
      <form className="form-tag" onSubmit={itemUpdateSubmitHandler} >
        <h3>Ajouter un document</h3>

        <label htmlFor="titre" className="label-tag">
          Titre: <span>*</span>
        </label>
        <input
          type="text"
          id="titre"
          name="titre"
          className="input-tag"
          placeholder="Renseigner le titre"
          value={form.titre}
          onChange={(e) => handleChange(e)}

        />
        <span className="error-tag">{errors.titre}</span>

        <label htmlFor="annee" className="label-tag">
          Année: <span>*</span>
        </label>
        <input
          type="text"
          id="annee"
          name="annee"
          className="input-tag"
          placeholder="Renseigner l'année"
          value={form.annee}
          onChange={(e) => handleChange(e)}

        />
        <span className="error-tag">{errors.annee}</span>

        <label htmlFor="auteur" className="label-tag">
          Auteur: <span>*</span>
        </label>
        <input
          type="text"
          id="auteur"
          name="auteur"
          className="input-tag"
          placeholder="Renseigner l'auteur"
          value={form.auteur}
          onChange={(e) => handleChange(e)}

        />
        <span className="error-tag">{errors.auteur}</span>

        <label htmlFor="imageUrl" className="label-tag">
          Url de l'image: <span>*</span>
        </label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          className="input-tag"
          placeholder="Renseigner l'url de l'image"
          value={form.imageUrl}
          onChange={(e) => handleChange(e)}

        />
        <label htmlFor="comm" className="label-tag">
          commentaire: <span>*</span>
        </label>
        <input
          type="text"
          id="comm"
          name="comm"
          className="input-tag"
          placeholder="Donnez votre avis :"
          value={form.comm}
          onChange={(e) => handleChange(e)}

        />
        <span className="error-tag">{errors.imageUrl}</span>

        {/* <br/><br/> */}
        <button type="submit" className="button-tag">Valider</button>
      </form>
    </div>
  )
}

export default UpdateItem