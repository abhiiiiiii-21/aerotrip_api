let flights = [
  {
    id: "1",
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
    id: "2",
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

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(flights);
  } else if (req.method === 'POST') {
    const newFlight = { id: String(Date.now()), ...req.body };
    flights.push(newFlight);
    res.status(201).json(newFlight);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 