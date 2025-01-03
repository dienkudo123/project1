import React, { useEffect, useRef, useState } from "react";
import loader from "./Loader"; // Import singleton loader

const GoogleMap = () => {
  const mapRef = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    loader
        .load()
        .then(() => {
          const google = window.google;

          // Tạo bản đồ
          const mapInstance = new google.maps.Map(mapRef.current, {
            center: { lat:  37.419734,
              lng: -122.0827784 }, // Tọa độ trung tâm
            zoom: 15,
          });
          setMap(mapInstance);

          // Dữ liệu tuyến đường
          const encodedPolyline = "ipkcFfichVnP@j@BLoFVwM{E?";

          // Giải mã polyline
          const decodedPath = google.maps.geometry.encoding.decodePath(encodedPolyline);

          // Hiển thị tuyến đường
          new google.maps.Polyline({
            path: decodedPath, // Đường đi đã giải mã
            geodesic: true,
            strokeColor: "#FF0000", // Màu đường đi
            strokeOpacity: 1.0,
            strokeWeight: 4,
            map: mapInstance,
          });
        })
        .catch((error) => {
          console.error("Google Maps API failed to load:", error);
        });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "500px" }} />;
};

export default GoogleMap;
