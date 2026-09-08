import { View, Text } from "react-native";

export default function App() {
  let skorSiswa = [98, 85, 90, 75, 80];
  let [juaraSatu, juaraDua, juaraTiga] = skorSiswa;
  console.log(juaraSatu, juaraDua, juaraTiga);

  return (
    <View>
      <Text>Soal 8</Text>
    </View>
  );
}