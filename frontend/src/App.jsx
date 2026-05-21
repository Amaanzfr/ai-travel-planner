import { useState } from "react";
import axios from "axios";

export default function App() {
  const [form, setForm] = useState({
    destination: "",
    days: "",
    budget: "",
    interests: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const generateTrip = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/plan-trip", form);
      setResult(res.data.itinerary);
    } catch (err) {
      console.log(err);
      setResult("Backend not ready yet.");
    }
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>AI Travel Planner ✈️</h1>

      <input name="destination" placeholder="Destination" onChange={handleChange} />
      <br /><br />

      <input name="days" placeholder="Days" onChange={handleChange} />
      <br /><br />

      <input name="budget" placeholder="Budget" onChange={handleChange} />
      <br /><br />

      <input name="interests" placeholder="Interests" onChange={handleChange} />
      <br /><br />

      <button onClick={generateTrip}>
        Generate Trip
      </button>

      <hr />

      <pre>{result}</pre>
    </div>
  );
}