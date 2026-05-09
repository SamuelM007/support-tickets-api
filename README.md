# Support Tickets API

A REST-style API built with **Node.js** and **Express.js**, structured using the **MVC (Model–View–Controller)** pattern. This project simulates a real-world internal support ticketing system and serves as the foundation for a multi-part assignment sequence focused on building, testing, and documenting a production-quality API.

---

## About the Developer

**Name:** Samuel Marchuk 

I'm a student developer learning to build and document REST APIs using Node.js and Express. This project is part of a series of assignments exploring server-side development, HTTP fundamentals, and clean project architecture.

---

## Project Purpose

The goal of this project is to simulate a real-world internal support tickets API. It demonstrates how a backend service is structured, configured, and extended across multiple development phases.

At this stage (**Assignment #2**), the
project extends routes and controllers.

- A clean MVC project structure
- A running Express server
- Environment-based configuration (via `.env`)
- A `/status` health-check endpoint
- Full ticket CRUD endpoints
- Query filtering, sorting, projection

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Architecture:** MVC (Model–View–Controller)
- **Dev Tools:** Nodemon, dotenv

---

## API Endpoints

### `GET /status`

Returns a JSON response confirming the service is online.

**Example Response:**
```json
{
  "status": "ok",
  "service": "support-tickets-api",
  "timestamp": "2025-04-30T12:00:00.000Z"
}
```
  
### `GET /tickets`
Returns all tickets. Supports ?status=,
?priority=, ?assignee=, ?sort=, ?fields=
  
### `GET /tickets/:id`
Returns one ticket. 404 if not found.
  
### `GET /tickets/:id/tags`
Returns tag array. 404 if not found.

---

## Project Structure

```
support-tickets-api/
├── controllers/       # Request handler logic
├── data/              # Dataset modules (tickets.js)
├── models/            # Data models
├── routes/            # Express route definitions
├── views/             # (Reserved for future use)
├── .env               # Environment variables
├── app.js             # Express app setup
└── README.md          # Project documentation
```