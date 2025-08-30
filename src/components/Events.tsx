import React from 'react';
import { Calendar, MapPin, Users, Clock, ArrowRight } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Weekend Coastal Cruise',
    date: 'Jan 20, 2025',
    time: '9:00 AM',
    location: 'UCSC Campus → Santa Cruz Boardwalk',
    description: 'Leisurely ride along the coast with stops at local cafes',
    attendees: 12,
    difficulty: 'Beginner Friendly'
  },
  {
    id: 2,
    title: 'Mountain Adventure Rally',
    date: 'Jan 27, 2025',
    time: '8:00 AM',
    location: 'UCSC → Big Sur',
    description: 'Epic mountain roads through redwood forests',
    attendees: 8,
    difficulty: 'Intermediate'
  },
  {
    id: 3,
    title: 'Night Lights City Tour',
    date: 'Feb 3, 2025',
    time: '6:00 PM',
    location: 'Campus → Downtown Santa Cruz',
    description: 'Evening ride through the city lights',
    attendees: 15,
    difficulty: 'All Levels'
  }
];

export default function Events() {
  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Upcoming <span className="text-orange-500">Events</span>
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join us for our next adventure on two wheels
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100 overflow-hidden group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-orange-500" />
                    <span className="text-sm font-medium text-slate-600">{event.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-slate-500" />
                    <span className="text-sm text-slate-600">{event.time}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {event.title}
                </h3>

                <div className="flex items-start space-x-2 mb-4">
                  <MapPin className="w-4 h-4 text-slate-500 mt-1 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">{event.location}</span>
                </div>

                <p className="text-slate-700 mb-4 leading-relaxed">{event.description}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-emerald-500" />
                    <span className="text-sm text-slate-600">{event.attendees} going</span>
                  </div>
                  <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-medium">
                    {event.difficulty}
                  </span>
                </div>

                <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>Join Event</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-6">Want to suggest an event or lead a ride?</p>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
            Propose an Event
          </button>
        </div>
      </div>
    </section>
  );
}