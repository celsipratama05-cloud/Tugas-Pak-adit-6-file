import React, { useState } from "react";
import { View, Text, Button, Modal, ActivityIndicator, StyleSheet } from "react-native";

export default function App() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Data Fetcher</Text>
      <Button 
        title="Fetch Data" 
        onPress={() => setLoading(true)} 
        color="#3498db"
      />

      <Modal 
        visible={loading} 
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ActivityIndicator size="large" color="#3498db" />
            <Text style={styles.loadingText}>Memuat data...</Text>
            <Button 
              title="Tutup" 
              onPress={() => setLoading(false)} 
              color="#e74c3c"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f6fa",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 30,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 30,
    borderRadius: 16,
    alignItems: "center",
    width: "80%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 10,
  },
  loadingText: {
    fontSize: 18,
    color: "#2c3e50",
    marginVertical: 20,
    fontWeight: "500",
  },
});