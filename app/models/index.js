// Annuaire du dossier /models a destination de l'extérieur du dossier
// On va exporter les modèles qui nous serviront hors du dossier Model
// ==> Cacher les détails de l'implémentation du point de vu du "consommateur" des models

import { Answer, Question, Quiz, Level, Tag, User } from "./sequelize/associations.js";

export { Answer, Question, Quiz, Level, Tag, User };
