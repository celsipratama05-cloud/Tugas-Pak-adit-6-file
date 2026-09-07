import { View, Text } from "react-native";

export default function kondisi() {
  const nilaiUjian = 80; 

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        style={{
          fontSize: 20,
          color: nilaiUjian >= 75 ? "green" : "red",
        }}
      >
        {nilaiUjian >= 75
          ? "Selamat, Anda Lulus!"
          : "Maaf, Anda Belum Lulus."}
      </Text>
    </View>
  );
}