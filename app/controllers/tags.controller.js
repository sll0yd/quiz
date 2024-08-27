import { Quiz, User, Tag, Question, Level, Answer } from "../models/index.js";

export const tagsController = {
  async renderTags(req, res) {
    const tags = await Tag.findAll({
      include: [
        {
          model: Quiz,
          as: "quizzes",
        },
      ],
    });
    res.render("tags", { tags });
  },
};
