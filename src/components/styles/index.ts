import { TextStyle } from "react-native";

export const Colour = {
    black:      "#000",
    checkBlue:  "#39F",
    dirtyWhite: "#F6F6F6",
    grey:       "#7C7676",
    lightGrey:  "#f8f8f8",
    magenta:    "#ED6174",
    offWhite:   "#DDE2EB",
    primary:    "#4467B3",
    purpleIsh:  "#393443",
    textColor:  "#373542",
    white:      "#FFFFFF",
};

export const textStyles = {
    color:    Colour.textColor,
    fontSize: 16,
};

export const headerStyles: TextStyle = {
    color:      Colour.textColor,
    fontSize:   18,
    fontWeight: "bold",
};
