# EXPRESS-CRUD

## Project Overview
EXPRESS-CRUD is a full-stack project designed to help understand and implement the concepts of deploying a backend, frontend, and database as separate entities. This project serves as a learning tool to grasp the fundamentals of Express.js for backend development, Next.js for frontend development, and MySQL for database management.

The primary goal of this project is to test the ability to deploy and integrate these components independently while ensuring seamless communication between them.

---

## Features
- **Backend**: Built with Express.js to handle API requests and manage CRUD operations.
- **Frontend**: Developed using Next.js to provide a modern and responsive user interface.
- **Database**: MySQL is used to store and manage application data.
- **Separation of Concerns**: Each component (backend, frontend, and database) is deployed and managed independently.

---

## Technologies Used
- **Backend**: 
  - [Express.js](https://expressjs.com/) - A minimal and flexible Node.js web application framework.
  - [MySQL](https://www.mysql.com/) - A relational database management system.
  - [dotenv](https://www.npmjs.com/package/dotenv) - For environment variable management.
  - [cors](https://www.npmjs.com/package/cors) - To handle cross-origin requests.

- **Frontend**:
  - [Next.js](https://nextjs.org/) - A React-based framework for building modern web applications.

- **Development Tools**:
  - [Nodemon](https://www.npmjs.com/package/nodemon) - For automatic server restarts during development.

---

## Project Structure
```
.
├── backend                  # Backend server
│   ├── config               # Configuration files
│   ├── controllers          # Route controllers
│   ├── middleware           # Custom middleware
│   ├── models               # Database models
│   ├── routes               # API routes
│   ├── .env                 # Environment variables
│   ├── server.js            # Entry point for the backend
│   └── package.json         # Backend dependencies and scripts
│
├── frontend                 # Frontend application
│   ├── components           # React components
│   ├── pages                # Next.js pages
│   ├── public               # Static files
│   ├── styles               # CSS styles
│   ├── .env                 # Environment variables
│   ├── next.config.js       # Next.js configuration
│   └── package.json         # Frontend dependencies and scripts
│
├── docker-compose.yml       # Docker Compose file for multi-container setup
├── README.md                # Project documentation
└── package.json             # Root package.json for shared dependencies
```

---

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js and npm installed on your machine.
- MySQL server installed and running.
- Docker and Docker Compose installed (optional, for containerized setup).

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/express-crud.git
   ```
   
2. Navigate to the project directory
   ```bash
   cd express-crud
   ```

3. Install backend dependencies
   ```bash
   cd backend
   npm install
   ```

4. Install frontend dependencies
   ```bash
   cd frontend
   npm install
   ```

5. Set up environment variables
   - Create a `.env` file in the `backend` and `frontend` directories from the provided `.env.example` files.
   - Update the variables with your configuration.

6. (Optional) Set up Docker containers
   ```bash
   docker-compose up -d
   ```

### Usage

- To run the backend server
  ```bash
  cd backend
  npm start
  ```

- To run the frontend application
  ```bash
  cd frontend
  npm run dev
  ```

- To access the application, open your browser and navigate to `http://localhost:3000`.

---

## Contributing
Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for more information.

---

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments
- [Express.js](https://expressjs.com/) - For the web framework.
- [Next.js](https://nextjs.org/) - For the React framework.
- [MySQL](https://www.mysql.com/) - For the database management system.
- [Docker](https://www.docker.com/) - For containerization (optional).
