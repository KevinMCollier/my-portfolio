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

    const marker = new mapboxgl.Marker()
      .setLngLat([139.7174347, 35.633422])
      .addTo(map);

    const popup = new mapboxgl.Popup({ offset: 25 })
      .setText("Address: 123 Tokyo St, Tokyo, Japan");

    marker.setPopup(popup);

    // Add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Clean up on component unmount
    return () => map.remove();
  }, []);


  return (

    <section id="map" className="relative">
      <h2 className="text-center text-l font-bold mb-2">This week's recommendation: Gonzo</h2>
      <div ref={mapContainer} style={{ width: '450px', height: '220px', margin: 'auto', position: 'relative' }}></div>
    </section>
  );
}
