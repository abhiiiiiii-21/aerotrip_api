# Flight API

A simple RESTful API for managing a list of flights using Node.js and Express. Data is stored in-memory.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the server:
   ```bash
   npm start
   ```

   The server will run at [http://localhost:3000](http://localhost:3000)

## API Endpoints

### Get all flights
- **GET** `/flights`

### Get a single flight by ID
- **GET** `/flights/:id`

### Add a new flight
- **POST** `/flights`
  - Body (JSON):
    ```json
    {
      "airline": "string",
      "flightNumber": "string",
      "departureAirport": "string",
      "departureCity": "string",
      "departureTerminal": "string",
      "departureGate": "string",
      "departureTime": "string",
      "departureDate": "string",
      "arrivalAirport": "string",
      "arrivalCity": "string",
      "arrivalTerminal": "string",
      "arrivalGate": "string",
      "arrivalTime": "string",
      "arrivalDate": "string",
      "status": "string"
    }
    ```

### Update a flight
- **PUT** `/flights/:id`
  - Body: Same as POST (any fields to update)

### Delete a flight
- **DELETE** `/flights/:id`

## Notes
- Data is not persisted; restarting the server will reset the flight list.
- Returns appropriate HTTP status codes for each operation. 