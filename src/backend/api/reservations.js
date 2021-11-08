const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("reservations").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});
//Get meals that still has available reservations

module.exports = router;