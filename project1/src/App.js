import React from "react";
import GoogleMap from "./GoogleMap";
import GoogleMapWithSearch from "./GoogleMapWithSearch";
import MapComponent from "./GoogleMapWithSearch"; // Đường dẫn tới file GoogleMap

const App = () => {
    return (
        <div>
            <h1>Google Maps in React</h1>
            <GoogleMap />
        </div>
    );
};

export default App;
