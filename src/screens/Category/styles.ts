import { headerStyles } from "../../components/styles";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    cardSpacing:    { marginBottom: 16 },
    categoryButton: {
        paddingHorizontal: 8,
        paddingVertical:   4,
    },
    container: {
        flex:       1,
        paddingTop: 16,
    },
    header: {
        ...headerStyles,
        marginLeft: 16,
    },
    horizontalCardSpacing:     { marginRight: 8 },
    horizontalScrollContainer: {
        paddingLeft:     16,
        paddingVertical: 16,
    },
    scrollContainer: { paddingHorizontal: 16 },
});
