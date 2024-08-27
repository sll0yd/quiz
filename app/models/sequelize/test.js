// === CE FICHIER EST UNIQUEMENT A BUT PEDAGOGIQUE POUR VOUS MONTRER LES POSSIBILITES DE SEQUELIZE ===
// En pratique, les requêtes seront faites directement par les controlleurs, en réponse à une demande de nos utilisateurs pour récupérer les données en BDD

import { Op } from "sequelize";
import { Level } from "./level.model.js";
import { User } from "./user.model.js";


// =================
// ===== Level =====
// =================

// ==== .findAll() ===
const levels = await Level.findAll();
console.log(levels);

// ==== .findAll({ limit }) ===
// SELECT * FROM "level" LIMIT 2;
const twoLevels = await Level.findAll({ limit : 2 });
console.log(twoLevels.length); // 2

// === .findAll({ where }) === 
// SELECT * FROM "level" WHERE "name" = 'Difficile' OR "name" = 'Moyen';
const searchedLevels = await Level.findAll({
  where: {
    [Op.or]: [{ name: "Difficile" }, { name: "Moyen" }],
  }
});
console.log(searchedLevels);


// ================
// ===== User =====
// ================

// ==== .findAll() ====
const users = await User.findAll();
console.log(users); // [User{}, User{}, User{}]

// Dans l'optique de se débug
console.log(JSON.stringify(users, null, 2));


// ==== .findByPk() ====
const user3 = await User.findByPk(3); // PK = primary key
console.log(user3); // User{}


const user52 = await User.findByPk(52);
console.log(user52); // null

// ==== .findOne() ===
const randomUser = await User.findOne();
console.log(randomUser);


// ==== .findOne({ where }) ====
const chuck = await User.findOne({
  where: { email: "chuck@oclock.io" } // SELECT * FROM "user" WHERE "email" = 'chuck@oclock.io';
}); 
console.log(chuck);

// ==== .findOne({ where }) ====

const chuckBis = await User.findOne({
  where: { email: "chuck@oclock.io", id: 3 } // SELECT * FROM "user" WHERE "email" = 'chuck@oclock.io' AND "id" = 3;
});
console.log(chuckBis);


// ==== .findAll({ attributes }) ====

// SELECT "firstname", "email" FROM "user";
const usersWithFewAttributes = await User.findAll({ attributes: ["firstname", "email"] });
console.log(JSON.stringify(usersWithFewAttributes, null, 2));


// ==== .findAll({ order }) ===

// SELECT * FROM "user" ORDER BY "email" DESC;

const usersOrderedByEmail = await User.findAll({ order: [["email", "ASC"]] /* , limit: 2, attributes: ["email", "lastname"] */ });
console.log(JSON.stringify(usersOrderedByEmail, null, 2));




// ==================
// ===== CREATE =====
// ==================

// 2 manières : 

// - une avec une méthode d'instance
const harry = new User({
  firstname: "Harry",
  lastname: "Potter",
  email: "harry@hogwarts.io",
  password: "12345678"
});
await harry.save();
console.log(harry.id);

// - une avec une méthode de classe
const hermione = await User.create({
  firstname: "Hermione",
  lastname: "Granger",
  email: "hermione@hogwarts.io",
  password: "12345678"
});
console.log(hermione);


// ==================
// ===== DELETE =====
// ==================

// Avec la méthode d'instance
await hermione.destroy();

// Avec la méthode de classe
await User.destroy({ where: { id: harry.id }});


// ==================
// ===== UPDATE =====
// ==================

// En modifiant directement l'instance
const voldy = await User.create({
  firstname: "Tom",
  lastname: "Jedusor",
  email: "voldy@darkmage.io",
  password: "IL0v3Serpentard"
});

voldy.email = "voldy@dark-magic.io"; // OU :  voldy.set("email"; "voldy@dark-magic.io")
voldy.password = "4v4dakedavra!"; // OU :     voldy.set("password"; "4v4dakedavra!")
await voldy.save(); // Persister les changements en BDD

// Equivalent surement moins pratique :
// await User.update({ firsntame: "Voldemort" }, { where: { id: voldy.id }});

