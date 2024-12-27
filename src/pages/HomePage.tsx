import React from 'react';
import { Link } from 'react-router-dom';
import { EventCard } from '../components/EventCard';
import { events } from '../data/events';
import { Calendar } from 'lucide-react';

export function HomePage() {
  const currentMonth = new Date().getMonth();
  const currentMonthEvents = events.filter(
    event => new Date(event.date).getMonth() === currentMonth
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Ultra Marathon Events</h1>
        <Link
          to="/events"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          View All Events
          <Calendar className="ml-2 w-5 h-5" />
        </Link>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">Events This Month</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentMonthEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
      {currentMonthEvents.length === 0 && (
        <p className="text-center text-gray-600 py-8">
          No events scheduled for this month.
        </p>
      )}
    </div>
  );
}