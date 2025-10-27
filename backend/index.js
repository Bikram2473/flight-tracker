import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

app.get("/api/flight/:flightNumber", async (req, res) => {
  const flightNumber = req.params.flightNumber;
  const apiKey = process.env.AVIATIONSTACK_API_KEY;
  const url = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${flightNumber}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.data && data.data.length > 0) {
      const flight = data.data[0];
      res.json({
        flight: flight.flight.iata,
        airline: flight.airline.name,
        from: `${flight.departure.airport} (${flight.departure.iata})`,
        to: `${flight.arrival.airport} (${flight.arrival.iata})`,
        status: flight.flight_status,
        departure_time: flight.departure.scheduled,
        arrival_time: flight.arrival.scheduled,
        lat: flight.live?.latitude,
        lon: flight.live?.longitude,
        altitude: flight.live?.altitude,
        speed: flight.live?.speed_horizontal
      });
    } else {
      res.status(404).json({ message: "Flight not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(4000, () => console.log("✅ Server running on port 4000"));
