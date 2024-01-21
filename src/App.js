import './App.css';
import events_list from './assets/data.json'
import uni_abbr from './assets/uni_abbr.json'
import EventCard from './components/EventCard';
import SearchBar from './components/SearchBar';
import React, {useState} from 'react'
import axios from 'axios'; 



function App() {

  const [uni_name, setUniName] = useState('Rutgers');
  useState(events_list.data || []);

  const updateDataForUniversity = (universityAbbreviation) => {
    axios
      .post('http://localhost:5000/updateData', { universityName: universityAbbreviation })
      .then((response) => {
        console.log('Data updated successfully');
        setUniName(universityAbbreviation); 
      })
      .catch((error) => {
        console.error('Error updating data:', error);
      });
  };
  
  return (
    <div className="App">
      <h1 className="header">{uni_name} Events</h1>

      <SearchBar placeholder='Enter a University' 
                 data={uni_abbr}
                 onUniversityClick={updateDataForUniversity}/>

      {
        events_list.data?.length > 0
          ? (
            <div className="container">
              {events_list.data.map((event) => (
                <EventCard event={event}/>
              ))}
            </div>
          ) : (
            <div>
              <h2>No Events for this University Found</h2>
            </div>
          )
      }
    </div>
  );
  
}

export default App;
