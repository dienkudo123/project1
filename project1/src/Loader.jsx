import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyBJwRIxqw_Zt-CQl43AhlspHtK5YVcgV7o",
    libraries: ["places","geometry"],
    version: "weekly",
});

export default loader;
