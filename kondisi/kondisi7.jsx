import { Text, View } from "react-native";

export default function Soal7() {
  const password = "123";

  return (
    <View>
      {password.length < 6 && (
        <Text style={{ color: "red" }}>
          Password terlalu pendek (minimal 6 karakter)
        </Text>
      )}
    </View>
  );
}