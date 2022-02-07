
const checkModule = (itemToControl, checkInput, formule) => {
    let errors = {};
    let isFormValid = true;
    const [form] = {
        // id: "__" + Math.random().toString(16).slice(-4),
        // typeItem: "",
        titre: "",
        annee: "",
        auteur: "",
        imageUrl: "",
        Comm: ""
    };

    if (!itemToControl || itemToControl === checkInput) {
        if (!form.titre) {
            isFormValid = false;
            errors.titre = "Le champs " + checkInput + " doit être renseigné!";
        } else if (typeof form.titre !== undefined) {
            if (!form.titre.match(formule)) {
                isFormValid = false;
                errors.titre = "Format non valide";
            }
        }
    }
    //    setErrors(errors);
    return isFormValid;

}

const handleValidation = (itemToControl) => {

    let errors = {};
    const [form] = {
        // id: "__" + Math.random().toString(16).slice(-4),
        // typeItem: "",
        titre: "",
        annee: "",
        auteur: "",
        imageUrl: "",
        Comm: ""
    };
    
    let isFormValid = checkModule(itemToControl, form.titre, "");
    // if (!itemToControl || itemToControl === "annee") {
    //   if (!form.annee) {
    //     isFormValid = false;
    //     errors.annee = "L'année doit être renseignée!";
    //   } else if (typeof form.annee !== undefined) {
    //     if (!form.annee.match(/^[0-9]+$/)) {
    //       isFormValid = false;
    //       errors.annee = "Ne doit contenir que des chiffres sur 4 caractères!";
    //     }
    //   }
    // }

    if (!itemToControl || itemToControl === "auteur") {
        if (!form.auteur) {
            isFormValid = false;
            errors.auteur = "L'auteur doit être renseigné!";
        } else if (typeof form.auteur !== undefined) {
            if (!form.auteur.match()) {
                isFormValid = false;
                errors.auteur = "Ne doit contenir que des lettres!";
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

};
handleValidation("x", "titre", "/^[0-9a-zA-Z\- ]+$/");
handleValidation("x", "annee", "/^[0-9]+$/");
handleValidation("x", "auteur", "/^[a-zA-Z\- ]+$/")

export default handleValidation;
