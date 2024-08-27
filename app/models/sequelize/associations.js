// Dans ce fichier, on précise/définie toutes les associations entre nos modèles

import { Answer } from "./answer.model.js";
import { Level } from "./level.model.js";
import { Question } from "./question.model.js";
import { Quiz } from "./quiz.model.js";
import { Tag } from "./tag.model.js";
import { User } from "./user.model.js";

// Documentation : https://sequelize.org/docs/v6/core-concepts/assocs/
// - One-To-One : hasOne + belongsTo
// - One-To-Many : hasMany + belongsTo
// - Many-To-Many : belongsToMany + belongsToMany


// User <--> Quiz
User.hasMany(Quiz, {
  foreignKey: "author_id",
  as: "quizzes" // Alias (facultatif) : permet de simplifier le code de la requête jointe // Le nom de l'attribut sur User qui stocke les quizzes prendra le nom de l'alias
});
Quiz.belongsTo(User, {
  foreignKey: "author_id",
  as: "author" // On choisit la valeur : lorsque je requête un "Quiz", je veux également pouvoir récupérer --> ....
});

// Quiz <--> Question (One-to-Many)
Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
  as: "questions" // "Quand je requête un quiz, je veux pouvoir récupérer : "ses questions"
});
Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
  as: "quiz" // "Quand je récupère une question, je veux pouvoir récupérer les infos de ": "son quiz"
});

// Question <--> Level (One-to-Many)
Level.hasMany(Question, {
  foreignKey: "level_id",
  as: "questions"
});
Question.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level"
});

// Question <--> Answer (One-to-Many)
Question.hasMany(Answer, {
  foreignKey: "question_id",
  as: "answers" // Ou sinon, "propositions" était pas mal aussi comme alias
});
Answer.belongsTo(Question, {
  foreignKey: "question_id",
  as: "question"
});

// Quiz <--> Tag (Many-To-Many)
Quiz.belongsToMany(Tag, {
  through: "quiz_has_tag", // nom de la table de liaison
  foreignKey: "quiz_id", // nom de la clé étrangère de la table de liaison qui pointe vers la table cible (Quiz)
  as: "tags" // Alias
});
Tag.belongsToMany(Quiz, {
  through: "quiz_has_tag",
  foreignKey: "tag_id",
  as: "quizzes"
});


export { Answer, Level, Question, Quiz, Tag, User }; // On exporte tous les modèles de sorte à ce que lorsqu'un fichier importe un modèle, il importe également les assocaitions qu'on définie dans ce fichier
