const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("reviews").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});
//returns all the reviews
router.get("/", async (request, response) => {
  try {
    console.log("api/reviews");
    const reviews = await knex("reviews").select("*");
    response.json(reviews);
  } catch (error) {
    response.status(500).end();
    throw error;
  }
});
// add new review
router.put("/:id", async (request, response) => {
  try {
    const updateReview = await knex("reviews")
      .where({ id: request.params.id })
      .update(request.body, ["id", ...Object.keys(request.body)]);
    response.json(updateReview);
  } catch (error) {
    throw error;
  }
});
//get review by Id
router.get("/:id", async (request, response) => {
  try {
    const review = await knex("reviews").where({ id: request.params.id });
    response.json(review);
  } catch (error) {
    throw error;
  }
});
module.exports = router;
