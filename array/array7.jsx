import { View, Text } from "react-native";

export default function App() {
  let judul = "belajar pemrograman perangkat bergerak smk";
  let kataKata = judul.split(" ");
  let slug = kataKata.join("-");
  console.log(slug);

  return (
    <View>
      <Text>Soal 7</Text>
    </View>
  );
}