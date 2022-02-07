import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//import handleValidation from '../fonction/validate'
import "./updateItem.css";

const NewItem = (props) => {
    const [form, setForm] = useState({
        // id: "__" + Math.random().toString(16).slice(-4),
        // typeItem: "",
        titre: "",
        annee: "",
        auteur: "",
        imageUrl: "",
        Comm: ""
    });

    //  const [errors, setErrors] = useState({});
    const errors = useState({});
    const history = useHistory();
    // console.log(oeuvreId);


    const itemSubmitHandler = async (event) => {
        event.preventDefault();
        // console.log(form.titre);
        async function addData() {
            try {
                await fetch(
                    `http://localhost:5000/api/${props.route}`,
                    {
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            titre: form.titre,
                            annee: form.annee,
                            auteur: form.auteur,
                            imageUrl: form.imageUrl,
                            comm: form.comm
                        })
                    },
                );
            } catch (err) {
                console.log(err.message);
            }
            history.push(`/${props.route}`);
        }
        addData();
        //
        // } catch (err) {}
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
        console.log(form);
        // setOeuvre({
        //   ...oeuvre,
        //   [e.target.name]: e.target.value,
        // });
//           handleValidation(e.target.name);
        // console.log(form);
    };

    // const [submitted, setSubmitted] = useState(false);

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if (handleValidation() === true) {
    //       props.handleClick(form);
    //       // setSubmitted(true);
    //     }
    //   };


    return (
        <div className="div-tag">
            <form className="form-tag" onSubmit={itemSubmitHandler}>
                <h3>Ajouter un document</h3>
                 <label htmlFor="typeItem" className="label-tag">
              Type de de document : 
            </label>
            <div onChange={(e) => handleChange(e)}>
            <input type="radio" value="Musique" name="typeItem" /> Musique
            <input type="radio" value="Film" name="typeItem" /> Film
            <input type="radio" value="jeux" name="typeItem" /> jeux
            </div>

                <label htmlFor="titre" className="label-tag">
                    Titre: <span>*</span>
                </label>
                <input
                    type="text"
                    id="titre"
                    name="titre"
                    className="input-tag"
                    placeholder="Renseigner le titre"
                    // value={form.titre} //{form.name}
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
                    // value={form.annee} //{form.annee}
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
                    // value={form.auteur} //{form.auteur}
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
                    // value={form.imageUrl} //{form.imageUrl}
                    onChange={(e) => handleChange(e)}
                />
                <span className="error-tag">{errors.imageUrl}</span>

                <label htmlFor="imageUrl" className="label-tag">
                    Commentaire: <span></span>
                </label>

                <input
                    type="text"
                    id="comm"
                    name="comm"
                    className="input-tag"
                    placeholder="Renseigner un commentaire"
                    // value={form.imageUrl} //{form.imageUrl}
                    onChange={(e) => handleChange(e)}
                />
                <span className="error-tag">{errors.imageUrl}</span>

                <button type="submit" className="button-tag">
                    Valider
                </button>
            </form>
        </div>
    );
};

export default NewItem;