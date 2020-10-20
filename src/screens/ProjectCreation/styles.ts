import { Colour } from "../../components/styles";
import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    borderedInput: {
        backgroundColor: Colour.white,
        borderColor:     Colour.primary,
        borderWidth:     2,
        marginBottom:    16,
    },
    button:        { marginHorizontal: 16 },
    buttonWrapper: {
        flexDirection: "row",
        marginTop:     16,
    },
    container: {
        backgroundColor: Colour.dirtyWhite,
        flex:            1,
    },
    radioButton: {
        backgroundColor: Colour.white,
        borderRadius:    6,
        marginBottom:    12,
        padding:         8,
        ...Platform.select({
            android: { elevation: 2 },
            ios:     {
                shadowColor:   "rgb(134,150,167)",
                shadowOffset:  { height: 1, width: 0 },
                shadowOpacity: 0.3,
                shadowRadius:  1,
            },
        }),
    },
    radioContainer: { padding: 16 },
});
