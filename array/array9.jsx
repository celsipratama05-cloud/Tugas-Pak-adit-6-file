import { View, Text } from "react-native";

export default function App() {
  let semuaNilai = [95, 88, 90, 85, 78, 82];
  let [nilaiUtama, ...sisaNilai] = semuaNilai;
  console.log(nilaiUtama);
  console.log(sisaNilai);

  return (
    <View>
      <Text>Soal 9</Text>
    </View>
  );
}