import { Level } from "../models/index.js";


export const levelController = {
  async renderLevelsPage(req, res) {
    const levels = await Level.findAll();
    
    res.render("levels", { levels });
  },

  async createLevel(req, res) {
    const { name } = req.body;

    const level = new Level({ name: name });
    await level.save();

    res.redirect("/levels");
  }
};

