import { View, Text, FlatList, StyleSheet } from "react-native";

export default function App() {
  const dataProduk = Array.from({ length: 50 }, (_, index) => ({
    id: index.toString(),
    nama: `Produk ${index + 1}`,
  }));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Produk</Text>
      <FlatList
        data={dataProduk}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <View style={[styles.item, index % 2 === 0 ? styles.evenItem : styles.oddItem]}>
            <Text style={styles.itemNumber}>{index + 1}.</Text>
            <Text style={styles.itemName}>{item.nama}</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2c3e50",
    padding: 20,
    paddingBottom: 10,
    backgroundColor: "#f8f9fa",
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 5,
  },
  evenItem: {
    backgroundColor: "white",
  },
  oddItem: {
    backgroundColor: "#f1f3f5",
  },
  itemNumber: {
    fontSize: 14,
    color: "#6c757d",
    marginRight: 10,
    fontWeight: "500",
    width: 30,
  },
  itemName: {
    fontSize: 16,
    color: "#2c3e50",
  },
});