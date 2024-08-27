import { Quiz, User, Tag, Question, Level, Answer } from "../models/index.js";

export const quizController = {
  async renderQuiz(req, res) {
    const quiz = await Quiz.findByPk(req.params.id, {
      include: [
        {
          model: Question,
          as: "questions",
          include: [
            { model: Level, as: "level" },
            { model: Answer, as: "answers" },
          ],
        },
        {
          model: Tag,
          as: "tags",
        },
        {
          model: User,
          as: "author",
        },
      ],
    });
    res.render("quiz", { quiz });
  },
};
