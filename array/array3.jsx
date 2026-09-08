import { View, Text } from "react-native";

export default function App() {
  let antreanVaksin = [];
  antreanVaksin.push("Andi", "Budi", "Siti");
  antreanVaksin.pop();
  console.log(antreanVaksin);

  return (
    <View>
      <Text>Soal 3</Text>
    </View>
  );
}