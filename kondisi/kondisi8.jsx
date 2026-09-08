import { Text, View } from "react-native";

export default function Soal8() {
  const jenisKendaraan = "Mobil";

  return (
    <View>
      <Text>
        {jenisKendaraan === "Mobil"
          ? "Tarif Parkir: Rp 5.000 / jam"
          : "Tarif Parkir: Rp 2.000 / jam"}
      </Text>
    </View>
  );
}