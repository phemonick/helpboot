import { Colour, textStyles } from "../styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardButton: { width: "100%" },
    date:       {
        ...textStyles,
        color:          Colour.purpleIsh,
        fontSize:       14,
        marginVertical: 8,
    },
    location: {
        ...textStyles,
        color:    Colour.grey,
        fontSize: 14,
    },
    summary: {
        ...textStyles,
        color:     Colour.grey,
        fontSize:  14,
        textAlign: "left",
    },
    title: {
        ...textStyles,
        color:          Colour.primary,
        fontWeight:     "500",
        marginVertical: 8,
        textTransform:  "capitalize",
    },
});
