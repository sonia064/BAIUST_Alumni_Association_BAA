import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Events.css';

function Events() {
  const [showEvents, setShowEvents] = useState(false);
  const [eventsType, setEventsType] = useState('upcoming');

  const handleShowEvents = (type) => {
    setEventsType(type);
    setShowEvents(true);
  };

  // Mock data for different types of events
  const happeningEvents = [
    {
      date: 'January 23, 2024, 08:00 AM',
      descriptionLink: '/eventdetails5',
      imageSrc: '/event6.jpg',
      alt: 'Event 6',
    },
   
    // Add more happening events as needed
  ];

  const expiredEvents = [
    {
      date: 'January 1, 2024, 10:00 AM',
      descriptionLink: '/eventdetails',
      imageSrc: '/event1.jpg',
      alt: 'Event 1',
    },
    {
      date: 'February 15, 2024, 2:30 PM',
      descriptionLink: '/eventdetails1',
      imageSrc: '/event2.jpg',
      alt: 'Event 2',
    },
    {
      date: 'March 30, 2024, 7:00 PM',
      descriptionLink: '/eventdetails2',
      imageSrc: '/event3.jpg',
      alt: 'Event 3',
    },
    {
      date: 'January 1, 2024, 10:00 AM',
      descriptionLink: '/eventdetails3',
      imageSrc: '/event4.jpg',
      alt: 'Event 4',
    },
    {
      date: 'February 15, 2024, 2:30 PM',
      descriptionLink: '/eventdetails4',
      imageSrc: '/event5.jpg',
      alt: 'Event 5',
    },
    // Add more expired events as needed
  ];

  const upcomingEvents = [
    {
      date: 'Not Fixed',
      descriptionLink: '/eventdetails6',
      imageSrc: '/event7.jpg',
      alt: 'Event 7',
    },
    // Add more upcoming events as needed
  ];

  const getEventsByType = () => {
    switch (eventsType) {
      case 'happening':
        return happeningEvents;
      case 'expired':
        return expiredEvents;
      case 'upcoming':
        return upcomingEvents;
      default:
        return [];
    }
  };

  return (
    <div className="events-container">
      <header className="hheader">
        <h1>Events and Seminars</h1>
      </header>
      <main className="mmain">
        <p>
          Welcome to our events and seminars page!
          <br />
          Explore the upcoming events.
        </p>
        <div className="bbuttons-container">
          <button className="event-bbutton" onClick={() => handleShowEvents('happening')}>
            Happening
          </button>
          <button className="event-bbutton" onClick={() => handleShowEvents('expired')}>
            Expired
          </button>
          <button className="event-bbutton" onClick={() => handleShowEvents('upcoming')}>
            Upcoming
          </button>
        </div>

        {showEvents && (
          <div className="events-details">
            <h2>
              {eventsType === 'happening'
                ? 'Happening Events'
                : eventsType === 'expired'
                ? 'Expired Events'
                : 'Upcoming Events'}
            </h2>
            {getEventsByType().map((event, index) => (
              <div className="event" key={index}>
                <div className="event-info">
                  <p>Date and Time: {event.date}</p>
                  <p>
                    <Link to={event.descriptionLink} className="event-link">
                      Event Description
                    </Link>
                  </p>
                </div>
                <img src={event.imageSrc} alt={event.alt} />
              </div>
            ))}
          </div>
        )}
      </main>
      <footer className="ffooter">
        <div className="back">
          <Link to="/">Go Back</Link>
        </div>
        <p>&copy; 2023 Events and Seminars</p>
      </footer>
    </div>
  );
}

export default Events;
