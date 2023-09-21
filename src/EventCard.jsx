import React from 'react'


const EventCard = ( {event1} ) => {

return(
    <div className="event_card">
        <div>
            <p>{event1.name}</p>
        </div>
        <div>
            <img src={event1.imagePath} alt={event1.name}></img>
        </div>
        <div>
            <p>{event1.description}</p>
        </div>
    </div>
    )   
}

export default EventCard;