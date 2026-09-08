import { View, Text } from "react-native";

export default function App() {
  let transaksi = [1000, 2500, 3200, 4100, 5000];
  let sampelData = transaksi.slice(1, 4);
  console.log(sampelData);

  return (
    <View>
      <Text>Soal 5</Text>
    </View>
  );
}