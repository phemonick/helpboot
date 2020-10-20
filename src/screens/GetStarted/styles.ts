import { Colour } from "../../components/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        alignItems:      "center",
        backgroundColor: Colour.white,
        flex:            1,
        justifyContent:  "space-between",
    },
    btn: {
        alignSelf:       "center",
        backgroundColor: Colour.primary,
        borderRadius:    5,
        marginBottom:    32,
        paddingBottom:   15,
        paddingLeft:     60,
        paddingRight:    60,
        paddingTop:      15,
    },
    buttonText: {
        color:      Colour.offWhite,
        fontSize:   24,
        fontWeight: "bold",
    },
    container: {
        alignItems:      "center",
        backgroundColor: Colour.white,
        flex:            1,
        justifyContent:  "center",
    },
    description: {
        fontSize:   20,
        fontWeight: "400",
    },
    descriptionContainer: { alignItems: "center" },
    image:                {
        height:    250,
        marginTop: "30%",
        width:     450,
    },
});
