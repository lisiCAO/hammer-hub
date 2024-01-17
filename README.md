# Hammer-Hub

## Overview

Hammer-Hub is a full-stack web application for online auctions. It utilizes a Node.js/Express backend with a React frontend, all containerized using Docker for easy setup and deployment. This application allows users to view auctions, place bids, and add new auctions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [MySQL](https://www.mysql.com/) (if running the database outside Docker)

### Installing

A step by step series of examples that tell you how to get a development environment running:

1. **Clone the repository**

    ```bash
    git clone https://github.com/yourusername/hammer-hub.git
    cd hammer-hub
    ```

2. **Set up the backend**

    Navigate to the `backend` directory and install dependencies:

    ```bash
    cd backend
    npm install
    ```

3. **Set up the frontend**

    Navigate to the `frontend` directory and install dependencies:

    ```bash
    cd ../frontend
    npm install
    ```

4. **Run the application using Docker**

    From the root directory of the project, run:

    ```bash
    docker-compose up --build
    ```

    This command builds and starts the containers needed for the backend, frontend, and database.

### Accessing the Application

- The frontend is accessible at `http://localhost:80`
- The backend API is accessible at `http://localhost:3000`

## Running the Tests

Coming soon！

## Built With

- [React](https://reactjs.org/) - The web framework used for the frontend.
- [Node.js](https://nodejs.org/) - Backend runtime environment.
- [Express](https://expressjs.com/) - Backend web application framework.
- [MySQL](https://www.mysql.com/) - Database used for storing auction data.
- [Docker](https://www.docker.com/) - Containerization platform.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

- **CAO, Lisi** - *Initial work* - [lisiCAO](https://github.com/lisiCAO)

See also the list of [contributors](https://github.com/yourusername/hammer-hub/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc
