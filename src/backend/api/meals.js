const { response } = require("express");
const express = require("express");
const { useDebugValue } = require("react");
const { insert, where } = require("../database");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things.
    const titles = await knex("meals").select("title");
    response.json(titles);
    console.log("in/api/meals");
    const requestQuery = Object.keys(request.query);
    const matchQuery = [];
    requestQuery.some((item) => {
      if (query.includes(item)) {
        matchQuery.push(item);
      }
    });
    const getMeals = await knex("meals");
    const { maxPrice, title, createdAfter, limit, availableReservations } =
      request.query;
    getMeals = reserved.filter((meal) => {
      if (meal.max_number_of_guests > meal.reserved || meal.reserved === null) {
        return meal;
      }
    });
    // maxPrice	Get meals that has a price smaller than maxPrice	Number	/api/meals?maxPrice=90
    if (maxPrice) {
      getMeals = getMeals.filter((meal) => meal.price < parseInt(maxPrice));
    }
    // title	Get meals that partially match a title.
    if (title) {
      const matchingTitles = title.toLowerCase();
      getMeals = getMeals.filter((meal) =>
        meal.title.toLowerCase().includes(matchingTitles)
      );
    }
    // createdAfter	Get meals that has been created after the date.
    if (createdAfter) {
      getMeals = getMeals.filter(
        (meal) => new Date(meal.createdAt) > new Date(createdAfter)
      );
    }
    // limit	Only specific number of meals	Number
    if (limit) {
      getMeals = getMeals.slice(0, Number(limit));
    }
    if (getMeals < 1) {
      return response.status(200).json({ Message: "No meals found" });
    } else {
      //	Respond with the json for all the meals
      response.json(getMeals);
      response.status(400).json({ error: "request not exist" });
    }
  } catch (error) {
    throw error;
  }
});

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things.
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
  } catch (error) {
    console.log(error);
    console.log(deleteMeal);
  }
});
module.exports = router;
