import React, { useState } from "react";
import { View, Text, Switch, Button, StyleSheet } from "react-native";

export default function App() {
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>📋 Persetujuan</Text>
        
        <View style={styles.switchContainer}>
          <Text style={styles.label}>Saya menyetujui Syarat & Ketentuan</Text>
          <Switch 
            value={agreed} 
            onValueChange={(val) => setAgreed(val)}
            trackColor={{ false: "#d1d5db", true: "#4CAF50" }}
            thumbColor={agreed ? "#fff" : "#fff"}
            ios_backgroundColor="#d1d5db"
          />
        </View>

        <View style={styles.buttonWrapper}>
          <Button 
            title="Submit" 
            disabled={!agreed} 
            color={agreed ? "#4CAF50" : "#bdc3c7"}
          />
        </View>

        {!agreed && (
          <Text style={styles.warningText}>
            ⚠️ Harap setujui syarat & ketentuan terlebih dahulu
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f4f8",
    padding: 20,
  },
  card: {
    backgroundColor: "white",
    padding: 25,
    borderRadius: 16,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 25,
    textAlign: "center",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#ecf0f1",
  },
  label: {
    fontSize: 16,
    color: "#2c3e50",
    flex: 1,
    marginRight: 15,
  },
  buttonWrapper: {
    marginTop: 25,
    borderRadius: 10,
    overflow: "hidden",
  },
  warningText: {
    marginTop: 15,
    color: "#e74c3c",
    fontSize: 14,
    textAlign: "center",
    fontStyle: "italic",
  },
});