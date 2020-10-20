import { StyleSheet, Platform } from "react-native";
import { Colour } from "../styles";

const styles =  StyleSheet.create({
  container: {
    backgroundColor: Colour.white,
    borderTopLeftRadius: 44,
    borderTopRightRadius: 44,
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: Colour.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4
      }
    }),
    shadowRadius: 2,
  },
  scrollContainer: {
    flexGrow: 1,
  }
});

export default styles;
