import { Colour } from "../../components/styles";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    authAction: {
        alignItems:     "center",
        flexDirection:  "row",
        justifyContent: "space-between",
        marginTop:      30,
    },
    body: {
        flex:              1,
        justifyContent:    "space-between",
        marginTop:         32,
        paddingHorizontal: 20,
    },
    btn: {
        alignItems:      "center",
        backgroundColor: Colour.primary,
        borderRadius:    6,
        marginTop:       "auto",
        paddingBottom:   15,
        paddingLeft:     60,
        paddingRight:    60,
        paddingTop:      15,
        width:           "100%",
    },
    container:   { flex: 1 },
    description: {
        fontSize:     24,
        marginBottom: 40,
        marginTop:    20,
    },
    inputContainerStyle: {
        backgroundColor: Colour.offWhite,
        borderRadius:    5,
        height:          50,
    },
    largeText: { fontSize: 24 },
    logo:      {
        alignItems:      "center",
        backgroundColor: Colour.primary,
        borderRadius:    40,
        height:          80,
        justifyContent:  "center",
        width:           80,
    },
    logoText: {
        color:    Colour.white,
        fontSize: 24,
    },
    signUpBtn: {
        backgroundColor: Colour.primary,
        borderRadius:    6,
        paddingBottom:   10,
        paddingLeft:     40,
        paddingRight:    40,
        paddingTop:      10,
    },
    signUpBtnText: {
        fontSize:   24,
        fontWeight: "bold",
    },
    skipText: {
        color:    Colour.offWhite,
        fontSize: 22,
    },
    spaceBotom: { marginBottom: 20 },
});
