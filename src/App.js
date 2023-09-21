import './App.css';
import events_list from './data/data.json'
import EventCard from './EventCard';
import Dropdown from './Dropdown';

function App() {

  const uni_name = 'Rutgers'
  
  return (
    <div className="App">
      <h1 className="header">{uni_name} Events</h1>

      <div className='dropdown-uni'>
        <Dropdown />
      </div>

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
