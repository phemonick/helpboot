import { Colour } from "../styles";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    cardContainer: {
        backgroundColor: Colour.white,
        borderRadius:    6,
        ...Platform.select({
            android: { elevation: 3 },
            ios:     {
                shadowColor:   "rgb(134,150,167)",
                shadowOffset:  { height: 1, width: 0 },
                shadowOpacity: 0.5,
                shadowRadius:  3,
            },
        }),
    },
    childrenWrapper: { padding: 16 },
    imageStyle:      {
        borderTopLeftRadius:  6,
        borderTopRightRadius: 6,
        resizeMode:           "cover",
        width:                "100%",
    },
});
