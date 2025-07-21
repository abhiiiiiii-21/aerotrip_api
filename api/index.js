const express = require('express');
const { v4: uuidv4 } = require('uuid');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Flight API!');
});

// In-memory storage for flights
let flights = [
  {
    id: uuidv4(),
    airline: "Delta Air Lines",
    flightNumber: "DL1234",
    departureAirport: "JFK",
    departureCity: "New York",
    departureTerminal: "4",
    departureGate: "B22",
    departureTime: "10:30",
    departureDate: "2024-07-22",
    arrivalAirport: "LAX",
    arrivalCity: "Los Angeles",
    arrivalTerminal: "5",
    arrivalGate: "C10",
    arrivalTime: "13:45",
    arrivalDate: "2024-07-22",
    status: "On Time"
  },
  {
    id: uuidv4(),
    airline: "United Airlines",
    flightNumber: "UA5678",
    departureAirport: "ORD",
    departureCity: "Chicago",
    departureTerminal: "1",
    departureGate: "A5",
    departureTime: "15:00",
    departureDate: "2024-07-22",
    arrivalAirport: "SFO",
    arrivalCity: "San Francisco",
    arrivalTerminal: "3",
    arrivalGate: "F12",
    arrivalTime: "17:30",
    arrivalDate: "2024-07-22",
    status: "Delayed"
  }
];

// GET /flights - Get all flights
app.get('/flights', (req, res) => {
  res.json(flights);
});

// GET /flights/:id - Get a single flight by ID
app.get('/flights/:id', (req, res) => {
  const flight = flights.find(f => f.id === req.params.id);
  if (!flight) {
    return res.status(404).json({ error: 'Flight not found' });
  }
  res.json(flight);
});

// POST /flights - Add a new flight
app.post('/flights', (req, res) => {
  const {
    airline,
    flightNumber,
    departureAirport,
    departureCity,
    departureTerminal,
    departureGate,
    departureTime,
    departureDate,
    arrivalAirport,
    arrivalCity,
    arrivalTerminal,
    arrivalGate,
    arrivalTime,
    arrivalDate,
    status
  } = req.body;

  // Basic validation (could be expanded)
  if (!airline || !flightNumber || !departureAirport || !arrivalAirport) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newFlight = {
    id: uuidv4(),
    airline,
    flightNumber,
    departureAirport,
    departureCity,
    departureTerminal,
    departureGate,
    departureTime,
    departureDate,
    arrivalAirport,
    arrivalCity,
    arrivalTerminal,
    arrivalGate,
    arrivalTime,
    arrivalDate,
    status
  };
  flights.push(newFlight);
  res.status(201).json(newFlight);
});

// PUT /flights/:id - Update a flight
app.put('/flights/:id', (req, res) => {
  const index = flights.findIndex(f => f.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Flight not found' });
  }
  const updatedFlight = { ...flights[index], ...req.body, id: flights[index].id };
  flights[index] = updatedFlight;
  res.json(updatedFlight);
});

// DELETE /flights/:id - Delete a flight
app.delete('/flights/:id', (req, res) => {
  const index = flights.findIndex(f => f.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Flight not found' });
  }
  flights.splice(index, 1);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Flight API server running at http://localhost:${port}`);
}); 