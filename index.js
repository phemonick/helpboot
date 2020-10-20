/**
 * @format
 */
import "react-native-gesture-handler";
import { name as appName } from "./app.json";
import { AppRegistry } from "react-native";
import App from "./src/App";

AppRegistry.registerComponent(appName, () => App);
