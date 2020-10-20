import { Colour, headerStyles } from "../styles";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: Colour.white,
        padding:         16,
        ...Platform.select({
            android: { elevation: 3 },
            ios:     {
                shadowColor:   "rgb(134,150,167)",
                shadowOffset:  { height: 3, width: 0 },
                shadowOpacity: 0.5,
                shadowRadius:  1,
            },
        }),
    },
    formTitle: {
        ...headerStyles,
        fontSize:  20,
        marginTop: 8,
    },
    icon:          { fontSize: 40 },
    iconContainer: { padding: 4 },
    stepTitle:     { fontSize: 22 },
});
