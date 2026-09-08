import React, { useState } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";

function CustomImage(props) {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.imageContainer}>
      {loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#3498db" />
        </View>
      )}
      <Image
        source={{ uri: props.uri }}
        style={styles.image}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <CustomImage uri="https://via.placeholder.com/100" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
  },
  imageContainer: {
    position: "relative",
    width: 100,
    height: 100,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.8)",
    zIndex: 1,
  },
});