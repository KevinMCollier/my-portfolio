import React, { useEffect, useRef } from "react";
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function Map() {
  const mapContainer = useRef(null);

  useEffect(() => {
    // Initialize the map
    const map = new mapboxgl.Map({
      container: mapContainer.current, // Container element
      style: 'mapbox://styles/mapbox/streets-v11', // Style URL
      center: [-99.220630, 30.071480], // Longitude and latitude of your favorite restaurant
      zoom: 15 // Zoom level
    });

    // Add navigation control (zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add a marker at the specified location
    new mapboxgl.Marker()
      .setLngLat([139.7216, 35.6281])
      .addTo(map);

    // Clean up on component unmount
    return () => map.remove();
  }, []);


  return (

    <section id="map" className="relative">
      <div ref={mapContainer} style={{ width: '50%', height: '300px', margin: 'auto' }}></div>
    </section>
  );
}
