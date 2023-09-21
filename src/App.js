import './App.css';
import events_list from './data/data.json'
import uni_abbr from './data/uni_abbr.json'
import EventCard from './EventCard';
import Dropdown from './Dropdown';

function App() {

  const uni_name = 'Rutgers'
  
  return (
    <div className="App">
      <h1 className="header">{uni_name} Events</h1>

      <div className='dropdown'>
            <div className='relative'>
                <input type="text" 
                className='uni_input'
                placeholder='Search for a university...'
                />

                <div className='absolute'>
                {uni_abbr.map((uni) => (
                  <Dropdown uni={uni}/>
                ))}
                </div>
            </div>
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
