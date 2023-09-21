import './App.css';
import events_list from './data/data.json'
import {useState} from 'react';
import EventCard from './EventCard';

function App() {

  
  const uni_name = 'Rutgers'

  const event1 = {
    "@search.score": 1,
    "benefitNames": [
        "Free Food"
    ],
    "branchId": 112385,
    "branchIds": [],
    "categoryIds": [
        "20311"
    ],
    "categoryNames": [
        "Graduate Student Organization Event"
    ],
    "description": "The Nutritional Sciences GSO is hosting this Welcome Back Event for our new and current graduate students to socialize with faculty. We also encourage any graduate students from other programs to attend and learn about our program and have some food! We will be playing some icebreaker games, introducing our new Executive Board, and generally preparing for the new school year. All graduate students are welcome to attend.  This event will be held in the courtyard between the Institute for Food, Nutrition & Health and the Food Science & Nutritional Sciences Building on the Cook/Douglass Campus. ",
    "endsOn": "09/20/2023 06:30 PM",
    "id": "9325310",
    "imagePath": "https://se-images.campuslabs.com/clink/images/9da20153-87ef-409d-86cd-edb2ed0b841e3d2e5242-b306-400f-9a16-62ca3b3c987a.png",
    "index": 0,
    "institutionId": 4753,
    "latitude": "40.479630",
    "location": "Outside IFNH",
    "longitude": "-74.435150",
    "name": "NutriSci GSO Fall Welcome Back Event",
    "organizationId": 326935,
    "organizationIds": [],
    "organizationName": "Nutritional Sciences (Graduate Student Organization)",
    "organizationNames": [],
    "organizationProfilePicture": "a32e2e3a-1490-4a57-87df-6849c19df45601465327-8186-4206-9fda-925131d7609a.jpg",
    "recScore": null,
    "startsOn": "09/20/2023 04:30 PM",
    "status": "Approved",
    "theme": "Social",
    "visibility": "Public"
}

  console.log(typeof(events_list))

  return (
    <div className="App">
      <h1>{uni_name} Events</h1>
      <div className="container">
        <EventCard event1={event1} />
      </div>

    </div>
  );
}

export default App;
