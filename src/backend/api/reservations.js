const express = require("express");
const router = express.Router();
const knex = require("../database");
const {request,response}=require("express");

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = await knex("reservations").select("title");
    response.json(titles);
  } catch (error) {
    throw error;
  }
});
//Returns all reservations
router.get("/", async (request, response) => {
  try {
    console.log("api/reservations");
    const reservations = await knex("reservations").select("*");
    response.json(reservations);
  } catch (error) {
    response.status(500).end();
    throw error;
  }
});
//Adds a new reservation
router.post("/", async (request, response) => {
  try {
    const newReservation = await knex("reservations").insert(request.body);
    response.json(newReservation);
  } catch (error) {
    response.status(500).end();
    throw error;
  }
});
//Returns reservations by Id
router.get("/:id", async (request, response) => {
  try {
    const reservation = await knex("reservations").where({
      id: request.params.id,
    });
    response.json(reservation);
  } catch (error) {
    throw error;
  }
});
//Updates the reservation by id
router.put("/:id", async (request, response) => {
  try {
    const updateReservation = await knex("reservations")
      .where({ id: request.params.id })
      .update(request.body, ["id", ...Object.keys(request.body)]);
    response.json(updateReservation);
  } catch (error) {
    throw error;
  }
});
//Deletes the reservation by id
router.delete("/:id", async (request, response) => {
  try {
    const deleteReservation = await knex("reservations")
      .where({ id: request.params.id })
      .delete();
    response
      .status(200)
      .send(`Reservation with id = ${request.params.id} was deleted`);
  } catch (error) {
    throw error;
  }
});

module.exports = router;
