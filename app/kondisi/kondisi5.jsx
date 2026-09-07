import { Text, View } from "react-native";

export default function Soal5() {
  const jamSekarang = 19;

  return (
    <View>
      <Text>
        {jamSekarang >= 8 && jamSekarang <= 17
          ? "Toko Buka"
          : "Toko Tutup"}
      </Text>
    </View>
  );
}