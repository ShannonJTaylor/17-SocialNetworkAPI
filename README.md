# Social Network API

## Description

This is a RESTful API for a Social Network application that allows users to manage their profiles, thoughts, and friends. It leverages MongoDB as the database and Express.js for routing, providing endpoints for creating, updating, retrieving, and deleting users and thoughts. This API also supports managing friendships and adding reactions to thoughts.

---

## Walk-Through Video




---

## Table of Contents

-[Features](#features)
-[TechnologiesUsed](#technologies_used)
-[Setup](#setup)
-[Routes](#routes)
-[ExampleRequests](#example_requests)
-[Testing](#testing)
-[Troubleshooting](#troubleshooting)
-[License](#license)
-[Contributing](#contributing)



## Features

- **User Management**:
  - Create, update, delete users
  - Retrieve all users or a specific user by ID
  - Add or remove friends
  
- **Thought Management**:
  - Create, update, delete thoughts
  - Retrieve all thoughts or a specific thought by ID
  - Add or remove reactions to thoughts

  ---

## Technologies Used

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (NoSQL database)
  - Mongoose (ODM for MongoDB)
  
- **Utilities**:
  - dotenv (for environment variable management)

  ---

## Setup

### Prerequisites

Before you can run this project locally, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (>=v14)
- [MongoDB](https://www.mongodb.com/try/download/community) (locally or use MongoDB Atlas)

### Installing

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/social-network-api.git
    cd social-network-api
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file at the root of the project and add your MongoDB URI:
    ```
    MONGODB_URI=mongodb://localhost/social_network_db
    PORT=3001
    ```

4. Start the server:
    ```bash
    npm start
    ```

Your API will be available at `http://localhost:3001`.

---

## Routes

### Users

- `GET /api/users`: Get all users
- `POST /api/users`: Create a new user
- `GET /api/users/:id`: Get a user by ID
- `PUT /api/users/:id`: Update a user by ID
- `DELETE /api/users/:id`: Delete a user by ID
- `POST /api/users/:userId/friends/:friendId`: Add a friend
- `DELETE /api/users/:userId/friends/:friendId`: Remove a friend

### Thoughts

- `GET /api/thoughts`: Get all thoughts
- `POST /api/thoughts`: Create a new thought
- `GET /api/thoughts/:id`: Get a thought by ID
- `PUT /api/thoughts/:id`: Update a thought by ID
- `DELETE /api/thoughts/:id`: Delete a thought by ID
- `POST /api/thoughts/:thoughtId/reactions`: Add a reaction to a thought
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought

---

## Example Requests

### Create a User
- **Method**: POST
- **Endpoint**: `/api/users`
- **Body**:
    ```json
    {
        "username": "john_doe",
        "email": "john@example.com"
    }
    ```

### Get All Users
- **Method**: GET
- **Endpoint**: `/api/users`

### Add a Friend
- **Method**: POST
- **Endpoint**: `/api/users/:userId/friends/:friendId`

### Create a Thought
- **Method**: POST
- **Endpoint**: `/api/thoughts`
- **Body**:
    ```json
    {
        "thoughtText": "This is my first thought!",
        "username": "john_doe",
        "userId": "userIdHere"
    }
    ```
---

## Testing

Use Postman or Insomnia to test the API endpoints. For testing purposes, you can use the following mock data for a user:

- `userId`: `63c1c67b0f1b2c4e56dbf8e1` (replace with a valid MongoDB ObjectId)
- `friendId`: `63c1c67b0f1b2c4e56dbf8e2` (replace with another valid MongoDB ObjectId)

---

## Troubleshooting

- **Error: Cannot connect to MongoDB**: Ensure MongoDB is running locally or connected to your cloud database (e.g., MongoDB Atlas).
- **Error: 'User not found'**: Double-check the user ID in the request URL.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a pull request

---

**Made with ❤️ by [[ShannonJTaylor](https://github.com/ShannonJTaylor)]**
