import { View, Text, SectionList, StyleSheet } from "react-native";

export default function App() {
  const dataNilai = [
    { title: "Mata Pelajaran Kejuruan", data: ["RPL: 90", "Basdat: 88"] },
    { title: "Mata Pelajaran Umum", data: ["Matematika: 85", "B.Indo: 92"] },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>📊 Laporan Nilai</Text>
      <SectionList
        sections={dataNilai}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderItem={({ item, index }) => (
          <View style={[styles.item, index % 2 === 0 ? styles.evenItem : styles.oddItem]}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{title}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2c3e50",
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  sectionHeader: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 8,
    shadowColor: "#3498db",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  item: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: 4,
  },
  evenItem: {
    backgroundColor: "white",
  },
  oddItem: {
    backgroundColor: "#f1f3f5",
  },
  itemText: {
    fontSize: 15,
    color: "#2c3e50",
  },
});