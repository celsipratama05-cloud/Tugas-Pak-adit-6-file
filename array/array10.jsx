import { View, Text } from "react-native";

export default function App() {
  let keranjangA = ["Sepatu", "Baju"];
  let keranjangB = ["Tas", "Topi"];
  let keranjangUtama = [...keranjangA, ...keranjangB, "Jaket"];
  console.log(keranjangUtama);

  return (
    <View>
      <Text>Soal 10</Text>
    </View>
  );
}