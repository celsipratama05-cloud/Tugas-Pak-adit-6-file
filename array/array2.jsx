import { View, Text } from "react-native";

export default function App() {
  let nilaiUjian = [78, 90, 65, 88, 92, 70];
  nilaiUjian.sort((a, b) => a - b);
  console.log(nilaiUjian);

  return (
    <View>
      <Text>Soal 2</Text>
    </View>
  );
}