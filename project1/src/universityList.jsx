const universityList = [
    {
        name: "Đại học Xây Dựng Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.003315,
                lng: 105.843901
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "55 Giải Phóng, Hai Bà Trưng, Hà Nội",
        rating: 4.3,
        user_ratings_total: 1200,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Kinh Tế Quốc Dân",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.000545,
                lng: 105.843116
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "207 Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội",
        rating: 4.1,
        user_ratings_total: 980,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Viện Đại Học Mở Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.001121,
                lng: 105.847896
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "B101 P. Nguyễn Hiền, Bách Khoa, Hai Bà Trưng, Hà Nội 100000, Vietnam",
        rating: 4.0,
        user_ratings_total: 850,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Quốc Gia Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.039021,
                lng: 105.781918
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "144 Xuân Thủy, Cầu Giấy, Hà Nội",
        rating: 4.5,
        user_ratings_total: 987,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Ngoại Thương Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.022995,
                lng: 105.805336
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "91 Chùa Láng, Láng Thượng, Đống Đa, Hà Nội",
        rating: 4.6,
        user_ratings_total: 1100,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Học viện Ngân hàng",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.009066,
                lng: 105.828620
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "12 Chùa Bộc, Quang Trung, Đống Đa, Hà Nội",
        rating: 4.2,
        user_ratings_total: 670,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Trường Đại Học Thương Mại",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.036667,
                lng: 105.775376
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "79 Hồ Tùng Mậu, Mai Dịch, Cầu Giấy, Hà Nội",
        rating: 4.4,
        user_ratings_total: 850,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Sư Phạm Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.037316,
                lng: 105.783432
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "136 Xuân Thủy, Dịch Vọng Hậu, Cầu Giấy, Hà Nội",
        rating: 4.3,
        user_ratings_total: 760,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Giao thông Vận tải",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.028055,
                lng: 105.803504
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "3C Phố Triều Khúc, Thanh Xuân, Hà Nội",
        rating: 4.0,
        user_ratings_total: 1100,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 20.989105,
                lng: 105.795692
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "Km9, Nguyễn Trãi, Thanh Xuân Nam, Thanh Xuân, Hà Nội",
        rating: 4.2,
        user_ratings_total: 450,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Khoa học Tự nhiên - ĐHQGHN",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 20.995790655961144,
                lng: 105.80804436313602
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "334 Nguyễn Trãi, Thanh Xuân, Hà Nội",
        rating: 4.3,
        user_ratings_total: 980,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Bách Khoa Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.006213228083013,
                lng: 105.84316288333339
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "Khu Công nghiệp Bắc Linh, Lĩnh Nam, Hà Nội",
        rating: 4.7,
        user_ratings_total: 1280,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Mở TP.HCM",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 10.777247077049314,
                lng: 106.69007404491408
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "97 Võ Văn Tần, Phường 6, Quận 3, Hồ Chí Minh",
        rating: 4.0,
        user_ratings_total: 550,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Đại học Công nghiệp Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.053911207672467,
                lng: 105.73514971217018
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "Số 298 Đ. Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội",
        rating: 4.1,
        user_ratings_total: 890,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Trường Đại học Kỹ thuật Công nghiệp Thái Nguyên",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 21.54913380627377,
                lng: 105.84491638334472
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "Số 666 Đ. 3/2, P, Thành phố Thái Nguyên, Thái Nguyên",
        rating: 4.0,
        user_ratings_total: 700,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Trường Đại học Cần Thơ",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 10.030039338719341,
                lng: 105.77059383898431
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "Khu II, Đ. 3 Tháng 2, Xuân Khánh, Ninh Kiều, Cần Thơ",
        rating: 4.5,
        user_ratings_total: 900,
        types: ["university", "point_of_interest", "establishment"]
    },
    {
        name: "Trường Đại học Kiến trúc Hà Nội",
        business_status: "OPERATIONAL",
        geometry: {
            location: {
                lat: 20.98069762608494,
                lng: 105.78921926984016
            }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/school-71.png",
        vicinity: "P. Văn Quán, Hà Đông, Hanoi, Vietnam",
        rating: 4.2,
        user_ratings_total: 910,
        types: ["university", "point_of_interest", "establishment"]
    }
];

export default universityList;