import { Quiz, User, Tag } from "../models/index.js";

export const mainController = {
  async home(req, res) {
    
      const quizzes = await Quiz.findAll({
        include: [
          {
            model: User,
            as: 'author', 
          },
          {
            model: Tag,
            as: 'tags', 
          },
        ],
      });
      res.render('home', { quizzes });
   
  },
};