const service = new google.maps.places.PlacesService(mapInstance);
const directionsService = new google.maps.DirectionsService();
const directionsRenderer = new google.maps.DirectionsRenderer();
directionsRenderer.setMap(mapInstance);

const request = {
    location: { lat: 21.0126, lng: 105.8603 },
    radius: 5000,
    keyword: "địa điểm",
};

function searchAndRoute() {
    service.textSeach(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            console.log("Found places:", results);

            // Lưu các địa điểm vào mảng
            const locations = results.map(place => ({
                lat: place.geometry.location.lat(),
                lng: place.geometry.location.lng(),
            }));

            // Tính toán các tuyến đường giữa các địa điểm
            for (let i = 0; i < locations.length - 1; i++) {
                directionsService.route(
                    {
                        origin: locations[i],
                        destination: locations[i + 1],
                        travelMode: google.maps.TravelMode.DRIVING,
                    },
                    (result, status) => {
                        if (status === google.maps.DirectionsStatus.OK) {
                            directionsRenderer.setDirections(result);
                        } else {
                            console.error("Directions request failed:", status);
                        }
                    }
                );
            }
        } else {
            console.error("Places search failed:", status);
        }
    });
}

searchAndRoute();
