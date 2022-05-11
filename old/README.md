### Getting started

- To run this app run the following commands:
  - `yarn install`
  - `yarn start`
- Go to http://localhost:3000

### Getting started with docker

- To run using docker compose run the following commands:
  - `docker-compose up --build`
- Go to http://localhost:3000
  - _Note_ - this is mapping to a container that is running the react app, the typical port.

### Why use docker compose?

Docker compose allows for a stable environment for developers to create and develop their app. The environment has a controlled version of node and other dependencies so that developers don't need their own special environment. Thus eliminating the need for special setups.
