import { Text, View } from "react-native";

export default function Soal10() {
  const usiaPenonton = 15;

  return (
    <View>
      <Text>
        {usiaPenonton < 13
          ? "Kategori: Semua Umur (SU)"
          : usiaPenonton <= 17
          ? "Kategori: Remaja (R)"
          : "Kategori: Dewasa (D)"}
      </Text>
    </View>
  );
}