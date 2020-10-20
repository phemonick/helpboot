import { Colour } from "../styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: Colour.lightGrey,
        borderRadius:    6,
        padding:         12,
    },
    input: {
        color:    Colour.textColor,
        fontSize: 18,
    },
});
