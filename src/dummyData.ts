export interface DataProps {
    banner: string;
    title: string;
    startDate: string;
    summary: string;
}

export interface CategoryProps {
    name: string;
}

export default {
    categories: [
        {
            id:    1,
            name: "All",
        },
        {
            id:    2,
            name: "Education",
        },
        {
            id:    3,
            name: "Traffic",
        },
        {
            id:    4,
            name: "Provisions",
        },
    ],
    projects: [
        {
            banner:    "../../assets/images/potholes.png",
            location:  "ladilak",
            startDate: "12th November, 2020",
            summary:   "We are to clean up ladilak We are to clean up " +
                "ladilak We are to clean up ladilak We are to clean up ladilak",
            title: "clean up Ladilak",
        },
        {
            banner:    "../../assets/images/potholes.png",
            location:  "ladilak",
            startDate: "12th November, 2020",
            summary:   "We are to clean up ladilak We are to clean up " +
                "ladilak We are to clean up ladilak We are to clean up ladilak",
            title: "clean up Ladilak",
        },
    ],
};
