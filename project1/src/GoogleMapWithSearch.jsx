import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MapComponent from './MapComponent'; // Bản đồ tùy chỉnh

const GoogleMapWithSearch = () => {
    const API_KEY = 'AIzaSyBJwRIxqw_Zt-CQl43AhlspHtK5YVcgV7o';
    const LOCATION = '21.006382,105.851604'; // Tọa độ trung tâm quận Hai Bà Trưng
    const RADIUS = 5000; // Bán kính 5km

    // const [places, setPlaces] = useState([]);
    // const [route, setRoute] = useState(null);

    // Lấy danh sách các trường cấp 3
    useEffect(() => {
        const fetchPlaces = async () => {
            try {
                const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${LOCATION}&radius=${RADIUS}&keyword=trường+cấp+3&key=${API_KEY}`;
                const response = await axios.get(url);
                const data = response.data.results.map(place => ({
                    name: place.name,
                    location: place.geometry.location
                }));
                // setPlaces(data);
            } catch (error) {
                console.error('Lỗi khi lấy danh sách trường cấp 3:', error);
            }
        };

        fetchPlaces();
    }, []);

    // Hàm lấy tuyến đường giữa hai địa điểm
    const fetchRoute = async (origin, destination) => {
        try {
            const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}&key=${API_KEY}`;
            const response = await axios.get(url);
            // setRoute(response.data.routes[0]); // Lấy tuyến đường đầu tiên
        } catch (error) {
            console.error('Lỗi khi lấy tuyến đường:', error);
        }
    };

    // Hàm xử lý tính toán tuyến đường
    // const handleRouteCalculation = async () => {
    //     if (places.length >= 2) {
    //         const origin = places[0].location; // Điểm bắt đầu
    //         const destination = places[1].location; // Điểm kết thúc
    //         await fetchRoute(origin, destination);
    //     } else {
    //         alert('Không đủ địa điểm để tính toán tuyến đường.');
    //     }
    // };

    return (
        <div>
            {/*<h1>Google Maps API - Tìm kiếm và tính toán</h1>*/}
            {/*<button onClick={handleRouteCalculation}>Tính toán tuyến đường</button>*/}

            {/*/!* Hiển thị danh sách trường cấp 3 *!/*/}
            {/*<ul>*/}
            {/*    {places.map((place, index) => (*/}
            {/*        <li key={index}>*/}
            {/*            {place.name} - ({place.location.lat}, {place.location.lng})*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}

            {/*/!* Hiển thị bản đồ *!/*/}
            {/*<MapComponent places={places} route={route} />*/}
        </div>
    );
};
export default GoogleMapWithSearch;
