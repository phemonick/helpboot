export interface DataProps {
    banner: string;
    title: string;
    startDate: string;
    summary: string;
}

export interface CategoryProps {
    id: number;
    title: string;
}

export default {
    categories: [
        {
            id:    1,
            title: "All",
        },
        {
            id:    2,
            title: "Education",
        },
        {
            id:    3,
            title: "Traffic",
        },
        {
            id:    4,
            title: "Provisions",
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
