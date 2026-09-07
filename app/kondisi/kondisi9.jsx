import { Text, View } from "react-native";

export default function Soal9() {
  const stokBarang = 7;

  return (
    <View>
      <Text
        style={{
          color:
            stokBarang > 10
              ? "green"
              : stokBarang >= 1
              ? "orange"
              : "red",
        }}
      >
        {stokBarang > 10
          ? "Stok Tersedia"
          : stokBarang >= 1
          ? "Stok Terbatas! Segera Beli"
          : "Stok Habis"}
      </Text>
    </View>
  );
}