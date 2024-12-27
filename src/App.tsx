import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, Calendar } from 'lucide-react';
import { HomePage } from './pages/HomePage';
import { EventsPage } from './pages/EventsPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Link>
                <Link
                  to="/events"
                  className="flex items-center text-gray-900 hover:text-blue-600"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  All Events
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;