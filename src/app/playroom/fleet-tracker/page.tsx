import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import dynamic from 'next/dynamic';

// This is the crucial part. We are dynamically importing our new map component.
// `ssr: false` tells Next.js to NEVER try and render this component on the server.
// `loading` provides a nice fallback for the user while the component loads.
const FleetTrackerMap = dynamic(
  () => import('@/components/playroom/FleetTrackerMap'),
  { 
    ssr: false,
    loading: () => <p style={{ textAlign: 'center', padding: '20px' }}>Loading Interactive Map...</p> 
  }
);

// This page is now a simple, clean "Server Component". It just renders layout
// and tells the browser where to place the client-side map component.
const FleetTrackerPage = () => {
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

        {/* This will render the loading message first, then the map once it's ready on the client */}
        <FleetTrackerMap />
      </div>
    </div>
  );
};

export default FleetTrackerPage;