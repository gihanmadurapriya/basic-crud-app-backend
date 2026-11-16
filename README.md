# Basic CRUD App Backend

A simple RESTful API for managing products, built with **Node.js**, **Express**, and **MongoDB** using **Mongoose**.

## Features

- Create a product
- List all products
- Retrieve a product by ID
- Update a product
- Delete a product
- MongoDB persistence with Mongoose

## Tech Stack

- Node.js
- Express 5
- MongoDB
- Mongoose
- Nodemon for development

## Project Structure

```text
.
├── controllers/       # Request handlers for product operations
├── models/            # Mongoose schemas and models
├── routes/            # API route definitions
├── index.js           # Application entry point
├── package.json
└── package-lock.json
```

## Prerequisites

- Node.js 18 or later
- npm
- A running MongoDB instance or MongoDB Atlas connection

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/gihanmadurapriya/basic-crud-app-backend.git
   cd basic-crud-app-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the MongoDB connection used by the application in `index.js`.

4. Start the server:

   ```bash
   npm run serve
   ```

   For development with automatic restarts:

   ```bash
   npm run dev
   ```

The API runs on [http://localhost:4000](http://localhost:4000).

## API Endpoints

All product endpoints use the `/api/products` prefix.

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/products` | Get all products |
| `GET` | `/api/products/:id` | Get a product by ID |
| `POST` | `/api/products` | Create a product |
| `PUT` | `/api/products/:id` | Update a product |
| `DELETE` | `/api/products/:id` | Delete a product |

### Product fields

```json
{
  "name": "Wireless Keyboard",
  "quantity": 10,
  "price": 49.99,
  "image": "https://example.com/keyboard.jpg"
}
```

Example request:

```bash
curl -X POST http://localhost:4000/api/products \\
  -H "Content-Type: application/json" \\
  -d '{"name":"Wireless Keyboard","quantity":10,"price":49.99}'
```

## Health Check

Visit [http://localhost:4000/](http://localhost:4000/) to verify that the server is running.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run serve` | Start the API server |
| `npm run dev` | Start the server with Nodemon |
| `npm test` | Run the test command currently configured in `package.json` |

## License

This project is licensed under the ISC License.
