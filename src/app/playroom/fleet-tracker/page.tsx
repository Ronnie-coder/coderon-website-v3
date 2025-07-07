// src/app/playroom/fleet-tracker/page.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { faker } from '@faker-js/faker';
import L from 'leaflet';

// --- Dynamically import map components to avoid SSR issues ---
import dynamic from 'next/dynamic';
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });

import 'leaflet/dist/leaflet.css';

// Define the structure for a truck
interface Truck {
  id: number;
  lat: number;
  lng: number;
}

// Function to create a custom HTML icon for our trucks
const createTruckIcon = () => {
  return L.divIcon({
    className: 'truck-icon',
    iconSize: [20, 10],
  });
};

const FleetTrackerPage = () => {
  const [trucks, setTrucks] = useState<Truck[]>([]);

  // Initialize trucks on component mount
  useEffect(() => {
    const initialTrucks: Truck[] = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      // Coordinates constrained to South Africa
      lat: faker.number.float({ min: -34, max: -22 }),
      lng: faker.number.float({ min: 18, max: 32 }),
    }));
    setTrucks(initialTrucks);
  }, []);

  // Set up an interval to move the trucks
  useEffect(() => {
    const interval = setInterval(() => {
      setTrucks(currentTrucks => 
        currentTrucks.map(truck => ({
          ...truck,
          lat: truck.lat + faker.number.float({ min: -0.01, max: 0.01 }),
          lng: truck.lng + faker.number.float({ min: -0.01, max: 0.01 }),
        }))
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="c-page-container">
      <Link href="/playroom" className="c-dashboard-back-link">
        <FaArrowLeft />
        Back to Playroom
      </Link>
      
      <div className="c-tracker">
        <div className="c-tracker__header">
          <h1 className="c-tracker__title">Live Fleet Tracker</h1>
          <p className="c-tracker__subtitle">A real-time demo showcasing dynamic data on an interactive map with Leaflet.js.</p>
        </div>

        <div className="c-tracker__map-container">
          <MapContainer center={[-29.0, 24.0]} zoom={5} style={{ height: '100%', width: '100%' }} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {trucks.map(truck => (
              <Marker 
                key={truck.id} 
                position={[truck.lat, truck.lng]} 
                icon={createTruckIcon()}
              />
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default FleetTrackerPage;