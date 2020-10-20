import { headerStyles } from "../../components/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardSpacing:       { marginBottom: 16 },
    categoryButton:    { alignSelf: "center" },
    categoryContainer: { padding: 16 },
    container:         {
        flex:       1,
        paddingTop: 16,
    },
    header:                     { ...headerStyles },
    horizontalCardSpacing:      { marginRight: 16 },
    horizontalProjectContainer: { width: 300 },
    horizontalScrollContainer:  {
        paddingLeft:     16,
        paddingVertical: 16,
    },
    imageBackground: {
        alignItems:     "center",
        height:         200,
        justifyContent: "center",
        width:          "100%",
    },
    imageStyle:      { resizeMode: "cover" },
    scrollContainer: { paddingHorizontal: 16 },
    seeAllButton:    {
        paddingHorizontal: 8,
        paddingVertical:   4,
    },
    upcomingContainer: {
        alignItems:        "center",
        flexDirection:     "row",
        justifyContent:    "space-between",
        paddingHorizontal: 16,
    },
});
