import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CatagoriesScreen from "./screens/CatagoriesScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <CatagoriesScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
    // backgroundColor: "#fff",
  },
});
