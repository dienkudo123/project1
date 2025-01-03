import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyBJwRIxqw_Zt-CQl43AhlspHtK5YVcgV7o", // Thay bằng API key của bạn
    libraries: ["places","geometry"], // Thêm libraries nếu cần
    version: "weekly", // Đặt phiên bản cố định
});

export default loader;
