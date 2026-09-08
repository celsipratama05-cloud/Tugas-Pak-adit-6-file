import { View, Text, Image, StyleSheet } from "react-native";

function UserCard(props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: props.imageUrl }} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={[styles.status, props.status === "Aktif" ? styles.active : styles.alumni]}>
          {props.status}
        </Text>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <UserCard
        name="Andi"
        status="Aktif"
        imageUrl="https://via.placeholder.com/50"
      />
      <UserCard
        name="Budi"
        status="Alumni"
        imageUrl="https://via.placeholder.com/50"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  status: {
    fontSize: 14,
    marginTop: 2,
    fontWeight: "500",
  },
  active: {
    color: "#4CAF50",
  },
  alumni: {
    color: "#FF9800",
  },
});