// CJS : const { Router } = require("express");
// ESM : import { Router } from "express";

import { Router } from "express"; // { Router, urlencoded, static }
import { mainController } from "./controllers/main.controller.js";
import { levelController } from "./controllers/level.controller.js";
import { quizController } from "./controllers/quiz.controller.js";
import { tagsController } from "./controllers/tags.controller.js";

export const router = Router(); // Export nommé


router.get("/", mainController.home);

router.get("/quiz/:id", quizController.renderQuiz);

router.get('/tags', tagsController.renderTags);

router.get("/levels", levelController.renderLevelsPage);

router.post("/levels", levelController.createLevel);

// export { router }; // Alternativement, pour les exports nommés en fin de fichier
// export default router; // Pour un export "par défaut"

