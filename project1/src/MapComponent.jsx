import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import GoogleMapWithSearch from "./GoogleMapWithSearch";
const MapComponent = ({ places, route }) => {
    return (
        <MapContainer center={[21.0278, 105.8542]} zoom={13} style={{ height: '500px' }}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {places.map((place, index) => (
                <Marker position={[place.lat, place.lng]} key={index}>
                    <Popup>{place.name}</Popup>
                </Marker>
            ))}
            {route && <Polyline positions={route} color="blue" />}
        </MapContainer>
    );
};
export default MapComponent;