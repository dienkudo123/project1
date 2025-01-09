import React, {useEffect, useRef, useState} from "react";
import loader from "./Loader";
import airports from "./data/airports.jsx";
import routes from "./data/routes.jsx";
import distances from "./data/distances.jsx";

const GoogleMap = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState(null);
    const [selectedStart, setSelectedStart] = useState(airports[0]);
    const [selectedEnd, setSelectedEnd] = useState(airports[0]);
    const [output, setOutput] = useState({distance: ''});

    useEffect(() => {
        let dataraw = []
        for (let i = 0; i < routes.length; i++) {
            dataraw.push({u: routes[i][0].index, v: routes[i][1].index, weight: distances[i]});
        }
        const input = {
            n: 10,
            start: selectedStart.index,
            end: selectedEnd.index,
            edges: dataraw,
        }
        console.log(JSON.stringify(input));
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:8080/api/dijkstra', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(input),
                })
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setOutput(data);
            } catch (error) {
            }
        };
        fetchData()
    }, [selectedStart, selectedEnd]);


    useEffect(() => {
        loader
            .load()
            .then(() => {
                const google = window.google;

                const mapInstance = new google.maps.Map(mapRef.current, {
                    center: {lat: 21.0285, lng: 105.8542},
                    zoom: 3,
                });


                setMap(mapInstance);

                routes.forEach((route) => {

                    const polyline = new google.maps.Polyline({
                        path: [
                            {lat: route[0].lat, lng: route[0].lng},
                            {lat: route[1].lat, lng: route[1].lng},
                        ],
                        geodesic: false,
                        strokeColor: "#FF0000",
                        strokeOpacity: 0.8,
                        strokeWeight: 2,
                    });

                    polyline.setMap(mapInstance);
                    const marker = new google.maps.Marker({
                        position: {lat: route[0].lat, lng: route[0].lng},
                        map: mapInstance,
                        title: route[0].name,
                        bool: false
                    });

                    marker.addListener('click', function () {
                        infoWindow.open(mapInstance, marker);
                    });

                    const infoWindow = new google.maps.InfoWindow({
                        content: `<div style="background-color: white; padding: 5px; border-radius: 5px; font-size: 12px; font-weight: bold; color: black;">
                    ${route[0].name}
                  </div>`
                    });


                    const marker1 = new google.maps.Marker({
                        position: {lat: route[1].lat, lng: route[1].lng},
                        map: mapInstance,
                        title: route[1].name,
                    });

                    marker1.addListener('click', function () {
                        infoWindow1.open(mapInstance, marker1);
                    });

                    const infoWindow1 = new google.maps.InfoWindow({
                        content: `<div style="background-color: white; padding: 5px; border-radius: 5px; font-size: 12px; font-weight: bold; color: black;">
                    ${route[1].name}
                  </div>`
                    });
                });

                for (let i = 0; i < output.path.length - 1; i++) {

                    const start = airports.find(airport => airport.index === output.path[i]);
                    const end = airports.find(airport => airport.index === output.path[i + 1]);

                    console.log(start, end);
                    const polyline = new google.maps.Polyline({
                        path: [
                            {lat: start.lat, lng: start.lng},
                            {lat: end.lat, lng: end.lng},
                        ],
                        geodesic: false,
                        strokeColor: "#0000FF",
                        strokeOpacity: 0.8,
                        strokeWeight: 3,
                    });

                    polyline.setMap(mapInstance);
                }

            })
            .catch((error) => {
                console.error("Error loading Google Maps API:", error);
            });
    }, [output]);


    const handleStartChange = (e) => {
        const airport = airports.find((airport) => airport.name === e.target.value);
        setSelectedStart(airport);
    };

    const handleEndChange = (e) => {
        const airport = airports.find((airport) => airport.name === e.target.value);
        setSelectedEnd(airport);
    };
    console.log(output);

    return (
        <div className="mt-2">
            {/* Bảng chọn sân bay đi */}
            <label className="ml-5">
                Điểm đi:
                <select onChange={handleStartChange} value={selectedStart.name}
                        className="border border-black ml-2 mr-5">
                    {airports.map((airport) => (
                        <option key={airport.name} value={airport.name}>
                            {airport.name}
                        </option>
                    ))}
                </select>
            </label>

            {/* Bảng chọn sân bay đến */}
            <label>
                Điểm đến:
                <select onChange={handleEndChange} value={selectedEnd.name} className="border border-black ml-2 mr-5">
                    {airports.map((airport) => (
                        <option key={airport.name} value={airport.name}>
                            {airport.name}
                        </option>
                    ))}
                </select>
            </label>

            {/* Bản đồ */}
            <div ref={mapRef} style={{width: "100%", height: "600px"}} className="mt-5 mb-5"/>

            <a className="ml-10 mb-5 bg-white border border-black py-5 px-5">Đường Đi
                từ {selectedStart.name} đến {selectedEnd.name}: {output.distance / 1000} km</a>
        </div>
    );
};

export default GoogleMap;
