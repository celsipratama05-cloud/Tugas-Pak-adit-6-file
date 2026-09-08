import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.categoryWrapper}>
        <Text style={styles.sectionTitle}>Kategori</Text>
        <ScrollView 
          horizontal={true} 
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
        >
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>📱 Teknologi</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>📚 Pendidikan</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>💻 Programming</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>🎨 Desain</Text>
          </View>
          <View style={styles.categoryItem}>
            <Text style={styles.categoryText}>📊 Bisnis</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.articleContainer}>
        <Text style={styles.articleTitle}>Artikel Utama</Text>
        <View style={styles.articleCard}>
          <Text style={styles.articleContent}>
            Ini adalah isi konten artikel pembelajaran lengkap tentang React Native 
            dan pengembangan aplikasi mobile modern. Pelajari berbagai komponen dan 
            fitur yang tersedia.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f6fa",
  },
  categoryWrapper: {
    paddingVertical: 20,
    backgroundColor: "white",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  categoryScroll: {
    paddingHorizontal: 20,
  },
  categoryItem: {
    backgroundColor: "#e8f0fe",
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 25,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#d4e2f0",
  },
  categoryText: {
    fontSize: 14,
    color: "#2c3e50",
    fontWeight: "500",
  },
  articleContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  articleTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: 15,
  },
  articleCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  articleContent: {
    fontSize: 16,
    lineHeight: 24,
    color: "#555",
    textAlign: "justify",
  },
});