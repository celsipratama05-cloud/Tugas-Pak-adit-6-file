import { Text, View } from "react-native";

export default function Soal6() {
  const isDarkMode = true;

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? "#121212" : "#FFFFFF",
        flex: 1,
      }}
    >
      <Text
        style={{
          color: isDarkMode ? "white" : "black",
        }}
      >
        Mode {isDarkMode ? "Gelap" : "Terang"}
      </Text>
    </View>
  );
}