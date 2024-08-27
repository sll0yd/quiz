import { Op } from "sequelize";
import { Answer, Level, Question, Quiz, Tag, User } from "./associations.js"; // ATTENTION à l'import !

// ==== USER <--> QUIZ ====

/* 
  SELECT * FROM "user"
  JOIN "quiz"
  ON "user".id = quiz.author_id
  WHERE "user".id = 3;
*/

// Je veux récupérer le user n°3 et les quizzes qu'il a créé
const user3 = await User.findByPk(3, { include: "quizzes" });
console.log(user3.quizzes);
console.log(JSON.stringify(user3.quizzes, null, 2));
console.log(user3.quizzes[0].get());

// Je veux récupérer tous les quizzes et leur auteur associé
const quizzes = await Quiz.findAll({ include: "author" });
console.log(JSON.stringify(quizzes, null, 2));



// ==== Quiz <--> Question ====

const quiz1 = await Quiz.findByPk(1, { include: "questions" });
console.log(JSON.stringify(quiz1, null, 2));

const question42 = await Question.findByPk(42, { include: "quiz" });
console.log(question42.toJSON());


// ==== Question <--> Level ====

// Récupérer la question 3 et son level
const question3 = await Question.findByPk(3, { include: "level"});
console.log(question3.toJSON());

// Récupérer toutes les questions du niveau "Confirmé"
const confirmedLevel = await Level.findOne({
  where: { name: "Confirmé" },
  include: "questions"
});
console.log(confirmedLevel.toJSON());

/*
  SELECT * FROM "level"
  JOIN "question"
  ON level.id = question.level_id
  WHERE level.name = 'Confirmé'
  ;

*/


// ==== Question <--> Answer ====
const filmQuestions = await Question.findAll({ // Donne moi LES 3 premières (findAll + limit) les questions dont la "description" comporte (Op.like) le mot film (%like%)
  where: {
    description: {
      [Op.like]: "%film%"
    },
  },
  include: "answers",
  limit: 3
});
console.log(JSON.stringify(filmQuestions, null, 2));

/*
  SELECT * FROM "question"
  WHERE description LIKE %film% AND include = "answers"
*/

const answer3 = await Answer.findByPk(3, { include: "question" });
console.log(answer3.toJSON());

// ==== Quiz <-> Tag ====

// Récupérer le quiz 1 avec tous ses tags
const quiz6 = await Quiz.findByPk(6, {
  include: "tags"
});
console.log(JSON.stringify(quiz6, null, 2));

/* 
  Equivalent SQL

  SELECT * FROM "quiz_has_tag"
  JOIN "quiz" ON quiz.id = quiz_has_tag.quiz_id
  JOIN "tag" ON tag.id = quiz_has_tag.tag_id
  WHERE quiz.id = 6;
*/

// Récupère le tag "Gastronomie" et tous les Quiz associés
const gastronomieTag = await Tag.findOne({
  where: { name: "Gastronomie" },
  include: "quizzes"
});
console.log(gastronomieTag.toJSON());
console.log(gastronomieTag.quizzes.length);
