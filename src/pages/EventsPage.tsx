import React, { useState } from 'react';
import { EventCard } from '../components/EventCard';
import { MonthFilter } from '../components/MonthFilter';
import { events } from '../data/events';

export function EventsPage() {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());

  const filteredEvents = events.filter(
    event => new Date(event.date).getMonth() === selectedMonth
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Ultra Marathon Events</h1>
      
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Filter by Month
        </label>
        <MonthFilter
          selectedMonth={selectedMonth}
          onMonthChange={setSelectedMonth}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
      
      {filteredEvents.length === 0 && (
        <p className="text-center text-gray-600 py-8">
          No events found for the selected month.
        </p>
      )}
    </div>
  );
}