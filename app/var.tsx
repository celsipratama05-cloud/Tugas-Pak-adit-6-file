import { View, Text } from "react-native";

export default function Var() {
  const name = "jhon";
  const angka = 10;
  const todayisFriday = true;

  console.log("Nama:", name);
  console.log("Angka:", angka);
  console.log("Hari ini Jumat:", todayisFriday);

return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Nama: {name}</Text>
      <Text>Angka: {angka}</Text>
      <Text>Hari ini Jumat: {todayisFriday ? "true" : "false"}</Text>
    </View>
  );
}