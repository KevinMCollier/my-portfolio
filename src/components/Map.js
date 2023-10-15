import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current, // Container element
      style: 'mapbox://styles/mapbox/streets-v12', // Style URL
      center: [139.7174347, 35.633422], // Longitude and latitude of your favorite restaurant
      zoom: 15 // Zoom level
    });

    const marker1 = new mapboxgl.Marker()
      .setLngLat([139.7174347, 35.633422])
      .addTo(map);

    // Add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on component unmount
    return () => map.remove();
  }, []);


  return (

    <section id="map" className="relative">
      <div ref={mapContainer} style={{ width: '450px', height: '300px', margin: 'auto', position: 'relative' }}></div>
    </section>
  );
}
