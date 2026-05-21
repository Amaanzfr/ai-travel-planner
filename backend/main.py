from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TripRequest(BaseModel):
    destination: str
    days: str
    budget: str
    interests: str

@app.post("/plan-trip")
async def plan_trip(trip: TripRequest):
    return {
        "itinerary": f"""
✈️ AI Travel Itinerary for {trip.destination}

Day 1:
Morning: Explore city center
Afternoon: Museums
Evening: Local food

Day 2:
Morning: Guided tours
Afternoon: Shopping
Evening: Relax

Day 3:
Morning: Final sightseeing
Afternoon: Souvenirs
Evening: Departure

💰 Budget: {trip.budget}
🎯 Interests: {trip.interests}
"""
    }