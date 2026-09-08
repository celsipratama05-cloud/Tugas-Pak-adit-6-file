import { View, Text } from "react-native";

export default function App() {
  let menu = ["Burger", "Pizza", "Hotdog", "Pasta"];
  menu.splice(2, 1, "Spaghetti", "Salad");
  console.log(menu);

  return (
    <View>
      <Text>Soal 6</Text>
    </View>
  );
}