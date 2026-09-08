import { View, Text } from "react-native";

export default function Udara() {
  const suhuudara = 50;

  return (
    <View>

      {suhuudara > 35 && (
        <Text>Peringatan: Cuaca Sangat Panas Hari Ini!</Text>
      )}
    </View>
  );
}