import { Colour, textStyles } from "../styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    checkText: {
        marginLeft: 8,
        ...textStyles,
    },
    checkWrapper: {
        alignItems:     "center",
        borderColor:    Colour.checkBlue,
        borderRadius:   5,
        borderWidth:    2,
        height:         25,
        justifyContent: "center",
        width:          25,
    },
    container: {
        alignItems:    "center",
        flexDirection: "row",
    },
});
