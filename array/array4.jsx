import { View, Text } from "react-native";

export default function App() {
  let darurat = ["Kebakaran", "Kecelakaan"];
  darurat.unshift("Medis Darurat");
  darurat.shift();
  console.log(darurat);

  return (
    <View>
      <Text>Soal 4</Text>
    </View>
  );
}