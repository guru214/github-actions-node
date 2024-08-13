# Sample Node.js Application

First of all, rename github to .github. I have removed contents from config.env file and not commiting the mailer functions.

This is a simple Node.js application using Express.js, Mocha for testing, Supertest for API testing, and ESLint for linting. The project also includes a GitHub Actions workflow for CI/CD, which handles linting, testing, and deployment.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Testing](#testing)
- [Linting](#linting)
- [CI/CD](#cicd)

## Installation

### Clone the repository:
    git clone https://github.com/kavyapmmb98/deploymentTest.git    

### Install the dependencies:
    npm install

### Start the application:
    npm start

## Usage

### Running the Application
    npm start

## Endpoints

1. GET / - Returns 'Hello, World!' 
2. GET /details - Returns a list of details
3. POST /details - Adds a new detail

## Testing

### To run the tests,
    npm test


## Linting

### The project uses ESLint for linting. To run the linter,
    npm run lint


## CI/CD

- The project uses GitHub Actions for Continuous Integration and Continuous Deployment. The workflow is defined in the cd.yml file.

### Workflow Steps
    Lint - Runs ESLint to check for linting errors.
    Test - Runs the Mocha tests.
    Deploy - Deploys the application to the server.
    Validate - Ensures that linting, testing, and deployment steps are successful.
    Notify - Sends notifications post validation.
    