import React from 'react';
import { Calendar, MapPin, Route } from 'lucide-react';
import { Event } from '../types/Event';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={event.imageUrl} 
        alt={event.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{event.name}</h3>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="w-4 h-4 mr-2" />
            {event.location}
          </div>
          <div className="flex items-center text-gray-600">
            <Route className="w-4 h-4 mr-2" />
            {event.distance}
          </div>
        </div>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <a
          targer="_blank"
          href={event.registrationUrl}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Register Now
        </a>
      </div>
    </div>
  );
}