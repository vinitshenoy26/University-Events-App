import React from 'react'


const EventCard = ( {event} ) => {

return(
    <div className="event_card">
        <div>
            <p>{event.name}</p>
        </div>
        <div>
            <img src={event.imagePath} alt={event.name}></img>
        </div>
        <div>
            <p>{event.description}</p>
        </div>
        <div>
            <p>{event.startsOn} - {event.endsOn}</p>
        </div>
    </div>
    )   
}

export default EventCard;