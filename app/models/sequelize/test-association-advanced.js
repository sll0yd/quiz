import { Quiz, User } from "./associations.js"; // ATTENTION, import depuis le fichier d'associations !

// === Récupérer plusieurs tables jointes ===
// Récupérer le quiz 1 avec ses questions + son auteur
const quiz1 = await Quiz.findByPk(1, {
  include: ["questions", "author"],
});
console.log(quiz1.toJSON());

// Question : Récupérer tous les Quiz de "Chuck"
const quizzesOfChuck = await Quiz.findAll({
  include: { association: "author", where: { firstname: "Chuck" } }
});
console.log(JSON.stringify(quizzesOfChuck, null, 2));


// === Récupérer tables jointes en cascade ===
// Question : récupérer Chuck, ses quizzes et les tags de ses quizzes en 1 seule requête 
const chuck = await User.findOne({
  where: { firstname: "Chuck"},
  include: { association: "quizzes", include: "tags" }
});
console.log(chuck.toJSON());
console.log(JSON.stringify(chuck, null, 2));



// include: "quizzes"
// include: ["quizzes"]
// include: { association: "quizzes" }

// Question : récupèrer 5 quizzes, filtré par ordre alphabétique du titre, et avec leurs questions (seulement le champ "description" de la question)

const quizzes = await Quiz.findAll({
  limit: 5,
  order: [["title", "ASC"]],
  include: { association: "questions", attributes: ["description"] },
});
console.log(JSON.stringify(quizzes, null, 2));

