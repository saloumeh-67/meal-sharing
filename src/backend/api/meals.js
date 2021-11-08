const express = require("express");
const { useDebugValue } = require("react");
const { insert } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    console.log("meals");
    const meals = await knex("meals").select("*");
    response.json(meals);
  } catch (error) {
    throw error;
  }
});
//Adds a new meal
router.post("/", async (request, response) => {
  try {
    const insertMeal = await knex("meals").insert(request.body);
    response.send(`${insertMeal}`);
    console.log(request.body);
  } catch (error) {
    response.status(500).end();
    throw error;
  }
});
//Returns meal by id
router.get("/:id", async (request, response) => {
  try {
    console.log("meals");
    const mealId = await knex("meals").where({ id: request.params.id });
    response.json(mealId);
  } catch (error) {
    console.log(error);
  }
});
//	Updates the meal by id
router.put("/:id", async (request, response) => {
  try {
    console.log("meals");
    const { mealName } = request.body;
    console.log("body", request.body);
    const meals = await knex("meals")
      .update("title", "newFood")
      .where({ id: request.params.id });
    console.log(meals);
    response.status(200).send("meal has been updated");
  } catch (error) {
    console.log(error);
  }
});
//Deletes the meal by id
router.delete("/:id", async (request, response) => {
  try {
    const deleteMeal = await knex("meals")
      .where({ id: request.params.id })
      .delete();
    response.status(200).send("meal has been deleted");
  }catch (error) {
    console.log(error);
    console.log(deleteMeal)
  }
});

module.exports = router;
