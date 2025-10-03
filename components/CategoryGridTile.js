import { Pressable, View, Text, Platform, StyleSheet } from "react-native";

const CategoryGridTile = ({ title, color }) => {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttonContainer,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer,{backgroundColor: color}]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    // elevation is for android
    elevation: 4,
    // ios' shadow need to add background color
    backgroundColor: "white",
    // for ios' shadow
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // button press animation
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
    //del
    // borderWidth: 5,
    // borderColor: 'red'
  },
  buttonPressed: {
    opacity: Platform.OS === "ios" ? 0.5 : 1,
  },
  buttonContainer: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    // justifyContent: 'flex-start',
    alignItems: "center",
    // alignItems: "flex-start",
    shadowRadius: 8,
    borderRadius: 8,
    // del
    // borderWidth: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
});
