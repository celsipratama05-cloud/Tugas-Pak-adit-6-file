import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [mode, setMode] = useState("Light");

  const isLight = mode === "Light";

  return (
    <View style={[styles.container, isLight ? styles.lightBackground : styles.darkBackground]}>
      <Text style={[styles.title, isLight ? styles.lightText : styles.darkText]}>
        {mode} Mode
      </Text>
      
      <View style={styles.buttonGroup}>
        <TouchableOpacity
          onPress={() => setMode("Light")}
          style={[
            styles.modeButton,
            isLight ? styles.activeLight : styles.inactiveLight,
          ]}
        >
          <Text style={[styles.buttonText, isLight ? styles.activeText : styles.inactiveText]}>
            ☀️ Light
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setMode("Dark")}
          style={[
            styles.modeButton,
            !isLight ? styles.activeDark : styles.inactiveDark,
          ]}
        >
          <Text style={[styles.buttonText, !isLight ? styles.activeText : styles.inactiveText]}>
            🌙 Dark
          </Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.previewBox, isLight ? styles.lightBox : styles.darkBox]}>
        <Text style={[styles.previewText, isLight ? styles.lightText : styles.darkText]}>
          Preview Content
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    alignItems: "center",
  },
  lightBackground: {
    backgroundColor: "#f5f6fa",
  },
  darkBackground: {
    backgroundColor: "#1a1a2e",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 40,
    marginBottom: 30,
  },
  lightText: {
    color: "#2c3e50",
  },
  darkText: {
    color: "#f0f0f0",
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 30,
  },
  modeButton: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginHorizontal: 8,
    borderWidth: 2,
    minWidth: 120,
    alignItems: "center",
  },
  activeLight: {
    backgroundColor: "#f1c40f",
    borderColor: "#f39c12",
  },
  inactiveLight: {
    backgroundColor: "white",
    borderColor: "#ddd",
  },
  activeDark: {
    backgroundColor: "#34495e",
    borderColor: "#2c3e50",
  },
  inactiveDark: {
    backgroundColor: "#2c3e50",
    borderColor: "#555",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  activeText: {
    color: "#2c3e50",
  },
  inactiveText: {
    color: "#7f8c8d",
  },
  previewBox: {
    padding: 30,
    borderRadius: 16,
    marginTop: 20,
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  lightBox: {
    backgroundColor: "white",
  },
  darkBox: {
    backgroundColor: "#2c3e50",
  },
  previewText: {
    fontSize: 18,
    fontWeight: "500",
  },
});