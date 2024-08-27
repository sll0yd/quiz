import { Answer } from "./answer.model.js";
import { Question } from "./question.model.js";
import { Quiz } from "./quiz.model.js";
import { Tag } from "./tag.model.js";


// ---- TAG -----

// .findByPk() --> {}
const firstTag = await Tag.findByPk(1);
console.log(firstTag); // { id:3 }
console.log(JSON.stringify(firstTag, null, 2));
console.log(firstTag.get());


// .findAll() --> [{}]
const allTagsWithId3 = await Tag.findAll({ // [{ id: 3 }]
  where: { id: 3 }
});
console.log(allTagsWithId3);


// .findOne() --> {}
const searchedTag = await Tag.findOne({ // { id: 3 }
  where: { id: 3 }
});
console.log(searchedTag);


// ----- Question -----
const questions = await Question.findAll();
console.log(questions.length);


// ----- Quiz -----
const quizzes = await Quiz.findAll({ limit: 3 });
console.log(quizzes.length);

// ----- Answer ------

// await Answer.create({ description: "C'est l'heure de la pause", is_valid: true });
const answers = await Answer.findAll();
console.log(answers.length);
