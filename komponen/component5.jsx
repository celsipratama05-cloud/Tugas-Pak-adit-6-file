import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

function MyButton(props) {
  let bgColor = "#3498db";
  if (props.variant === "success") bgColor = "#2ecc71";
  if (props.variant === "danger") bgColor = "#e74c3c";

  return (
    <TouchableOpacity 
      onPress={props.onPress} 
      style={[styles.button, { backgroundColor: bgColor }]}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Varian Button</Text>
      <MyButton title="Primary" variant="primary" onPress={() => {}} />
      <MyButton title="Success" variant="success" onPress={() => {}} />
      <MyButton title="Danger" variant="danger" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 30,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 30,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});